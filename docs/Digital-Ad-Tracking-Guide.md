# Digital Ad Campaign Tracking Guide
**360 Degree Care - Campaign URL Setup**

---

## Quick Start
We've implemented comprehensive UTM tracking to monitor which ads drive traffic and conversions. Simply use the URL templates below for each advertising platform.

---

## Your Campaign URLs

### 📘 Facebook Ads
```
https://www.360degreecare.net?utm_source=facebook&utm_medium=social-cpc&utm_campaign=[CAMPAIGN-NAME]&utm_content=[AD-NAME]
```

### 📸 Instagram Ads
```
https://www.360degreecare.net?utm_source=instagram&utm_medium=social-cpc&utm_campaign=[CAMPAIGN-NAME]&utm_content=[AD-NAME]
```

### 🔍 Google Search Ads
```
https://www.360degreecare.net?utm_source=google&utm_medium=search-cpc&utm_campaign=[CAMPAIGN-NAME]&utm_term=[KEYWORD]
```

### 🖼️ Google Display/Remarketing
```
https://www.360degreecare.net?utm_source=google&utm_medium=display-cpc&utm_campaign=[CAMPAIGN-NAME]&utm_content=[AD-NAME]
```

### 🎥 TikTok Ads
```
https://www.360degreecare.net?utm_source=tiktok&utm_medium=social-cpc&utm_campaign=[CAMPAIGN-NAME]&utm_content=[AD-NAME]
```

### 💼 LinkedIn Ads
```
https://www.360degreecare.net?utm_source=linkedin&utm_medium=social-cpc&utm_campaign=[CAMPAIGN-NAME]&utm_content=[AD-NAME]
```

### 📧 Email Campaigns
```
https://www.360degreecare.net?utm_source=email&utm_medium=email&utm_campaign=[CAMPAIGN-NAME]&utm_content=[EMAIL-NAME]
```

---

## How to Use

1. **Copy the appropriate URL** for your platform
2. **Replace the placeholders** (in brackets) with your actual values:
   - `[CAMPAIGN-NAME]` → Example: "winter-2025-seniors" or "home-care-january"
   - `[AD-NAME]` → Example: "video-1" or "carousel-testimonial"
   - `[KEYWORD]` → Example: "home-care-nj" or "elderly-assistance"

3. **Use lowercase with dashes** (no spaces):
   - ✅ Good: `utm_campaign=winter-sale-2025`
   - ❌ Bad: `utm_campaign=Winter Sale 2025`

---

## Real Examples

**Facebook Campaign:**
```
https://www.360degreecare.net?utm_source=facebook&utm_medium=social-cpc&utm_campaign=elder-care-2025&utm_content=video-testimonial
```

**Google Search Campaign:**
```
https://www.360degreecare.net?utm_source=google&utm_medium=search-cpc&utm_campaign=bergen-county-care&utm_term=home-health-aide
```

**TikTok Campaign:**
```
https://www.360degreecare.net?utm_source=tiktok&utm_medium=social-cpc&utm_campaign=caregivers-jan-2025&utm_content=duet-response
```

**Email Newsletter:**
```
https://www.360degreecare.net?utm_source=email&utm_medium=email&utm_campaign=monthly-newsletter&utm_content=jan-2025-edition
```

---

## What We Track

- **Traffic Source** - Which platform sent the visitor (Facebook, Instagram, Google, TikTok, etc.)
- **Campaign Performance** - Which campaigns are driving the most traffic
- **Ad Creative** - Which specific ads/content pieces perform best
- **User Journey** - Complete path from ad click to conversion
- **Attribution** - Both first-touch and last-touch attribution
- **Session Tracking** - Unique session IDs for each visit
- **Cookie Persistence** - 30-day tracking window for returning visitors

---

## Important Notes

✅ **These URLs work on ANY page** - you can also use:
- Service pages: `https://www.360degreecare.net/services/home-care?utm_source=facebook...`
- Location pages: `https://www.360degreecare.net/services/nursing/ridgewood?utm_source=google...`
- Contact page: `https://www.360degreecare.net/contact?utm_source=instagram...`

✅ **Data flows automatically to:**
- Google Tag Manager
- SiteBehaviour Analytics
- Our internal tracking system

✅ **Keep campaign names consistent** across all your ads for better reporting

---

## Advanced Features

### Testing Your Campaign URLs
Visit `/test-tracking` on the website to:
- Generate properly formatted campaign URLs
- Test that tracking is working correctly
- Preview how your campaigns will be tracked
- See live data capture in action

### Ready-to-Use Test URLs
Use these pre-configured URLs to verify tracking is working properly:

**Basic Test URL:**
```
https://www.360degreecare.net?utm_source=test&utm_campaign=tracking_test
```

**SiteBehaviour Dashboard Test:**
```
https://www.360degreecare.net?utm_source=test&utm_campaign=sb_dashboard_test
```

**Facebook Campaign Test:**
```
https://www.360degreecare.net?utm_source=facebook&utm_medium=social&utm_campaign=test_campaign&utm_content=test_ad
```

**Google Ads Test:**
```
https://www.360degreecare.net?utm_source=google&utm_medium=cpc&utm_campaign=test_search&utm_term=test_keyword
```

**Complete Test with All Parameters:**
```
https://www.360degreecare.net?utm_source=test&utm_medium=test&utm_campaign=full_test&utm_content=test_content&utm_term=test_term
```

#### How to Verify Tracking is Working:
1. Open browser DevTools (F12) → Console tab
2. Visit any test URL above
3. Look for these console messages:
   - "Campaign tracked:" (shows captured data)
   - "SiteBehaviour event sent:" (confirms SiteBehaviour integration)
4. Check SiteBehaviour dashboard → Events → Custom Events filter
5. Custom events will appear as "Campaign: [campaign_name]" or "Source: [source_name]"

### Technical Details
- **Cookie Duration:** 30 days (visitors tracked across multiple sessions)
- **Data Storage:** Local storage + cookies for redundancy
- **Case Sensitivity:** All UTM values are automatically converted to lowercase
- **Special Characters:** Use hyphens instead of spaces in campaign names

---

## Questions?

The tracking is automatic once you use these URLs. No additional setup needed on your end!

**Test your URLs first:**
1. Visit `https://www.360degreecare.net/test-tracking` to generate and test URLs
2. Or manually verify by visiting your campaign URL and checking if parameters appear in the browser

**Need Help?** The development team can assist with custom tracking requirements or advanced analytics setup.

---

*Last Updated: September 2025*
*Version: 2.1 - Added SiteBehaviour integration with custom events and test URLs*