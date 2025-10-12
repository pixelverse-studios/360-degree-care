# Gemini Project Overview: 360-degree-care

This document provides a high-level overview of the 360-degree-care project to optimize interactions with Gemini and other LLMs.

## Project Purpose

This project is a Next.js application for a home healthcare agency. It provides information about the agency's services, locations, and contact information. It also includes a blog and other resources for clients and their families.

## Key Technologies

*   **Framework:** Next.js (App Router)
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS
*   **UI Components:** Custom components, likely using a library like Radix UI or similar (based on `components/ui` directory).
*   **Content:** Markdown for blog posts.

## Project Structure

### Core Application Logic

*   `src/app/`: This directory contains the main application logic, following the Next.js App Router structure.
    *   `src/app/page.tsx`: The home page.
    *   `src/app/layout.tsx`: The main layout for the application.
    *   `src/app/services/...`: Pages related to the different services offered.
    *   `src/app/services/<service>/<county>/page.tsx`: County-specific landing pages for each service.
    *   `src/app/blog/[slug]/page.tsx`: Individual blog post pages.
*   `src/components/`: Contains reusable React components used throughout the application.
    *   `src/components/ui/`: Likely contains base UI components.
    *   `src/components/nav/`: Navigation components like the header and breadcrumbs.
    *   `src/components/hero/`: Hero sections for different pages.
*   `src/lib/`: Contains utility functions, data, and other shared logic.
    *   `src/lib/services.ts`: Data or logic related to the services offered.
    *   `src/lib/blogs/`: Logic for fetching and parsing blog posts.
    *   `src/lib/content/`: Structured content for the county landing pages and other marketing sections.
    *   `src/lib/seo/`: Static SEO helpers (e.g., home page/meta templates) used by the service and county hubs.

### Configuration

*   `next.config.mjs`: Next.js configuration file.
*   `tsconfig.json`: TypeScript configuration.
*   `tailwind.config.ts`: Tailwind CSS configuration.
*   `package.json`: Project dependencies and scripts.

### Public Assets

*   `public/`: Contains static assets like images, fonts, and the site manifest.

## How to get started

*   Install dependencies: `npm install`
*   Run the development server: `npm run dev`
*   Build for production: `npm run build`
*   Run in production: `npm run start`

This overview should provide a solid foundation for understanding the project and interacting with it efficiently.
