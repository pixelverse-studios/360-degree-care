# Deployment Summary

<!-- This file is automatically sent via email on successful deployment, then reset for the next cycle -->

## Latest deploy summary
- **Optimized robots.txt for better SEO** - Fixed a critical issue that was preventing search engines from properly rendering pages

## Notes for internal team
- Removed `/_next/` from Disallow rules - this was blocking essential JS/CSS needed for page rendering
- Consolidated duplicate User-agent blocks
- Removed deprecated `Host:` directive (only used by Yandex)
- Simplified `/docs/` rule with trailing slash
- AI bots (GPTBot, ChatGPT, Claude, etc.) are allowed to crawl the site for visibility in AI search
- llms.txt file NOT recommended at this time (no major LLM provider officially supports it yet)

## Changed URLs
- https://www.360degreecare.net/robots.txt
