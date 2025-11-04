# SEO Reset TODO

Running list of action items for cleaning up Google’s index so only the ~80 canonical URLs remain.

- [x] Build an authoritative URL inventory  
  Capture every current route (`page.tsx`) into a tracked list, compare against the target 80 URLs, and remove or convert the surplus routes to `404`/`410`.
- [x] Make the sitemap the single source of truth  
  Remove the duplicate JS config, ensure the TS config is fed by shared slug constants, and keep only the canonical paths (no `/not-found`, `/docs`, etc.).
- [x] Lock down crawl access for legacy/ops-only surfaces  
  Add `robots` metadata to non-public routes and update `robots.txt` policies to disallow deprecated directories.
- [ ] Force Google to clear cached legacy URLs  
  Submit Removals in Search Console for retired directories, use the “Remove Outdated Content” tool where needed, and resubmit the cleaned sitemap. See `docs/google-removal-playbook.md` + `removals/legacy-removal-template.csv` for the workflow and tracking sheet.
- [ ] Resolve the remaining Search Console warnings  
  Fix redirect chains, add canonicals to SEO modules, and revalidate the “Not found”/“Duplicate” reports once the above steps ship. (Canonicals added across all service/about/home SEO heads on 2025-11-04; redirect coverage is now auto-generated from `src/app/services/**` via `next.config.mjs`.)

Last updated: 2025-11-04.
