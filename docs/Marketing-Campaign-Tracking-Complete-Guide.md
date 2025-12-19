# 📊 Complete Marketing Campaign Tracking Guide
**360 Degree Care - Master Guide for Campaign URL Management**

<div align="center">

  **Quick Links:** [URL Builder](#-interactive-url-builder) | [Platform Templates](#-platform-specific-templates) | [Test URLs](#-test-your-campaigns) | [Common Mistakes](#-common-mistakes-to-avoid) | [Best Practices](#-best-practices--standards)

</div>

---

## 🚀 Quick Start - Choose Your Path

<table>
<tr>
<td width="33%" align="center">

### 🆕 First Time?
Start with our [UTM Basics](#understanding-utm-parameters---the-basics)

</td>
<td width="33%" align="center">

### ⚡ Need Templates?
Jump to [Platform Templates](#-platform-specific-templates)

</td>
<td width="33%" align="center">

### 🧪 Testing?
Go to [Test URLs](#-test-your-campaigns)

</td>
</tr>
</table>

---

## Understanding UTM Parameters - The Basics

Think of UTM parameters as **"return addresses"** for your web traffic. Just like a return address tells you where a letter came from, UTM parameters tell you exactly where your website visitors originated.

### 🎯 The 5 UTM Parameters Explained

<table>
<thead>
<tr>
<th width="20%">Parameter</th>
<th width="30%">What It Tracks</th>
<th width="25%">Examples</th>
<th width="25%">When to Use</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>utm_source</strong><br/>📍 Required</td>
<td>WHERE traffic comes from</td>
<td><code>facebook</code><br/><code>google</code><br/><code>newsletter</code></td>
<td>Always - this is mandatory</td>
</tr>
<tr>
<td><strong>utm_medium</strong><br/>📍 Required</td>
<td>HOW traffic arrives</td>
<td><code>social</code><br/><code>cpc</code><br/><code>email</code></td>
<td>Always - this is mandatory</td>
</tr>
<tr>
<td><strong>utm_campaign</strong><br/>📍 Required</td>
<td>WHY you're driving traffic</td>
<td><code>summer-sale</code><br/><code>new-service</code></td>
<td>Always - this is mandatory</td>
</tr>
<tr>
<td><strong>utm_term</strong><br/>📌 Optional</td>
<td>WHAT keywords (paid search)</td>
<td><code>home-care</code><br/><code>elderly-care</code></td>
<td>Only for paid search ads</td>
</tr>
<tr>
<td><strong>utm_content</strong><br/>📌 Optional</td>
<td>WHICH version/creative</td>
<td><code>blue-button</code><br/><code>video-ad</code></td>
<td>For A/B testing different versions</td>
</tr>
</tbody>
</table>

### 📐 How UTM Parameters Build a URL

```
Base URL + ? + utm_source + & + utm_medium + & + utm_campaign
```

**Visual Example:**
```
https://www.360degreecare.net
                ↓
https://www.360degreecare.net?utm_source=facebook
                ↓
https://www.360degreecare.net?utm_source=facebook&utm_medium=social
                ↓
https://www.360degreecare.net?utm_source=facebook&utm_medium=social&utm_campaign=winter-care-2025
```

---

## 🛠️ Interactive URL Builder

### Build Your Campaign URL Step-by-Step:

1. **Base Page:** `https://www.360degreecare.net/[your-page]`
2. **Add Source:** `?utm_source=[platform]`
3. **Add Medium:** `&utm_medium=[type]`
4. **Add Campaign:** `&utm_campaign=[campaign-name]`
5. **Add Content (optional):** `&utm_content=[creative-name]`
6. **Add Term (optional):** `&utm_term=[keyword]`

### 📋 Copy-Ready URL Template:
```
https://www.360degreecare.net?utm_source=SOURCE&utm_medium=MEDIUM&utm_campaign=CAMPAIGN&utm_content=CONTENT
```

---

## 📱 Platform-Specific Templates

### Facebook & Instagram Campaigns

#### Facebook Ads
```
https://www.360degreecare.net?utm_source=facebook&utm_medium=social-cpc&utm_campaign=[campaign-name]&utm_content=[ad-variation]
```

<details>
<summary><strong>📘 Facebook Examples & Best Practices</strong> (Click to expand)</summary>

**Video Ad Campaign:**
```
https://www.360degreecare.net?utm_source=facebook&utm_medium=social-cpc&utm_campaign=elder-care-awareness&utm_content=testimonial-video
```

**Carousel Ad Campaign:**
```
https://www.360degreecare.net?utm_source=facebook&utm_medium=social-cpc&utm_campaign=services-showcase&utm_content=carousel-5-services
```

**Retargeting Campaign:**
```
https://www.360degreecare.net?utm_source=facebook&utm_medium=social-cpc&utm_campaign=website-visitors-30d&utm_content=special-offer
```

**Best Practices:**
- ✅ Use `social-cpc` for paid ads
- ✅ Use `social` for organic posts
- ✅ Include ad format in utm_content (video, carousel, single-image)
- ✅ Add audience info in campaign name (cold, warm, retarget)

</details>

#### Instagram Ads
```
https://www.360degreecare.net?utm_source=instagram&utm_medium=social-cpc&utm_campaign=[campaign-name]&utm_content=[post-type]
```

<details>
<summary><strong>📸 Instagram Examples & Best Practices</strong> (Click to expand)</summary>

**Stories Ad:**
```
https://www.360degreecare.net?utm_source=instagram&utm_medium=social-cpc&utm_campaign=brand-awareness&utm_content=stories-vertical
```

**Reels Ad:**
```
https://www.360degreecare.net?utm_source=instagram&utm_medium=social-cpc&utm_campaign=caregiver-recruitment&utm_content=reels-trending
```

**Feed Post:**
```
https://www.360degreecare.net?utm_source=instagram&utm_medium=social-cpc&utm_campaign=testimonials&utm_content=feed-carousel
```

**Best Practices:**
- ✅ Specify placement (stories, reels, feed) in utm_content
- ✅ Track influencer partnerships separately
- ✅ Use consistent naming with Facebook campaigns

</details>

### Google Ads Campaigns

#### Search Ads
```
https://www.360degreecare.net?utm_source=google&utm_medium=search-cpc&utm_campaign=[campaign-name]&utm_term=[keyword]
```

<details>
<summary><strong>🔍 Google Search Examples & Best Practices</strong> (Click to expand)</summary>

**Branded Search:**
```
https://www.360degreecare.net?utm_source=google&utm_medium=search-cpc&utm_campaign=brand-exact&utm_term=360-degree-care
```

**Service-Specific Search:**
```
https://www.360degreecare.net?utm_source=google&utm_medium=search-cpc&utm_campaign=home-health-bergen&utm_term=home-health-aide-nj
```

**Competitor Campaign:**
```
https://www.360degreecare.net?utm_source=google&utm_medium=search-cpc&utm_campaign=competitor-alternative&utm_term=competitor-name-alternative
```

**Best Practices:**
- ✅ Use `search-cpc` for paid search
- ✅ Include match type in campaign name (exact, broad, phrase)
- ✅ Track branded vs non-branded separately
- ✅ Let Google Ads auto-tag when possible

</details>

#### Display & YouTube Ads
```
https://www.360degreecare.net?utm_source=google&utm_medium=display-cpc&utm_campaign=[campaign-name]&utm_content=[creative-name]
```

<details>
<summary><strong>🖼️ Display & Video Examples</strong> (Click to expand)</summary>

**Display Remarketing:**
```
https://www.360degreecare.net?utm_source=google&utm_medium=display-cpc&utm_campaign=remarketing-7d&utm_content=banner-728x90
```

**YouTube Pre-Roll:**
```
https://www.360degreecare.net?utm_source=youtube&utm_medium=video-cpc&utm_campaign=service-explainer&utm_content=30sec-preroll
```

**Gmail Ads:**
```
https://www.360degreecare.net?utm_source=google&utm_medium=gmail-cpc&utm_campaign=gmail-prospects&utm_content=expanded-template
```

</details>

### Email Marketing

```
https://www.360degreecare.net?utm_source=[email-platform]&utm_medium=email&utm_campaign=[campaign-name]&utm_content=[email-section]
```

<details>
<summary><strong>📧 Email Campaign Examples</strong> (Click to expand)</summary>

**Newsletter - Header Link:**
```
https://www.360degreecare.net?utm_source=mailchimp&utm_medium=email&utm_campaign=monthly-newsletter-jan&utm_content=header-logo
```

**Newsletter - CTA Button:**
```
https://www.360degreecare.net?utm_source=mailchimp&utm_medium=email&utm_campaign=monthly-newsletter-jan&utm_content=main-cta
```

**Automated Welcome Series:**
```
https://www.360degreecare.net?utm_source=hubspot&utm_medium=email&utm_campaign=welcome-series&utm_content=email-1-intro
```

**Best Practices:**
- ✅ Track different links within same email
- ✅ Use email platform name as source
- ✅ Number emails in series (email-1, email-2)
- ✅ Track button clicks vs text links separately

</details>

### Other Platforms

<details>
<summary><strong>🎥 TikTok, LinkedIn & More</strong> (Click to expand)</summary>

**TikTok Ads:**
```
https://www.360degreecare.net?utm_source=tiktok&utm_medium=social-cpc&utm_campaign=gen-z-caregivers&utm_content=trending-sound
```

**LinkedIn Sponsored Content:**
```
https://www.360degreecare.net?utm_source=linkedin&utm_medium=social-cpc&utm_campaign=b2b-partnerships&utm_content=sponsored-article
```

**Twitter/X Ads:**
```
https://www.360degreecare.net?utm_source=twitter&utm_medium=social-cpc&utm_campaign=thought-leadership&utm_content=promoted-tweet
```

**Pinterest Ads:**
```
https://www.360degreecare.net?utm_source=pinterest&utm_medium=social-cpc&utm_campaign=care-tips&utm_content=promoted-pin
```

**Podcast Sponsorship:**
```
https://www.360degreecare.net?utm_source=podcast-name&utm_medium=audio&utm_campaign=podcast-sponsor&utm_content=mid-roll
```

**Influencer Partnership:**
```
https://www.360degreecare.net?utm_source=influencer-name&utm_medium=social&utm_campaign=influencer-collab&utm_content=bio-link
```

</details>

---

## 📋 Naming Conventions & Standards

### ✅ **ALWAYS Follow These Rules**

<table>
<tr>
<td width="50%">

#### ✅ DO THIS
- ✅ **Use lowercase only**
  - `utm_source=facebook`
- ✅ **Use hyphens for spaces**
  - `utm_campaign=winter-sale-2025`
- ✅ **Be consistent**
  - Always use same source names
- ✅ **Keep it short but descriptive**
  - `utm_campaign=elder-care-jan`
- ✅ **Use dates wisely**
  - `utm_campaign=black-friday-2025`

</td>
<td width="50%">

#### ❌ DON'T DO THIS
- ❌ **Mixed case**
  - `utm_source=Facebook`
- ❌ **Spaces or special characters**
  - `utm_campaign=Winter Sale 2025!`
- ❌ **Inconsistent naming**
  - Sometimes `fb`, sometimes `facebook`
- ❌ **Too long or too vague**
  - `utm_campaign=campaign1`
- ❌ **Personal information**
  - `utm_campaign=johns-test`

</td>
</tr>
</table>

### 📝 Standard Source Names

| Platform | Correct Source | Wrong Sources |
|----------|---------------|---------------|
| Facebook | `facebook` | ~~FB~~, ~~fb~~, ~~Facebook~~ |
| Instagram | `instagram` | ~~IG~~, ~~ig~~, ~~insta~~ |
| Google Ads | `google` | ~~Google~~, ~~adwords~~ |
| LinkedIn | `linkedin` | ~~LinkedIn~~, ~~LI~~ |
| Email Platform | `mailchimp` | ~~email~~, ~~newsletter~~ |
| TikTok | `tiktok` | ~~TikTok~~, ~~tt~~ |

### 📝 Standard Medium Names

| Type | Correct Medium | Description |
|------|---------------|-------------|
| Paid Social | `social-cpc` | Paid social media ads |
| Organic Social | `social` | Unpaid social posts |
| Paid Search | `search-cpc` | Google/Bing search ads |
| Display Ads | `display-cpc` | Banner/display advertising |
| Email | `email` | All email marketing |
| Referral | `referral` | Partner/referral traffic |
| Video | `video-cpc` | YouTube/video ads |
| Affiliate | `affiliate` | Affiliate marketing |

### 🏷️ Campaign Naming Formula

```
[objective]-[audience]-[date/season]-[variation]
```

**Examples:**
- `awareness-seniors-q1-2025`
- `conversion-retarget-black-friday`
- `recruitment-caregivers-ongoing`

---

## ⚠️ Common Mistakes to Avoid

### 🚨 **Critical Mistakes**

<table>
<tr>
<td width="33%">

#### ❌ Case Sensitivity Chaos
**Problem:** Using `Facebook` and `facebook` creates two separate sources in analytics

**Solution:** Always use lowercase

**Fix:** Set up filters in Google Analytics to force lowercase

</td>
<td width="33%">

#### ❌ Copy-Paste Disasters
**Problem:** Reusing old campaign URLs with outdated parameters

**Solution:** Always create fresh URLs for new campaigns

**Fix:** Use our URL builder tool

</td>
<td width="33%">

#### ❌ Internal Link Tagging
**Problem:** Adding UTMs to internal site links

**Solution:** Only tag external links coming TO your site

**Fix:** Use GA events for internal tracking

</td>
</tr>
</table>

### ⚠️ **Common Pitfalls**

1. **Forgetting to Test**
   - Always test your URLs before launching campaigns
   - Use our [test URLs](#-test-your-campaigns) section

2. **Inconsistent Naming**
   - Create a naming convention document
   - Share with entire team

3. **Missing Documentation**
   - Keep a spreadsheet of all campaigns
   - Note who created each campaign

4. **Overcomplicating Names**
   - Keep it simple and readable
   - Avoid internal jargon

5. **Not Tracking Everything**
   - Every paid link should have UTMs
   - Don't forget email signatures!

---

## 🧪 Test Your Campaigns

### ✨ Live Test URLs - Click to Test Now!

Test these URLs to see tracking in action:

#### Basic Tests
- [Test Basic Tracking](https://www.360degreecare.net?utm_source=test&utm_campaign=basic_test)
- [Test with All Parameters](https://www.360degreecare.net?utm_source=test&utm_medium=test&utm_campaign=full_test&utm_content=all_params&utm_term=test)

#### Platform Tests
- [Test Facebook Campaign](https://www.360degreecare.net?utm_source=facebook&utm_medium=social&utm_campaign=test_fb_campaign)
- [Test Google Campaign](https://www.360degreecare.net?utm_source=google&utm_medium=cpc&utm_campaign=test_google_campaign)
- [Test Email Campaign](https://www.360degreecare.net?utm_source=email&utm_medium=email&utm_campaign=test_email_campaign)

### 🔍 How to Verify Tracking is Working

1. **Open Browser Developer Tools**
   - Press `F12` or right-click → "Inspect"
   - Go to "Console" tab

2. **Click a Test URL Above**

3. **Look for These Success Messages:**
   ```
   ✅ "Campaign tracked: {your parameters}"
   ✅ "SiteBehaviour event sent: Campaign: test_campaign"
   ```

4. **Check SiteBehaviour Dashboard**
   - Go to Events → Custom Events
   - Look for "Campaign: [your_campaign_name]"

5. **Verify in Google Analytics**
   - Real-Time → Traffic Sources
   - See your test source appear

### 🛠️ Interactive Testing Tool

Visit our testing page for advanced features:
👉 **[https://www.360degreecare.net/test-tracking](https://www.360degreecare.net/test-tracking)**

Features:
- URL generator with validation
- Live preview of tracking data
- Campaign history viewer
- Attribution reports

---

## 📊 Best Practices & Standards

### 🎯 The Golden Rules

1. **Document Everything**
   - Maintain a campaign tracking spreadsheet
   - Include: Date, Creator, Campaign Name, Full URL, Performance Notes

2. **Test Before Launch**
   - Always test URLs in incognito/private mode
   - Verify in analytics before spending ad budget

3. **Be Consistent**
   - Use the same naming convention across all campaigns
   - Train all team members on standards

4. **Review Regularly**
   - Monthly audit of campaign data
   - Clean up inconsistent naming in analytics

5. **Think Long-term**
   - Your future self needs to understand these names
   - Avoid temporary abbreviations

### 📈 Pro Tips for Better Tracking

<details>
<summary><strong>🚀 Advanced Tracking Strategies</strong> (Click to expand)</summary>

#### Multi-Touch Attribution
Track the full customer journey:
```
First Touch: ?utm_campaign=awareness-top-funnel
Middle Touch: ?utm_campaign=consideration-nurture
Last Touch: ?utm_campaign=conversion-bottom-funnel
```

#### A/B Testing with UTMs
```
Version A: ?utm_campaign=sale&utm_content=discount-20
Version B: ?utm_campaign=sale&utm_content=discount-bogo
```

#### Seasonal Campaign Structure
```
Q1: ?utm_campaign=q1-2025-elderly-care
Q2: ?utm_campaign=q2-2025-elderly-care
Q3: ?utm_campaign=q3-2025-elderly-care
Q4: ?utm_campaign=q4-2025-elderly-care
```

#### Cross-Channel Campaign Tracking
Same campaign across channels:
```
Facebook: ?utm_source=facebook&utm_campaign=summer-care-2025
Google: ?utm_source=google&utm_campaign=summer-care-2025
Email: ?utm_source=email&utm_campaign=summer-care-2025
```

</details>

---

## 📚 Resources & Tools

### 🛠️ Helpful Tools

- **[Google Campaign URL Builder](https://ga-dev-tools.web.app/campaign-url-builder/)** - Google's official tool
- **[360 Degree Care Test Page](/test-tracking)** - Our custom testing tool
- **[UTM Parameter Validator](https://www.360degreecare.net/test-tracking)** - Check your URLs

### 📖 Additional Reading

- [Google Analytics UTM Best Practices](https://support.google.com/analytics/answer/1033863)
- [Facebook Ads UTM Tracking Guide](https://www.facebook.com/business/help/2360940870872492)
- [Email Marketing UTM Strategy](https://www.360degreecare.net/test-tracking)

### 📊 Campaign Tracking Spreadsheet Template

Create your own tracking spreadsheet with these columns:

| Date | Campaign Name | Full URL | Source | Medium | Campaign | Content | Creator | Status | Notes |
|------|--------------|----------|--------|--------|----------|---------|---------|--------|-------|
| 2025-01-15 | Winter Sale FB | [full url] | facebook | social-cpc | winter-sale-2025 | carousel | John D. | Active | 15% CTR |

### 🆘 Need Help?

- **Quick Questions:** Reference this guide
- **Testing Issues:** Visit `/test-tracking`
- **Technical Support:** Contact the development team
- **Campaign Strategy:** Consult with marketing team lead

---

## 🎓 Training & Onboarding

### New Team Member Checklist

- [ ] Read this complete guide
- [ ] Test 3 different campaign URLs
- [ ] Create your first campaign URL
- [ ] Add campaign to tracking spreadsheet
- [ ] Verify in analytics dashboard
- [ ] Complete UTM quiz (below)

### Quick Knowledge Check

<details>
<summary><strong>📝 Test Your UTM Knowledge</strong> (Click to expand)</summary>

**Question 1:** Which UTM parameter identifies WHERE traffic comes from?
- Answer: `utm_source`

**Question 2:** Should you use UTM parameters on internal site links?
- Answer: No, only external links TO your site

**Question 3:** What's wrong with: `utm_campaign=Summer Sale 2025!`?
- Answer: Contains spaces and special characters (should be: `summer-sale-2025`)

**Question 4:** Which is correct: `utm_source=Facebook` or `utm_source=facebook`?
- Answer: `utm_source=facebook` (always lowercase)

**Question 5:** What are the 3 required UTM parameters?
- Answer: utm_source, utm_medium, utm_campaign

</details>

---

## 📅 Maintenance & Updates

### Version History
- **v2.1** (Sept 2025) - Added SiteBehaviour integration
- **v2.0** (Jan 2025) - Complete guide creation
- **v1.0** (Dec 2024) - Initial documentation

### Regular Maintenance Tasks
- **Weekly:** Review new campaigns for naming consistency
- **Monthly:** Audit analytics for data quality
- **Quarterly:** Update platform templates and best practices
- **Annually:** Review and update entire guide

---

## 🎯 Quick Reference Card

Save this for easy access:

```
BASIC TEMPLATE:
https://www.360degreecare.net?utm_source=[source]&utm_medium=[medium]&utm_campaign=[campaign]

COMMON SOURCES:          COMMON MEDIUMS:
facebook                 social-cpc (paid social)
instagram               social (organic social)
google                  search-cpc (paid search)
linkedin                email
tiktok                  display-cpc
email                   referral

NAMING RULES:
✅ lowercase only
✅ use-hyphens-not-spaces
✅ keep-it-short
✅ be-consistent
❌ NO CAPITALS
❌ no spaces or special chars
❌ no personal info

TEST URL:
https://www.360degreecare.net/test-tracking
```

---

<div align="center">

**🚀 Ready to Launch Your Campaign?**

Remember: Test First → Launch Second → Track Always

[Back to Top](#-complete-marketing-campaign-tracking-guide) | [Quick Start](#-quick-start---choose-your-path) | [Test Page](/test-tracking)

---

*Last Updated: September 2025 | Version 3.0*
*Created for 360 Degree Care Marketing Team*

</div>