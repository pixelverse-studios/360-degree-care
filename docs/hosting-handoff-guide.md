# Hosting & Third-Party Services Handoff Guide

This document explains all external services the 360 Degree Care website depends on and what you need to do to take over hosting.

---

## Table of Contents

1. [Source Code & Hosting](#1-source-code--hosting)
2. [Cloudinary (Image Hosting)](#2-cloudinary-image-hosting)
3. [YouTube (Video Hosting)](#3-youtube-video-hosting)
4. [Analytics & Tracking](#4-analytics--tracking)
5. [Contact Form API](#5-contact-form-api)

---

## 1. Source Code & Hosting

### Current Setup

This is a custom-coded website built with Next.js 14 (React framework). It is not a WordPress site or website builder - it requires a developer to maintain and modify.

- **Source code:** GitHub (private repository)
- **Hosting:** Netlify
- **Domain/DNS:** Managed by 360 Degree Care through Squarespace. Once you deploy to your own hosting platform, update the DNS records in Squarespace to point to your new host. 

### What You Will Receive

The complete source code will be provided via a forked repository or zip file. You are responsible for:

1. **Hosting the code** - Set up your own GitHub repository (or similar) with the provided code.

2. **Deploying the site** - Choose a hosting platform that supports Next.js

3. **Ongoing maintenance** - You will need a developer familiar with React/Next.js to maintain the codebase.

### Tech Stack Reference

| Technology | Purpose |
|------------|---------|
| Next.js 14 | React framework (App Router) |
| TypeScript | Type-safe JavaScript |
| Tailwind CSS | Styling |
| React Hook Form + Zod | Form handling and validation |
| Radix UI | Accessible UI components |

---

## 2. Cloudinary (Image Hosting)

### Current Setup

All website images are hosted on Cloudinary, a cloud-based image CDN. Images are served from:

```
https://res.cloudinary.com/pixelverse-studios/image/upload/...
```

**Total Assets:** 60+ images including logos, team photos, service icons, blog images, and hero backgrounds.

**Why Cloudinary:** Provides automatic image optimization, responsive sizing, and global CDN delivery. The site uses Next.js Image component which fetches optimized versions on-demand.

### Files You Need to Modify

| File | Purpose |
|------|---------|
| `src/lib/images.ts` | Contains ALL Cloudinary URLs used by the site |
| `next.config.mjs` | Whitelists Cloudinary domain for Next.js Image optimization |

### Migration Steps

1. **Create a Cloudinary account** at https://cloudinary.com

2. **Download all images** - Every Cloudinary URL is listed in `src/lib/images.ts`. Download each image from its URL.

3. **Upload to your Cloudinary account** - Upload all images and note the new URLs.

4. **Update `src/lib/images.ts`** - Replace every URL with your new Cloudinary URLs:
   ```typescript
   // Current:
   hero: 'https://res.cloudinary.com/pixelverse-studios/image/upload/v1234/360dc/hero.jpg'

   // Replace with your URLs:
   hero: 'https://res.cloudinary.com/YOUR-CLOUD-NAME/image/upload/v1234/hero.jpg'
   ```

5. **Verify `next.config.mjs`** - The config already allows any `res.cloudinary.com` domain, so no changes needed unless you use a different image host.

### Image Inventory

The `cloudinaryImageMap` in `src/lib/images.ts` contains:

- **Favicons:** favicon16, favicon32, favicon64
- **Logos:** 360Logo, CHAPLogo
- **Team Photos:** dylan, fran, jeff, dina
- **Service Icons:** bandAid, laundry, meal, bathing, medication, checkup, etc.
- **Blog Images:** silverTsunami, sandwichGeneration, aiVsHhc, etc.
- **Hero Images:** companionCareHero, homeHealthAidesHero, nursingHero, etc.
- **Lifestyle Photos:** runners, staff, hiking, happyCouple, swimming, etc.

---

## 3. YouTube (Video Hosting)

### Current Setup

The site embeds YouTube videos using a custom lazy-loading component. Videos only load when clicked, which improves page load performance.

**No YouTube API key is required** - the site uses standard YouTube embeds.

### Files You Need to Modify

| File | Purpose |
|------|---------|
| `src/utils/videos.ts` | Registry of all YouTube video IDs |
| `src/components/about/HomeAboutSection.tsx` | Contains one hardcoded YouTube link (line 21) |

### How It Works

The `LiteYouTube` component (`src/components/LiteYouTube.tsx`):
1. Displays a thumbnail from `https://i.ytimg.com/vi/{videoId}/hqdefault.jpg`
2. When clicked, loads the YouTube iframe from `https://www.youtube.com/embed/{videoId}`

### Video IDs Currently Used

These video IDs are referenced in `src/utils/videos.ts`:

| Video ID | YouTube URL |
|----------|-------------|
| `j8iyKjv_efA` | https://youtube.com/watch?v=j8iyKjv_efA |
| `EUz2l-JWHyA` | https://youtube.com/watch?v=EUz2l-JWHyA |
| `Mbp0Jka2Lkw` | https://youtube.com/watch?v=Mbp0Jka2Lkw |
| `6tsrvJAfVpo` | https://youtube.com/watch?v=6tsrvJAfVpo |
| `v1DgslysU54` | https://youtube.com/watch?v=v1DgslysU54 |
| `SyuFhpR7Ni8` | https://youtube.com/watch?v=SyuFhpR7Ni8 |
| `nQJ8cBh-8VU` | https://youtube.com/watch?v=nQJ8cBh-8VU |
| `ZxnfaiJrhsw` | https://youtube.com/watch?v=ZxnfaiJrhsw |

Additionally, `src/components/about/HomeAboutSection.tsx` line 21 contains:
| `940TQdvwoxs` | https://youtu.be/940TQdvwoxs |

### Migration Steps

The videos listed above are hosted on our YouTube channel and need to be transferred to 360 Degree Care's channel.

1. **Request video files** - Contact us to obtain the original video files for upload to your channel.

2. **Upload to 360 Degree Care's YouTube channel** - Upload each video and set visibility to Public or Unlisted as needed.

3. **Get the new video IDs** - After uploading, each video will have a new ID (the string after `watch?v=` in the YouTube URL).

4. **Update `src/utils/videos.ts`** - Replace each old video ID with the corresponding new ID.

5. **Update `src/components/about/HomeAboutSection.tsx`** - Replace the hardcoded YouTube link on line 21 with the new video URL.

---

## 4. Analytics & Tracking

### Current Setup

The site uses multiple analytics and tracking services. All tracking scripts are located in `src/app/layout.tsx` and only load in production.

| Service | Purpose | Account Required |
|---------|---------|------------------|
| Google Tag Manager (GTM) | Analytics container / event management | Yes |
| Google Ads | Conversion tracking for ad campaigns | Yes |

### Important: Historical Data Cannot Be Transferred

We used SiteBehaviour as the primary analytics provider instead of Google Analytics. **Historical analytics data from SiteBehaviour cannot be migrated to Google Analytics** - analytics platforms store data in proprietary formats and don't support cross-platform imports.

You will need to:
- Set up your own analytics accounts
- Start collecting fresh data from your go-live date
- If you need historical data for reference, contact us to request a SiteBehaviour data export before transition

### Hardcoded Tracking IDs to Replace

These IDs are hardcoded in `src/app/layout.tsx` and must be replaced with your own:

| Service | Current ID | Location in layout.tsx |
|---------|------------|------------------------|
| Google Tag Manager | `GTM-PGDVF5CR` | Line ~244 |
| Google Ads | `AW-17090471122` | Lines ~250, ~256 |
| Google Ads Conversion | `AW-17090471122/bfUXCJzCydMaENLJr9U_` | Line ~256 |

Additionally, there's a conversion tag in `src/lib/analytics.ts`:
| Google Ads Conversion | `AW-17090471122/KWXmCPy67MsaENLJr9U_` | Line ~168 |

### Files You Need to Modify

| File | Purpose |
|------|---------|
| `src/app/layout.tsx` | All tracking script injections |
| `src/lib/analytics.ts` | Google Ads conversion tracking function |

### Migration Steps

#### Google Tag Manager & Google Ads

**No code changes required.** The existing GTM container and Google Ads account are managed by 360 Degree Care's marketing team. Contact them to be added to the accounts if you need access.

The tracking IDs in the code are already connected to the client's accounts:
- GTM Container: `GTM-PGDVF5CR`
- Google Ads: `AW-17090471122`

### Phone Number for Conversion Tracking

Google Ads phone conversion tracking is configured with: `(201) 299-4243`

If you change the business phone number, update it in `src/app/layout.tsx` (line ~256):
```typescript
gtag('config', 'AW-17090471122/bfUXCJzCydMaENLJr9U_', {
    'phone_conversion_number': '(201) 299-4243'  // Update this
});
```

---

## 5. Contact Form API

### Current Setup

The contact forms submit to our internal CRM API, which will no longer be accessible after handoff.

**Current Endpoint:**
```
${NEXT_PUBLIC_API_HOST}/v1/contact-forms/${NEXT_PUBLIC_SLUG}
```

**Method:** POST

**Payload Structure:**
```json
{
  "fullname": "string",
  "email": "string",
  "phone": "string",
  "data": {
    "description": "string",
    "services": "string (optional)",
    "employment": "string (optional)"
  }
}
```

### Files You Need to Modify

| File | Purpose |
|------|---------|
| `src/components/contact/ContactForm.tsx` | Form submission logic (line ~70) |
| `src/utils/contact.ts` | Form schemas, validation, and field definitions |

### Migration Steps

1. **Set up your own form backend** - Options include:
   - A CRM with API access (HubSpot, Salesforce, etc.)
   - A form service (Formspree, Basin, Netlify Forms, etc.)
   - A custom backend endpoint

2. **Update the form submission** in `src/components/contact/ContactForm.tsx`:
   ```typescript
   // Current code (line ~70):
   const response = await fetch(
     `${process.env.NEXT_PUBLIC_API_HOST}/v1/contact-forms/${process.env.NEXT_PUBLIC_SLUG}`,
     {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(payload)
     }
   )

   // Replace with your endpoint and adjust payload as needed
   ```

3. **Update environment variables** - Remove `NEXT_PUBLIC_API_HOST` and `NEXT_PUBLIC_SLUG`, add whatever your new backend requires.

4. **Adjust payload structure** - Your new backend may expect a different data format. Modify the `payload` object in `ContactForm.tsx` to match.

### Form Types

The site has three contact form variants, all using the same `ContactForm` component:

| Route | Purpose | Special Fields |
|-------|---------|----------------|
| `/contact` | General inquiries | None |
| `/contact/services` | Service requests | Service type selection |
| `/contact/employment` | Job applications | Employment-related fields |

Form configurations are defined in `src/utils/contact.ts` via the `ContactMap` object.

---

## External Domains Summary

| Domain | Service | Required |
|--------|---------|----------|
| `res.cloudinary.com` | Image hosting | Yes - must set up your own account |
| `i.ytimg.com` | YouTube thumbnails | Automatic with YouTube |
| `youtube.com` | Video embeds | Automatic with YouTube |
| `googletagmanager.com` | Analytics | Managed by client's marketing team |
| `google.com/maps` | Embedded office map | No account needed |

---

*Last Updated: 2025-01-28*
