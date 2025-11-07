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

## Additional SEO Enhancements

- [ ] Replace the placeholder Open Graph image reference in `src/app/layout.tsx` with a real asset so shared links render properly.
- [ ] Review and shorten metadata descriptions inside `src/lib/content/<county>-<service>.ts` so each stays within ~155 characters and highlights unique local value props.
- [ ] Add breadcrumb JSON-LD to service/county pages using the existing navigation structure for richer search snippets.
- [ ] Update `next-sitemap.config.mjs` to exclude internal-only paths (e.g., `/docs/**`, `/test-tracking`) from the sitemap output.
- [ ] Ensure every blog article provides explicit `openGraph`/`twitter` metadata with the correct hero imagery instead of relying on defaults.
- [ ] Double-check canonical URL exports across dynamic routes so no page falls back to the global `/` canonical unintentionally.
- [ ] Optimize remote images defined in `src/lib/images.ts` and confirm `next.config.mjs` includes the necessary `remotePatterns`.
- [ ] Emit FAQPage schema wherever the FAQ components render (city/service detail pages) to improve eligibility for rich results.
