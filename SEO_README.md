# SEO & Localized Content Management

This guide explains how county-level service pages are structured now that the legacy `/location/[county]/[city]` and `/services/[service]/[city]` systems have been retired. All localized marketing copy lives in explicit content modules so editors can work with plain TypeScript objects instead of brittle templates.

## Content Sources

County landing pages for each service pull from the files in `src/lib/content/`. Every file follows the pattern:

```
src/lib/content/<county>-<service>.ts
```

and exports a single `CountyPageContent` object.

Example:

```ts
import { CountyPageContent } from './county-service-types'

export const bergenCountyCompanionCareContent: CountyPageContent = {
    metadata: { /* page <head> info */ },
    schemaData: { /* JSON-LD payload */ },
    hero: { /* hero copy + image */ },
    intro: { /* introductory paragraphs */ },
    regionalSections: [ /* per-region blurbs */ ],
    serviceAreas: { /* lists of towns/cities */ },
    services: { /* bullet list of offerings */ },
    servicesBenefits: [ /* optional benefit cards */ ],
    whyChoose: { /* optional paragraphs */ },
    cta: { /* final CTA block */ }
}
```

Edit the fields in these modules directly—no generators or helper templates are involved.

### `CountyPageContent` shape

`src/lib/content/county-service-types.ts` defines the interface. Key pieces:

- `metadata`: Passed to Next.js page metadata export (title, description, keywords).
- `schemaData`: Raw JSON-LD string injected into the page.
- `hero`: Title, subtitle, description, CTA text/value, and optional Cloudinary image key.
- `intro`: `title` plus an array of paragraphs for the opening section.
- `regionalSections`: Array of `{ title, content[] }` used to render per-region cards.
- `serviceAreas`: Heading, subheading, and grouped lists of towns served.
- `services`: Title/description plus the list of service bullets.
- `servicesBenefits`, `whyChoose`: Optional supporting sections.
- `cta`: Title, paragraph array, button label, and phone value for the closing CTA.

Each county service page imports the corresponding content object and feeds it into the reusable county components under `src/components/county/`.

## Page Components

The following components consume the content structure:

- `CountyHeroSection`
- `CountyIntroSection`
- `RegionalSection`
- `ServiceAreaGrid`
- `CountyCTASection`

All live in `src/components/county/` and accept plain props that mirror the content object fields. Update copy in the content modules; only touch these components if you need visual tweaks.

## Adding or Updating Pages

1. Create/edit the content module in `src/lib/content/`.
2. Wire a corresponding page in `src/app/services/<service>/<county>/page.tsx` (e.g., `src/app/services/personal-care/bergen-county/page.tsx`) that imports the content constant.
3. Register the new route in `next-sitemap.config.ts` and, if necessary, surface a link in navigation/footer.
4. Run `npm run lint` and `npm run build` to ensure the static generation still succeeds.

## SEO Notes

- Metadata lives alongside the content for transparency—confirm title/description strings meet length guidelines before publishing.
- JSON-LD is injected verbatim via `schemaData`; validate it with Google’s Rich Results tester whenever you make changes.
- County pages are included explicitly in `next-sitemap.config.ts`; remember to update that file when adding or removing routes.

With the old templating removed, every localized page is now a deliberate, high-quality entry. Update the content modules and the site will render exactly what you author.***
