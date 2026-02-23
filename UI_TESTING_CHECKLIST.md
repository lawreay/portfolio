# UI Testing Checklist

**Version**: 2.1  
**Last Updated**: February 2026  
**Document Type**: QA & Testing Guide

---

## Overview

This document provides comprehensive testing procedures to verify all UI improvements are working correctly across devices, browsers, and screen sizes.

---

## Pre-Testing Checklist

- [ ] Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- [ ] Close all browser extensions (may affect styling)
- [ ] Use latest browser version
- [ ] Test on both desktop and mobile devices
- [ ] Ensure good internet connection (for image loading tests)
- [ ] Have DevTools open (F12) for debugging
- [ ] Document any issues found

---

## Test Environment Setup

### Browsers to Test

| Browser | Minimum Version | Device |
|---------|-----------------|--------|
| Chrome | Latest | Desktop/Mobile |
| Edge | Latest | Desktop |
| Firefox | Latest | Desktop |
| Safari | Latest | Desktop/iPad |
| Chrome Mobile | Latest | Android Phone |
| Safari Mobile | Latest | iPhone |

### Devices & Screen Sizes

```
Mobile Phones:
- 375px (iPhone 6/7/8)
- 412px (iPhone XS Max)
- 360px (Android standard)

Tablets:
- 768px (iPad)
- 1024px (iPad Pro)

Desktops:
- 1366px (Common desktop)
- 1920px (Full HD)
- 2560px (4K)
```

### DevTools Emulation

**Chrome/Edge DevTools**:
1. Press `F12` to open DevTools
2. Click device toolbar icon (top-left)
3. Select device from dropdown OR
4. Click "Edit" to create custom screen sizes

**Firefox DevTools**:
1. Press `F12` to open Inspector
2. Click responsive design mode (Ctrl+Shift+M)
3. Select device or custom size

---

## Test 1: Navigation Buttons

### Basic Functionality

- [ ] All navigation buttons visible on desktop (> 1024px)
- [ ] Buttons have correct text labels
- [ ] All buttons are clickable
- [ ] Clicking button scrolls to correct section
- [ ] No console errors when clicking

### Button Styling

- [ ] Buttons have pill shape (rounded corners)
- [ ] Buttons have indigo background (rgba(99, 102, 241, 0.12))
- [ ] Buttons have indigo border (1.5px)
- [ ] Text color is dark (not white)
- [ ] Padding looks correct (not too small/large)
- [ ] All buttons same size

### Button Hover States

- [ ] Buttons have hover effect
- [ ] Hover reveals lighter indigo background
- [ ] Button lifts up slightly on hover (translate -3px)
- [ ] Shadow appears on hover
- [ ] Hover effect is smooth (0.35s)
- [ ] Hover effect on all buttons
- [ ] No hover effect on mobile (touch)

### Button Active States

- [ ] Current section button has gradient
- [ ] Active button is gradient (Indigo → Cyan)
- [ ] Active button text is white
- [ ] Active button has glow effect (shadow)
- [ ] Active state updates when scrolling
- [ ] Only ONE button active at a time

### Mobile Navigation (< 1024px)

- [ ] Hamburger menu appears on small screens
- [ ] Menu is toggle on/off
- [ ] Menu appears fullscreen
- [ ] Navigation buttons inside menu
- [ ] Buttons stack vertically in menu
- [ ] Clicking button closes menu
- [ ] Menu slides smoothly (0.4s)

### CV Download Button

- [ ] Download button visible on all screens
- [ ] Button has gradient (Indigo → Cyan)
- [ ] Button text is white
- [ ] Button has shadow
- [ ] Hover effect lifts button (-4px)
- [ ] Hover shadow increases
- [ ] Clicking works (initiates download/navigation)
- [ ] Extra bold font weight (800)

---

## Test 2: Colors & Styling

### Primary Colors

**Indigo (#6366f1)**
- [ ] Appears in button backgrounds
- [ ] Appears in button borders
- [ ] Appears in active states
- [ ] Appears in text links
- [ ] Not too bright/dark
- [ ] Readable on white background

**Cyan (#0ea5e9)**
- [ ] Appears in gradients
- [ ] Appears in secondary accents
- [ ] Complements indigo well
- [ ] Not too bright/dark

### Color Consistency

- [ ] All buttons same color
- [ ] All cards have same border color
- [ ] All text same color (dark)
- [ ] No random color variations
- [ ] Colors match design specifications

### Gradient Buttons

- [ ] Gradient smooth transition
- [ ] Starts indigo, ends cyan
- [ ] No banding or stripes
- [ ] Correct angle (135deg)
- [ ] Visible on all backgrounds

### Shadow Colors

- [ ] Shadows match primary colors
- [ ] Shadows not too dark
- [ ] Shadows not too light
- [ ] Shadow colors consistent
- [ ] Shadows visible on light backgrounds

---

## Test 3: Image Loading Animations

### Image Loading

**Test Setup**:
1. Open DevTools (F12)
2. Go to Network tab
3. Throttle to "Slow 3G"
4. Reload page
5. Watch images load

- [ ] Images fade in smoothly
- [ ] Fade-in takes 0.6-0.7s
- [ ] No image flickering
- [ ] No image jumping
- [ ] Images scale slightly during load (0.98 → 1.0)
- [ ] Fade completes when image ready

### Image Display

- [ ] All images visible
- [ ] Images sharp and clear
- [ ] Image proportions correct
- [ ] No distortion or stretching
- [ ] Profile images circular
- [ ] Project images rectangular

### Image Hover Effects

- [ ] Profile image scales on hover (1.02)
- [ ] Project images brighten on hover
- [ ] Hover effect smooth (0.6s)
- [ ] No lag or jank
- [ ] Effect reverses smoothly
- [ ] Works on desktop only (not touch)

### Lazy Loading

- [ ] Images below fold load on scroll
- [ ] Images not in viewport don't load
- [ ] Fade-in animation on lazy load
- [ ] No console errors
- [ ] Improved page load time

---

## Test 4: Responsive Design

### Mobile (< 480px)

```
Test Size: 375px width (iPhone 6/7/8)
```

- [ ] Page readable without horizontal scroll
- [ ] All content visible
- [ ] Buttons full-width or stacked
- [ ] Text size readable (not too small)
- [ ] Images scale properly
- [ ] Navigation hamburger menu visible
- [ ] Logo/branding visible
- [ ] No overlapping elements
- [ ] Safe area margins respected
- [ ] Touch targets > 44px

**Mobile Testing Checklist**:
- [ ] Portrait orientation works
- [ ] Landscape orientation works
- [ ] Text doesn't cut off
- [ ] Forms are usable
- [ ] Buttons clickable without zoom

### Tablet (768px)

```
Test Size: 768px width (iPad)
```

- [ ] Content still readable
- [ ] Grid layouts stack 2 columns
- [ ] Navigation may show partially
- [ ] Good use of space
- [ ] Images appropriately sized
- [ ] No wasted white space
- [ ] Buttons appropriately sized

### Large Tablet (1024px)

```
Test Size: 1024px width (iPad Pro, Large tablet)
```

- [ ] Navigation becomes visible
- [ ] Grammar menu exits (threshold)
- [ ] Full navbar displays
- [ ] All buttons visible inline
- [ ] Grid layouts 3-4 columns
- [ ] Optimal spacing

### Desktop (1366px+)

```
Test Size: 1366px width (Common desktop)
```

- [ ] Full navbar visible
- [ ] All buttons visible
- [ ] Grid layouts multi-column
- [ ] Proper max-width if set
- [ ] Optimal readability
- [ ] Professional appearance
- [ ] No stretching

### Large Desktop (1920px+)

```
Test Size: 1920px width (Full HD)
```

- [ ] Content doesn't stretch too wide
- [ ] Max-width observed
- [ ] Margins look balanced
- [ ] Typography readable
- [ ] Whitespace balanced

### 4K & Ultra-Wide (2560px+)

```
Test Size: 2560px width (4K monitor)
```

- [ ] Content remains centered
- [ ] Max-width prevents too-wide layout
- [ ] Readable text size
- [ ] Proper proportions

---

## Test 5: Animations & Transitions

### Button Animations

- [ ] Hover animation smooth
- [ ] Duration 0.35s
- [ ] No lag on desktop
- [ ] Easing curve feels natural
- [ ] Animation consistent all buttons
- [ ] No jumpy movements

**On slow devices**:
- [ ] Still animates (doesn't skip)
- [ ] May be slightly slower
- [ ] No layout jumps

### Image Animations

- [ ] Fade-in smooth
- [ ] Duration correct (0.6-0.7s)
- [ ] Scale effect subtle
- [ ] No flickering
- [ ] Completes fully

### Card Hover Animations

- [ ] Card lifts on hover (10px up)
- [ ] Shadow increases on hover
- [ ] Border color brightens
- [ ] Duration 0.35s
- [ ] Smooth easing

### Scroll Behaviors

- [ ] Smooth scroll to sections
- [ ] No jumpy behavior
- [ ] Navigation updates while scrolling
- [ ] Active button highlights correctly

### Mobile Animation Testing

- [ ] Hover effects disabled on touch
- [ ] No animations on tap
- [ ] Scroll performance good
- [ ] No animation stutter on mobile
- [ ] Animations don't drain battery

---

## Test 6: Typography

### Font Rendering

- [ ] Text rendering smooth
- [ ] No pixelated fonts
- [ ] Consistent font rendering
- [ ] Anti-aliasing applied
- [ ] Good on all browsers

### Font Sizes

**Headings** (should be large):
- [ ] H1 (48px) - Page title, hero
- [ ] H2 (36px) - Section titles
- [ ] H3 (30px) - Subsection titles
- [ ] Sizes scale down on mobile

**Body Text** (should be readable):
- [ ] 16px base font size
- [ ] Easy to read
- [ ] Not too small
- [ ] Not cramped
- [ ] Proper contrast with background

**Small Text** (if used):
- [ ] Still readable
- [ ] Not too small (min 12px)

### Font Weights

- [ ] Headings bold (800)
- [ ] Regular text normal (500)
- [ ] Buttons extra bold (700-800)
- [ ] ** consistent** throughout

### Line Height & Spacing

- [ ] Line height 1.7 (readable)
- [ ] Letter spacing 0.3px (body text)
- [ ] Proper spacing between elements
- [ ] Text breathes well
- [ ] Not cramped

### Text Contrast

- [ ] Dark text on white background
- [ ] WCAG AA contrast ratio met
- [ ] Text readable for colorblind users
- [ ] No text on clashing backgrounds

---

## Test 7: Keyboard Navigation

### Tab Key Navigation

- [ ] Tab cycles through all interactive elements
- [ ] Tab order logical (left-to-right, top-to-bottom)
- [ ] Focus indicator visible
- [ ] Focus doesn't get stuck
- [ ] Can reach all buttons via keyboard

### Enter Key

- [ ] Enter activates buttons
- [ ] Enter submits forms
- [ ] Enter scrolls to sections

### Escape Key

- [ ] Escape closes mobile menu
- [ ] Escape cancels modal dialogs (if any)

### Screen Reader Compatibility

- [ ] Valid HTML structure
- [ ] Proper heading hierarchy
- [ ] Alt text on images
- [ ] Button labels clear
- [ ] Form labels associated with inputs

---

## Test 8: Form & Input Testing (if applicable)

### Input Fields

- [ ] Focus state visible
- [ ] Can type in fields
- [ ] Placeholder text clear
- [ ] Error messages readable

### Buttons

- [ ] Buttons clickable
- [ ] Buttons focusable
- [ ] Form submits
- [ ] No validation errors (unless intended)

---

## Test 9: Browser Compatibility

### Chrome/Edge

- [ ] All features working
- [ ] Animations smooth
- [ ] Colors correct
- [ ] Responsive working
- [ ] No console errors

### Firefox

- [ ] All features working
- [ ] Animations smooth (may be slightly different easing)
- [ ] Colors correct
- [ ] Responsive working
- [ ] No console errors
- [ ] CSS Grid/Flexbox working

### Safari

- [ ] All features working
- [ ] Animations smooth
- [ ] Colors possibly slightly different (browser rendering)
- [ ] Responsive working
- [ ] No console errors
- [ ] iOS Safari: touch-friendly

### Mobile Browsers

- [ ] Chrome Android: same as desktop
- [ ] Safari iOS: same as desktop
- [ ] Animations not causing battery drain
- [ ] Touch events working

---

## Test 10: Space-Specific Issues

### Overlapping Elements

- [ ] No overlapping buttons
- [ ] No overlapping text
- [ ] No overlapping images
- [ ] Z-index layering correct
- [ ] Navbar doesn't cover content

### Layout Integrity

- [ ] No broken layouts
- [ ] Elements properly aligned
- [ ] Grid/Flexbox working
- [ ] Margins/padding correct
- [ ] No content cut off

### Viewport Units

- [ ] 100vh sections not too tall
- [ ] Viewport-relative sizing working
- [ ] Mobile address bar handled
- [ ] Safe area insets respected

---

## Test 11: Performance Testing

### Load Time

**On Fast Connection**:
- [ ] Page loads quickly
- [ ] Visible content in < 3s
- [ ] All content loaded in < 5s

**On Slow Connection**:
1. DevTools (F12) → Network
2. Set throttling to "Slow 3G"
3. Reload page

- [ ] Page starts loading
- [ ] Images start showing (fade-in)
- [ ] Navigation functional while loading
- [ ] Content not blocking navigation

### Animation Performance

- [ ] No jank/stuttering
- [ ] Smooth 60fps animations
- [ ] No frame drops
- [ ] No lag on scroll
- [ ] Hover effects responsive

**Check Performance** (Chrome):
1. DevTools → Performance
2. Record while hovering buttons
3. Check FPS (should be 60)

### Bundle Size

- [ ] CSS file sizes reasonable (< 50KB total)
- [ ] No images larger than necessary
- [ ] No unused code
- [ ] Optimized for web

---

## Test 12: Cross-Device Testing

### Device Testing Matrix

| Device | Size | OS | Browser | Status |
|--------|------|----|---------| -------|
| iPhone 12 | 390px | iOS | Safari | ☐ |
| iPhone SE | 375px | iOS | Safari | ☐ |
| Pixel 6 | 412px | Android | Chrome | ☐ |
| iPad Air | 768px | iOS | Safari | ☐ |
| iPad Pro | 1024px | iOS | Safari | ☐ |
| Desktop | 1920px | Win/Mac/Linux | Chrome | ☐ |
| Laptop | 1366px | Windows | Edge | ☐ |
| MacBook | 1440px | macOS | Safari | ☐ |

---

## Test 13: Accessibility Audit

### WCAG 2.1 Level AA

- [ ] Color contrast 4.5:1 for text
- [ ] Color contrast 3:1 for large text
- [ ] Focus indicators visible
- [ ] Keyboard navigable
- [ ] No flashing/strobing content
- [ ] Proper heading structure
- [ ] Alt text on images
- [ ] Form labels present
- [ ] No automatic redirects

### Screen Reader Testing

**NVDA (Windows)** or **JAWS**:
- [ ] Page structure logical
- [ ] Headings announced correctly
- [ ] Buttons have labels
- [ ] Links descriptive
- [ ] Images have alt text
- [ ] Navigation announced

**VoiceOver (Mac/iOS)**:
- [ ] Native iPhone testing
- [ ] Gestures work
- [ ] Content readable
- [ ] Navigation clear

---

## Test 14: Error Scenarios

### Error Handling

- [ ] Missing images show gracefully
- [ ] Slow/broken links handled
- [ ] Navigation still works offline
- [ ] Page doesn't crash if data missing
- [ ] Console errors minimal

### Browser Issues

- [ ] Works with extensions enabled
- [ ] Works with JavaScript disabled (graceful degradation)
- [ ] Works in private/incognito mode
- [ ] Works with cookie restrictions

---

## Bug Reporting Template

When issues found, use this template:

```
## Bug Report

**Title**: [Brief description]

**Device**: [iPhone 12 / iPad / Desktop]
**Browser**: [Chrome 95 / Safari 15]
**Screen Size**: [390px / 1920px]

**Steps to Reproduce**:
1. [Step 1]
2. [Step 2]
3. [Step 3]

**Expected Result**:
[What should happen]

**Actual Result**:
[What actually happens]

**Screenshots**:
[Attach images if possible]

**Severity**: High/Medium/Low

**Reproducible**: Yes/Sometimes/No

**Notes**:
[Any additional information]
```

---

## Sign-Off Checklist

**Before Going Live**:

- [ ] All tests completed
- [ ] No critical bugs found
- [ ] All devices tested
- [ ] All browsers tested
- [ ] Performance acceptable
- [ ] Accessibility checked
- [ ] Mobile testing complete
- [ ] Animations working
- [ ] Colors correct
- [ ] Typography validated
- [ ] No console errors
- [ ] Responsive design verified
- [ ] Final review passed

**Sign-Off By**: ________________  
**Date**: ________________  
**Status**: ☐ Ready for Production

---

## Re-Testing Schedule

**After Each Update**:
- [ ] Smoke test (5 min) - Critical features
- [ ] Regression test (15 min) - Changed areas
- [ ] Full test (1 hour) - Major changes

**Before Each Release**:
- [ ] Full test suite
- [ ] Cross-browser test
- [ ] Device testing
- [ ] Accessibility audit
- [ ] Performance check

**Monthly**:
- [ ] Browser compatibility check
- [ ] Device testing
- [ ] Accessibility audit

---

## Common Issues & Solutions

### Images Not Loading

**Issue**: Images show broken icon
**Solution**: 
- [ ] Check image paths in HTML
- [ ] Verify image files exist
- [ ] Check browser console for errors
- [ ] Clear cache and reload

### Buttons Not Hovering

**Issue**: Hover effects don't work
**Solution**:
- [ ] Check CSS file linked
- [ ] Check browser DevTools for CSS errors
- [ ] Verify `:hover` selector applied
- [ ] Test on desktop (touch devices don't hover)

### Layout Broken on Mobile

**Issue**: Content overlaps or misaligns
**Solution**:
- [ ] Check media queries in CSS
- [ ] Verify viewport meta tag
- [ ] Test responsive breakpoints
- [ ] Check container widths

### Animations Stuttering

**Issue**: Hover effects jank
**Solution**:
- [ ] Check for expensive CSS properties (width, height)
- [ ] Use transform and opacity only
- [ ] Close other browser tabs
- [ ] Update browser/graphics driver

### Colors Wrong

**Issue**: Blue looks different
**Solution**:
- [ ] Check color codes (should be `#6366f1`)
- [ ] Clear browser cache
- [ ] Check monitor color profile
- [ ] Test on different monitors

---

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)
- [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/)
- [BrowserStack](https://www.browserstack.com/) - Cloud testing
- [Color Contrast Checker](https://webaim.org/resources/contrastchecker/)

---

## Document Information

**Version**: 2.1  
**Last Updated**: February 2026  
**Maintained By**: QA Team  
**Next Review**: Quarterly  

**Status**: ✅ Complete & Ready for Testing

---

**Good luck with testing! Report all findings clearly and provide reproduction steps.**
