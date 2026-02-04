
# Plan: Create Brand Favicon and Update Metadata

## Overview
Create a custom favicon that matches the Pulse Fitness brand identity, replace the default Lovable favicon, and update all metadata references.

## Step 1: Create SVG Favicon
Create a new favicon as an SVG file that matches the existing brand identity:
- A rounded square with the brand gradient (blue to magenta)
- A bold "P" letter centered inside
- Modern, simple design that scales well at small sizes

**File to create:** `public/favicon.svg`

## Step 2: Update index.html
Update the HTML to reference the new favicon and fix metadata:

1. Add explicit favicon link pointing to the new SVG
2. Add Apple touch icon for iOS devices
3. Update OpenGraph image (keep Lovable's for now unless you have a custom image)
4. Add theme color meta tag for browser chrome matching

**Changes to `index.html`:**
```html
<!-- Replace/add in the <head> section -->
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="apple-touch-icon" href="/favicon.svg" />
<meta name="theme-color" content="#0066FF" />
```

## Step 3: Remove Old Favicon (Optional)
The old `public/favicon.ico` can be kept as a fallback for older browsers, or removed since the SVG favicon will be the primary one.

## Technical Details

### Favicon SVG Design
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <defs>
    <linearGradient id="pulse-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0066FF"/>
      <stop offset="100%" stop-color="#FF0080"/>
    </linearGradient>
  </defs>
  <rect width="32" height="32" rx="6" fill="url(#pulse-gradient)"/>
  <text x="16" y="23" text-anchor="middle" fill="white" 
        font-family="Montserrat, Arial, sans-serif" 
        font-weight="bold" font-size="20">P</text>
</svg>
```

### Files to Modify
| File | Change |
|------|--------|
| `public/favicon.svg` | Create new SVG favicon |
| `index.html` | Add favicon links and theme-color meta |

### Metadata Updates Summary
- Favicon: New branded SVG with gradient "P" logo
- Theme color: `#0066FF` (pulse-blue)
- Apple touch icon: Same as favicon
- OpenGraph/Twitter images: Keep current (would need custom image upload to change)

## Verification Steps
After implementation:
1. Check browser tab shows new "P" favicon with gradient
2. Verify the favicon appears correctly on mobile (add to home screen test)
3. Confirm theme color affects browser chrome on mobile
