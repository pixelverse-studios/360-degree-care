# Google Legacy URL Removal Playbook

Operational checklist for forcing Google to drop pruned 360° Care URLs after the sitemap reset.

## 1. Prep Inputs

- **Route inventory** – `inventory/route-inventory-*.txt` captures every `page.tsx` route in the repo. Use the latest timestamped file as the canonical list of what currently exists.
- **Target keep list** – highlight (or copy into a separate sheet) the ~80 URLs that should remain indexable. Everything else becomes a removal candidate once it returns a `404` or `410`.
- **HTTP status checks** – for each candidate, run `curl -I https://www.360degreecare.net/path` (or use the URL Inspection API) to confirm it now responds with `404`, `410`, or has been redirected to an approved destination.

> ⚠️ Do **not** submit a removal request for any URL that still 200s; Google will reject it.

## 2. Bulk Removals in Search Console

1. Open the property for `https://www.360degreecare.net`.
2. Navigate to **Indexing → Removals → Temporary Removals → New Request**.
3. Choose **“Remove all URLs with this prefix.”**
4. Paste the path prefix (e.g., `https://www.360degreecare.net/services/legacy-service/`).
5. Submit and note the 6‑month expiration. Re-submit if stubborn URLs persist after the underlying `404/410` fix.

Use `removals/legacy-removal-template.csv` to queue and track each prefix request before/after submission.

## 3. Remove Outdated Content (public tool)

For single URLs that still appear in Google despite returning `404/410`:

1. Visit <https://search.google.com/search-console/remove-outdated-content>.
2. Enter the exact URL.
3. Repeat for `http` and `https` variants if both existed historically.
4. Log each request in the template so you can monitor approvals.

## 4. Re-submit the Clean Sitemap

- After removals, run `npm run postbuild` (or `npx next-sitemap --config next-sitemap.config.ts`) and deploy the updated `public/sitemap.xml`.
- In Search Console, go to **Indexing → Sitemaps**, paste `/sitemap.xml`, and click **Submit** to trigger a fresh crawl.

## 5. Monitor & Revalidate

- Check **Indexing → Pages** weekly. As buckets (`Not found`, `Crawled – currently not indexed`, etc.) shrink, click **Validate fix** so Google reprocesses more quickly.
- Keep the `inventory/` snapshot in sync (rerun `node scripts/generate-route-inventory.mjs` after each deployment). If new routes get removed, file another removal request immediately.

## 6. Communication Tips

- Share the CSV log with marketing/ops so they know which prefixes were suppressed.
- When a legacy directory is permanently retired, store the confirmation (screenshot or log) alongside the CSV so there’s an audit trail for compliance.

Once all requests are submitted and validated, check off the TODO item “Force Google to clear cached legacy URLs.”***
