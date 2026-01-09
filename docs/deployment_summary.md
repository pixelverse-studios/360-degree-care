# Deployment Summary

<!-- This file is automatically sent via email on successful deployment, then reset for the next cycle -->

## Latest deploy summary
- Fixed duplicate homepage metadata that was causing inconsistent search results
- Shortened site title and description for better SERP display
- Published new blog: "15 Questions to Ask Before Hiring a Home Care Agency in Bergen County"

## Notes for internal team
- Removed `export const metadata` from `src/app/page.tsx` (was duplicating `layout.tsx`)
- Homepage now inherits complete metadata from root layout (includes twitter, canonical, icons)
- Site title shortened from 68 to 58 chars; description from 147 to 136 chars
- Blog moved from staged (2025/) to published (2026/) and exported in index.ts
- 360C-168 completed

## Changed URLs
- https://www.360degreecare.net/
- https://www.360degreecare.net/blog/questions-to-ask-home-care-agency
