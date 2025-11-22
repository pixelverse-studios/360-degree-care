# Deploy Email Automation (Netlify → GitHub Actions → Nylas)

**Complete automation that sends professional, HTML-formatted emails to clients after successful Netlify deploys.**

---

## Overview

This automation creates a seamless chain that notifies clients via email whenever their website is updated:

1. **Netlify** completes a successful deploy
2. **Netlify HTTP notification** triggers a serverless function
3. **Netlify function** sends a `repository_dispatch` event to GitHub
4. **GitHub Actions workflow** runs and sends an HTML email via **Nylas**
5. **Client receives** a professional email with change summary

### Key Features
- ✅ Fully automated - no manual intervention needed
- ✅ HTML-formatted emails with proper styling
- ✅ Customizable email body via markdown file
- ✅ Falls back to recent commit messages if no summary provided
- ✅ Configurable recipients and CC list
- ✅ Date-stamped subject lines

### Email Format
- **Subject:** `New website change log - MM/DD/YYYY`
- **Body:** HTML-formatted with greeting, bulleted change list, and professional signature
- **From:** Configurable sender email
- **To:** Primary recipient(s)
- **CC:** Optional (default: sami@pixelversestudios.io)

---

## Prerequisites

Before setting up this automation, you need:

1. **Netlify account** with a deployed site
2. **GitHub repository** (public or private)
3. **Nylas account** with:
   - API key (US endpoint)
   - Grant ID for the sending mailbox
   - Verified sender email address
4. **GitHub Personal Access Token** with `repo` and `workflow` scopes

---

## Complete File Setup

### 1. Netlify Function

**File:** `netlify/functions/notify-github.js`

```javascript
export const handler = async event => {
    console.log('notify-github invoked')
    try {
        const {
            GITHUB_PAT,
            GH_OWNER,
            GH_REPO,
            DISPATCH_EVENT_TYPE = 'netlify_deploy_success'
        } = process.env

        if (!GITHUB_PAT || !GH_OWNER || !GH_REPO) {
            console.error('Missing GITHUB_PAT, GH_OWNER, or GH_REPO env vars')
            return { statusCode: 500, body: 'Server not configured' }
        }

        // Netlify sends the deploy payload as JSON
        const payload = JSON.parse(event.body || '{}')
        console.log('payload', payload)
        const branch = payload?.branches?.[0] || payload?.branch || 'unknown'
        const commit = payload?.commit_ref || payload?.commit || 'unknown'
        const deployUrl =
            payload?.deploy_ssl_url || payload?.deploy_url || 'unknown'

        const body = {
            event_type: DISPATCH_EVENT_TYPE,
            client_payload: {
                branch,
                commit,
                deploy_url: deployUrl
            }
        }

        const res = await fetch(
            `https://api.github.com/repos/${GH_OWNER}/${GH_REPO}/dispatches`,
            {
                method: 'POST',
                headers: {
                    Authorization: `token ${GITHUB_PAT}`,
                    Accept: 'application/vnd.github+json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            }
        )

        if (!res.ok) {
            const text = await res.text()
            console.error('GitHub dispatch failed', res.status, text)
            return { statusCode: 500, body: 'Failed to dispatch' }
        }

        return { statusCode: 200, body: 'ok' }
    } catch (err) {
        console.error('notify-github error', err)
        return { statusCode: 500, body: 'Error' }
    }
}
```

### 2. GitHub Actions Workflow

**File:** `.github/workflows/deploy-email.yml`

```yaml
name: Deploy change email

on:
  repository_dispatch:
    types: [netlify_deploy_success]
  workflow_dispatch:

jobs:
  email-deploy-summary:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Build change summary
        id: summary
        run: |
          SUMMARY_FILE="docs/deploy-summary.md"
          if [ -f "$SUMMARY_FILE" ]; then
            SUMMARY=$(awk '
              BEGIN { capture=0 }
              /^## Latest deploy summary/ { capture=1; next }
              /^## / { if (capture) exit }
              capture { print }
            ' "$SUMMARY_FILE" | sed '/^[[:space:]]*$/d')
          fi

          if [ -z "$SUMMARY" ]; then
            SUMMARY=$(git log -n 15 --format='- %s (by %an)')
          fi

          if [ -z "$SUMMARY" ]; then
            SUMMARY="- No summary found for this run."
          fi

          {
            echo "summary<<EOF"
            echo "$SUMMARY"
            echo "EOF"
          } >> "$GITHUB_OUTPUT"

      - name: Send email via Nylas
        env:
          NYLAS_API_KEY: ${{ secrets.NYLAS_API_KEY }}
          NYLAS_GRANT_ID: ${{ secrets.NYLAS_GRANT_ID }}
          MAIL_FROM: ${{ secrets.MAIL_FROM }}
          MAIL_TO: ${{ secrets.MAIL_TO }}
          REPO: ${{ github.repository }}
          BRANCH: ${{ github.event.client_payload.branch || github.ref_name || 'unknown' }}
          RUN_URL: "https://github.com/${{ github.repository }}/actions/runs/${{ github.run_id }}"
          SHORT_SHA: ${{ github.event.client_payload.commit || github.sha }}
          SUMMARY_BODY: ${{ steps.summary.outputs.summary }}
        run: |
          if [ -z "$NYLAS_API_KEY" ] || [ -z "$NYLAS_GRANT_ID" ] || [ -z "$MAIL_FROM" ] || [ -z "$MAIL_TO" ]; then
            echo "Missing NYLAS_API_KEY, NYLAS_GRANT_ID, MAIL_FROM, or MAIL_TO secrets." >&2
            exit 1
          fi

          SUBJECT_DATE=$(date +"%m/%d/%Y")
          SUBJECT="New website change log - $SUBJECT_DATE"

          # Convert markdown bullets to HTML list items
          SUMMARY_HTML=$(echo "$SUMMARY_BODY" | sed 's/^- /<li>/; s/$/<\/li>/')
          if [ -n "$SUMMARY_HTML" ]; then
            SUMMARY_HTML="<ul>${SUMMARY_HTML}</ul>"
          fi

          # Build HTML body inline
          HTML_BODY="<p>Hi,</p><p>We just pushed a new set of changes live to the website. See below for an itemized list:</p>${SUMMARY_HTML}<p>Thanks!</p><p><strong>Phil Arfuso</strong><br>Co-Founder &amp; Software Engineer | PixelVerse Studios<br><a href=\"mailto:phil@pixelversestudios.io\">phil@pixelversestudios.io</a><br><a href=\"https://www.pixelversestudios.io\">www.pixelversestudios.io</a><br>(201) 638-1769</p>"

          PAYLOAD=$(jq -n \
            --arg to "$MAIL_TO" \
            --arg from "$MAIL_FROM" \
            --arg subject "$SUBJECT" \
            --arg body "$HTML_BODY" \
            '{
              to: [{ email: $to }],
              cc: [{ email: "sami@pixelversestudios.io" }],
              from: [{ email: $from }],
              subject: $subject,
              body: $body
            }')

          curl -f -X POST \
            -H "Authorization: Bearer $NYLAS_API_KEY" \
            -H "Content-Type: application/json" \
            -d "$PAYLOAD" \
            "https://api.us.nylas.com/v3/grants/$NYLAS_GRANT_ID/messages/send"
```

### 3. Deploy Summary File

**File:** `docs/deploy-summary.md`

```markdown
## Latest deploy summary
- Add example feature
- Fix critical bug in payment processing
- Update homepage hero section

## Notes for client
- Optional internal notes that won't be sent in the email
```

**Important:** Only the content under `## Latest deploy summary` is sent in the email. If this section is empty, the workflow automatically falls back to the last 15 commit messages.

---

## Step-by-Step Setup

### Part 1: GitHub Configuration

1. **Create the workflow file**
   - Create `.github/workflows/deploy-email.yml` with the content above

2. **Add GitHub Secrets**
   - Go to your GitHub repo → **Settings** → **Secrets and variables** → **Actions**
   - Click **New repository secret** for each:
     - `NYLAS_API_KEY` - Your Nylas API key
     - `NYLAS_GRANT_ID` - Your Nylas grant ID
     - `MAIL_FROM` - Verified sender email (e.g., `noreply@yourdomain.com`)
     - `MAIL_TO` - Primary recipient email (e.g., `client@example.com`)

3. **Create GitHub Personal Access Token**
   - Go to GitHub → **Settings** (your profile) → **Developer settings** → **Personal access tokens** → **Tokens (classic)**
   - Click **Generate new token (classic)**
   - Name it (e.g., "Netlify Deploy Automation")
   - Select scopes:
     - ✅ `repo` (Full control of private repositories)
     - ✅ `workflow` (Update GitHub Action workflows)
   - Click **Generate token**
   - **Copy the token** (you won't be able to see it again)

4. **Ensure default branch is correct**
   - The default branch of your repo must match the branch Netlify deploys
   - `repository_dispatch` events only trigger workflows on the default branch
   - Go to repo → **Settings** → **Branches** to check/change default branch

### Part 2: Netlify Configuration

1. **Create the Netlify function**
   - Create `netlify/functions/notify-github.js` with the content above
   - Commit and push to your repository
   - Netlify will automatically deploy the function

2. **Add Netlify Environment Variables**
   - Go to Netlify → Your site → **Site settings** → **Environment variables**
   - Click **Add a variable** for each:
     - `GITHUB_PAT` - The Personal Access Token you created in step 3 above
     - `GH_OWNER` - Your GitHub organization or username (e.g., `pixelverse-studios`)
     - `GH_REPO` - Your repository name (e.g., `360-degree-care`)
   - Optional: `DISPATCH_EVENT_TYPE` - Defaults to `netlify_deploy_success` if not set

3. **Set production branch**
   - Go to **Site settings** → **Build & deploy** → **Continuous deployment**
   - Under "Branches and deploy contexts", set **Production branch** to match your GitHub default branch (usually `main` or `dev`)

4. **Configure Deploy Notification**
   - Go to **Site settings** → **Build & deploy** → **Deploy notifications**
   - Click **Add notification** → **HTTP POST notification**
   - Configure:
     - **Event to listen for:** Deploy succeeded
     - **URL to notify:** `https://your-site-name.netlify.app/.netlify/functions/notify-github`
       - Replace with your actual Netlify URL or custom domain
       - Example: `https://www.360degreecare.net/.netlify/functions/notify-github`
     - **JWS secret token:** Leave blank
   - Click **Save**

### Part 3: Nylas Setup

1. **Create Nylas account** at https://dashboard.us.nylas.com/

2. **Set up email sending**
   - Create an application
   - Connect your email account (Gmail, Office 365, etc.)
   - Verify your sender email address

3. **Get credentials**
   - **API Key:** Found in Nylas dashboard → API Keys
   - **Grant ID:** Found after connecting your email account
   - **Sender email:** The verified email address you'll send from

---

## Workflow Usage

### Regular Deploy Process

1. Make code changes to your project
2. Update `docs/deploy-summary.md` with client-friendly bullet points:
   ```markdown
   ## Latest deploy summary
   - Fixed contact form submission bug
   - Updated homepage images
   - Improved mobile navigation
   ```
3. Commit and push to your production branch
4. Netlify deploys automatically
5. Email is sent automatically to `MAIL_TO` after successful deploy

### Manual Trigger

You can manually trigger the email workflow:

```bash
gh workflow run deploy-email.yml
```

Or via GitHub UI:
- Go to **Actions** → **Deploy change email** → **Run workflow**

### Skip Email Notification

If you want to deploy without sending an email:
- Simply don't update `docs/deploy-summary.md`
- The workflow will still run but will use recent commit messages instead
- To completely skip: temporarily disable the Netlify HTTP POST notification

---

## Customization Guide

### Change Email Subject Line

Edit `.github/workflows/deploy-email.yml` line 60:

```yaml
SUBJECT="Your Custom Subject - $SUBJECT_DATE"
```

### Customize Email Body

Edit `.github/workflows/deploy-email.yml` line 69 to modify the HTML body:

```yaml
HTML_BODY="<p>Your custom greeting,</p><p>Your custom intro text:</p>${SUMMARY_HTML}<p>Your custom closing!</p><p><strong>Your Name</strong><br>Your Title<br><a href=\"mailto:your@email.com\">your@email.com</a></p>"
```

### Change CC Recipients

Edit `.github/workflows/deploy-email.yml` line 78 in the JSON payload:

```yaml
cc: [{ email: "person1@example.com" }, { email: "person2@example.com" }],
```

Or remove the CC line entirely:

```yaml
'{
  to: [{ email: $to }],
  from: [{ email: $from }],
  subject: $subject,
  body: $body
}'
```

### Add Multiple Recipients

Change `MAIL_TO` secret to a comma-separated list, then update the workflow to parse it, or modify the JSON payload in line 77:

```yaml
to: [{ email: "client1@example.com" }, { email: "client2@example.com" }],
```

### Change Deploy Summary File Location

Edit `.github/workflows/deploy-email.yml` line 18:

```yaml
SUMMARY_FILE="path/to/your/summary.md"
```

### Adjust Fallback Commit Count

Edit `.github/workflows/deploy-email.yml` line 29:

```yaml
SUMMARY=$(git log -n 25 --format='- %s (by %an)')  # Changed from 15 to 25
```

---

## Troubleshooting

### No Email Received

1. **Check Netlify function logs**
   - Netlify → **Logs** → **Functions** → `notify-github`
   - Look for errors or missing invocations

2. **Verify environment variables**
   - Netlify: `GITHUB_PAT`, `GH_OWNER`, `GH_REPO`
   - GitHub: `NYLAS_API_KEY`, `NYLAS_GRANT_ID`, `MAIL_FROM`, `MAIL_TO`

3. **Check GitHub Actions**
   - GitHub → **Actions** → Look for "Deploy change email" runs
   - If no runs appear, the `repository_dispatch` didn't fire

4. **Verify branch configuration**
   - Default branch in GitHub must match Netlify production branch
   - `repository_dispatch` only works on the default branch

### GitHub Dispatch Fails

**Error in Netlify logs:** "GitHub dispatch failed 404" or "401"

**Solution:**
- Check `GITHUB_PAT` has `repo` and `workflow` scopes
- Verify `GH_OWNER` and `GH_REPO` are correct
- Regenerate PAT if expired

### Email Formatting Issues

**Problem:** Email shows HTML code instead of formatting

**Solution:**
- Nylas API v3 auto-detects HTML
- Ensure you're using the v3 endpoint: `https://api.us.nylas.com/v3/grants/...`
- Verify HTML_BODY variable doesn't have extra quotes or escaping

### Workflow Syntax Errors

**Problem:** Workflow file fails to parse

**Solution:**
- YAML is very sensitive to indentation (use spaces, not tabs)
- Avoid multiline strings in the `run:` section - use inline strings
- Test locally with: `yamllint .github/workflows/deploy-email.yml`

### Function Not Deployed

**Problem:** Netlify can't find the function

**Solution:**
- Ensure file is at `netlify/functions/notify-github.js`
- Check Netlify build logs for function deployment
- Verify function appears in Netlify → **Functions** tab

---

## Testing the Automation

### Test the Complete Chain

1. Update `docs/deploy-summary.md` with test content
2. Commit and push to production branch
3. Monitor:
   - Netlify deploy logs
   - Netlify function logs
   - GitHub Actions runs
   - Your email inbox

### Test Netlify Function Manually

```bash
curl -X POST https://your-site.netlify.app/.netlify/functions/notify-github \
  -H "Content-Type: application/json" \
  -d '{"branch":"main","commit":"test123","deploy_ssl_url":"https://example.com"}'
```

Expected response: `ok`

Then check GitHub Actions for a new workflow run.

### Test GitHub Workflow Manually

```bash
gh workflow run deploy-email.yml
```

Or in GitHub UI: **Actions** → **Deploy change email** → **Run workflow**

---

## Important Notes

### Security

- **Never commit** your `GITHUB_PAT`, `NYLAS_API_KEY`, or other secrets to the repository
- Always use GitHub Secrets and Netlify Environment Variables
- Rotate PATs periodically (every 6-12 months)

### Branch Strategy

- The default branch in GitHub **must** match the production branch in Netlify
- `repository_dispatch` events only trigger on the default branch
- If you deploy from a different branch, change the GitHub default branch or restructure your workflow

### Rate Limits

- Nylas free tier: 100 emails/day
- GitHub Actions: 2,000 minutes/month (free tier)
- Netlify functions: 125,000 invocations/month (free tier)

### Email Deliverability

- Use a verified sender domain for best deliverability
- Avoid sending from personal Gmail/Outlook accounts for production
- Consider SPF/DKIM/DMARC records for your domain

---

## Using This as a Claude Code Prompt

When setting up this automation for a new client project, provide Claude with this entire document and say:

> "Set up the Netlify → GitHub → Nylas deploy email automation for this project. Use the complete setup documented in `docs/deploy-automation.md`. Customize it for:
> - Client name: [CLIENT_NAME]
> - Repository: [GITHUB_ORG]/[REPO_NAME]
> - Netlify site: [SITE_URL]
> - Recipient email: [CLIENT_EMAIL]
> - Sender details: [YOUR_NAME], [YOUR_TITLE], [YOUR_EMAIL], [YOUR_PHONE], [YOUR_WEBSITE]"

Claude will:
1. Create the Netlify function file
2. Create the GitHub Actions workflow file
3. Create the deploy summary template file
4. Provide exact setup instructions with your specific values
5. Generate the environment variable configurations

### Example Prompt

```
Set up the Netlify → GitHub → Nylas deploy email automation for this project. Use the complete setup documented in `docs/deploy-automation.md`. Customize it for:
- Client name: Acme Corp
- Repository: pixelverse-studios/acme-website
- Netlify site: https://acme-corp.netlify.app
- Recipient email: john@acmecorp.com
- Sender details: Jane Smith, Lead Developer, jane@devstudio.com, (555) 123-4567, www.devstudio.com
```

Claude will handle all file creation and customization automatically.

---

## File Structure Summary

```
your-repo/
├── .github/
│   └── workflows/
│       └── deploy-email.yml          # GitHub Actions workflow
├── docs/
│   ├── deploy-automation.md          # This documentation
│   └── deploy-summary.md             # Change summary for emails
└── netlify/
    └── functions/
        └── notify-github.js          # Netlify serverless function
```

---

## Quick Reference

### Netlify Environment Variables
| Variable | Example | Description |
|----------|---------|-------------|
| `GITHUB_PAT` | `ghp_xxxx...` | GitHub Personal Access Token |
| `GH_OWNER` | `pixelverse-studios` | GitHub organization/username |
| `GH_REPO` | `360-degree-care` | Repository name |
| `DISPATCH_EVENT_TYPE` | `netlify_deploy_success` | Optional, defaults shown |

### GitHub Secrets
| Secret | Example | Description |
|--------|---------|-------------|
| `NYLAS_API_KEY` | `nyk_v0_xxx...` | Nylas API key |
| `NYLAS_GRANT_ID` | `abc123...` | Nylas grant ID for sender |
| `MAIL_FROM` | `noreply@domain.com` | Verified sender email |
| `MAIL_TO` | `client@example.com` | Primary recipient |

### Key URLs
- Netlify function endpoint: `https://[SITE]/.netlify/functions/notify-github`
- GitHub API dispatch: `https://api.github.com/repos/[OWNER]/[REPO]/dispatches`
- Nylas API v3: `https://api.us.nylas.com/v3/grants/[GRANT_ID]/messages/send`

---

**Last Updated:** 2025-11-22
**Version:** 1.0
**Tested With:** Netlify Functions, GitHub Actions, Nylas API v3
