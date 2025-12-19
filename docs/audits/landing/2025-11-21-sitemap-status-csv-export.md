# Sitemap status header + CSV export (2025-11-21)

- **Change**: Added sitemap coverage header, CSV export, and simplified SEO log cards (overview/what changed/action checklist) on `/docs/seo`.
- **Data source**: Reads URLs directly from `public/sitemap.xml` (and any referenced sitemaps), dedupes, and surfaces total count + export.
- **UI**: New `DownloadSitemapButton` component (secondary, small, download icon) enables CSV download; update cards no longer render indexing queues.
- **Files**: `src/app/docs/seo/page.tsx`, `src/components/ui/download-sitemap-button.tsx`, `src/app/layout.tsx`, `src/lib/images.ts`, `src/lib/seo/*`.
- **QA**: Verify `/docs/seo` renders counts/export on desktop + mobile; download CSV to confirm header `url` + one URL per line; re-run sitemap generation on build.
