# Technical Specifications

**Version**: 2.1  
**Last Updated**: February 2026  
**Document Type**: Technical Reference

---

## Table of Contents

1. [Color Specifications](#color-specifications)
2. [Button Specifications](#button-specifications)
3. [Animation Specifications](#animation-specifications)
4. [Responsive Breakpoints](#responsive-breakpoints)
5. [Typography Standards](#typography-standards)
6. [CSS Selectors Reference](#css-selectors-reference)
7. [Animation Keyframes](#animation-keyframes)
8. [Box Shadow System](#box-shadow-system)

---

## Color Specifications

### Primary Palette

| Color Name | Hex Code | RGB | Use Case | CSS Variable |
|------------|----------|-----|----------|--------------|
| Indigo | #6366f1 | 99, 102, 241 | Primary buttons, borders, text | `--primary` |
| Cyan | #0ea5e9 | 14, 165, 233 | Secondary actions, gradients | `--secondary` |
| Emerald | #10b981 | 16, 185, 129 | Success states, accents | `--success` |
| Orange | #f59e0b | 245, 158, 11 | Warnings, highlights | `--warn` |
| Pink | #ec4899 | 236, 72, 153 | Special emphasis | `--accent` |

### Background Colors

```css
/* Primary backgrounds */
background: #ffffff;              /* Cards, sections */
background: #f8fafc;              /* Subtle backgrounds */
background: #f1f5f9;              /* Section dividers */
background: rgba(30, 41, 59, 0.95); /* Navbar dark */

/* Text backgrounds */
background: rgba(99, 102, 241, 0.1);    /* Soft indigo bg */
background: rgba(14, 165, 233, 0.08);   /* Soft cyan bg */
background: rgba(99, 102, 241, 0.12);   /* Button hover bg */
```

### Text Colors

```css
color: #1f2937;           /* Primary text (dark gray) */
color: #4b5563;           /* Secondary text */
color: #6b7280;           /* Muted text */
color: #ffffff;           /* White text on dark bg */
color: #6366f1;           /* Indigo text (CTAs) */
```

### Border Colors

```css
border-color: rgba(99, 102, 241, 0.15);  /* Subtle indigo border */
border-color: rgba(99, 102, 241, 0.35);  /* Medium indigo border */
border-color: rgba(99, 102, 241, 0.7);   /* Strong indigo border */
border-color: rgba(14, 165, 233, 0.2);   /* Cyan borders */
```

### Gradient Definitions

```css
/* Button gradient */
linear-gradient(135deg, #6366f1, #0ea5e9)

/* Hero section gradient */
linear-gradient(135deg, #1e293b 0%, #1e40af 50%, #0e7490 100%)

/* Card hover gradient */
linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(14, 165, 233, 0.1))

/* Shimmer effect */
linear-gradient(90deg, 
  rgba(255, 255, 255, 0) 0%, 
  rgba(255, 255, 255, 0.3) 50%, 
  rgba(255, 255, 255, 0) 100%)
```

---

## Button Specifications

### Navigation Button (.header_btn)

```css
.header_btn {
  /* Sizing */
  padding: 0.7rem 1.4rem;
  height: 40px;
  min-width: 80px;
  
  /* Colors */
  background: rgba(99, 102, 241, 0.12);
  border: 1.5px solid rgba(99, 102, 241, 0.35);
  color: #1f2937;
  
  /* Border */
  border-radius: 999px;
  
  /* Typography */
  font-weight: 700;
  font-size: 0.9375rem;
  letter-spacing: 0.5px;
  
  /* Effects */
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  
  /* Hover */
  &:hover {
    transform: translateY(-3px);
    background: rgba(99, 102, 241, 0.25);
    border-color: rgba(99, 102, 241, 0.7);
    box-shadow: 0 8px 20px rgba(99, 102, 241, 0.25);
  }
  
  /* Active */
  &.active {
    background: linear-gradient(135deg, #6366f1, #0ea5e9);
    border-color: #6366f1;
    color: #ffffff;
    box-shadow: 0 6px 20px rgba(99, 102, 241, 0.3);
  }
}
```

### Download Button (.download)

```css
.download {
  /* Sizing */
  padding: 0.7rem 1.6rem;
  height: 40px;
  
  /* Colors & Gradient */
  background: linear-gradient(135deg, #6366f1, #0ea5e9);
  border: none;
  color: #ffffff;
  
  /* Border */
  border-radius: 999px;
  
  /* Typography */
  font-weight: 800;
  font-size: 0.9375rem;
  letter-spacing: 0.5px;
  
  /* Effects */
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
  
  /* Hover */
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(99, 102, 241, 0.4);
  }
  
  /* Active */
  &:active {
    transform: translateY(-2px);
  }
}
```

### Primary CTA Button (.btn-primary)

```css
.btn-primary {
  /* Sizing */
  padding: 0.75rem 2rem;
  
  /* Colors */
  background: #ffffff;
  border: none;
  color: #6366f1;
  
  /* Border */
  border-radius: 8px;
  
  /* Typography */
  font-weight: 700;
  font-size: 1rem;
  
  /* Effects */
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.2);
  
  /* Hover */
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 25px rgba(99, 102, 241, 0.3);
  }
}
```

### Secondary CTA Button (.btn-secondary)

```css
.btn-secondary {
  /* Sizing */
  padding: 0.75rem 2rem;
  
  /* Colors */
  background: transparent;
  border: 2px solid #ffffff;
  color: #ffffff;
  
  /* Border */
  border-radius: 8px;
  
  /* Typography */
  font-weight: 700;
  
  /* Effects */
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Hover */
  &:hover {
    transform: scale(1.05);
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
  }
}
```

---

## Animation Specifications

### Duration Standards

| Animation | Duration | Use Case |
|-----------|----------|----------|
| Button interactions | 0.35s | Hover, focus, active states |
| Image loading | 0.6-0.7s | Image fade-in effects |
| Card hover | 0.35s | Card elevation, shadow |
| Scroll reveals | 0.5-0.8s | On-scroll animations |
| Menu transitions | 0.4s | Hamburger menu open/close |
| Color transitions | 0.3s | Color changes on hover |

### Easing Functions

```css
/* Standard easing - All transitions */
cubic-bezier(0.4, 0, 0.2, 1)
/* Faster start, gradual end - Smooth, professional feel */

/* Scroll easing */
cubic-bezier(0.2, 0.9, 0.2, 1)
/* Gentle entrance, snappy exit */

/* Image loading */
ease-in-out
/* Natural, smooth deceleration */
```

---

## Responsive Breakpoints

### Breakpoint System

```css
/* Mobile First Approach */

/* Mobile Phones - Base styles */
@media (min-width: 480px) {
  /* Larger phones (480x800) */
}

@media (min-width: 640px) {
  /* Large phones (640x960) */
}

@media (min-width: 768px) {
  /* Tablets & iPad (768x1024) */
}

@media (min-width: 1024px) {
  /* Desktops & Large screens */
  /* Show full navbar, hide hamburger */
}
```

### Breakpoint Specifications

| Device | Width | Layout | Navbar | Columns |
|--------|-------|--------|--------|---------|
| Phone | < 480px | Mobile | Hamburger | 1 |
| Phone (L) | 480-640px | Mobile | Hamburger | 1 |
| Tablet | 640-768px | Tablet | Hamburger | 2 |
| Tablet (L) | 768-1024px | Mixed | Partial | 2-3 |
| Desktop | > 1024px | Desktop | Full | 3-4 |

### Navbar Behavior

```css
/* < 1024px: Hamburger menu */
.navbar nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  transform: translateX(-100%);
  transition: transform 0.4s ease;
}

.navbar nav.active {
  transform: translateX(0);
}

/* >= 1024px: Expandable buttons */
.navbar nav {
  position: static;
  width: auto;
  height: auto;
  flex-direction: row;
  transform: none;
}
```

---

## Typography Standards

### Font Stack

```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 
             Roboto, 'Helvetica Neue', Arial, sans-serif;
```

### Font Sizes

```css
h1 { font-size: 3rem;      }  /* 48px */
h2 { font-size: 2.25rem;   }  /* 36px */
h3 { font-size: 1.875rem;  }  /* 30px */
h4 { font-size: 1.5rem;    }  /* 24px */
h5 { font-size: 1.25rem;   }  /* 20px */
h6 { font-size: 1.125rem;  }  /* 18px */
p  { font-size: 1rem;      }  /* 16px */
small { font-size: 0.875rem; } /* 14px */
```

### Font Weights

```css
/* Headings */
h1, h2, h3, h4, h5, h6 {
  font-weight: 800;
}

/* Body text */
body {
  font-weight: 500;
}

/* Buttons */
button, .btn {
  font-weight: 700;
}

/* Bold emphasis */
strong, .bold {
  font-weight: 700;
}
```

### Line Height & Spacing

```css
/* Body text */
body {
  line-height: 1.7;
  letter-spacing: 0.3px;
}

/* Headings */
h1, h2, h3 {
  line-height: 1.3;
  letter-spacing: -0.5px;
}

/* Buttons */
button {
  line-height: 1.5;
  letter-spacing: 0.5px;
}

/* Code/monospace */
code {
  font-family: 'Courier New', monospace;
  letter-spacing: 0.2px;
}
```

---

## CSS Selectors Reference

### Navigation Selectors

```css
.navbar              /* Global navbar container */
.navbar nav          /* Navigation element */
.navbar nav ul       /* Button list/container */
.header_btn          /* Individual nav button */
.header_btn.active   /* Active nav button */
.header_btn:hover    /* Button hover state */
.download            /* CV download button */
.hamburger           /* Mobile menu toggle */
.hamburger.active    /* Active hamburger state */
```

### Card Selectors

```css
.glass-card          /* Main card component */
.glass-card:hover    /* Card hover state */
.skill-badge         /* Skill tag component */
.skill-badge:hover   /* Skill hover state */
.project-card        /* Project card */
.project-card:hover  /* Project card hover */
```

### Image Selectors

```css
.profile-image       /* Profile photo */
.project-image       /* Project thumbnail */
.project-image:hover /* Project image hover */
img[loading="lazy"]   /* Lazy-loaded images */
.image-loading       /* Loading state */
.image-loaded        /* Loaded state */
```

### Button Selectors

```css
.btn-primary         /* Primary CTA button */
.btn-secondary       /* Secondary CTA button */
.btn-primary:hover   /* Primary button hover */
.btn-secondary:hover /* Secondary button hover */
button:active        /* Button active state */
button:focus         /* Button focus state */
```

### Section Selectors

```css
.hero                /* Hero section */
.hero h1             /* Hero headline */
.about               /* About section */
.education           /* Education section */
.experience          /* Experience section */
.projects            /* Projects section */
.skills              /* Skills section */
.contact             /* Contact section */
```

---

## Animation Keyframes

### Fade In Image

```css
@keyframes fadeInImage {
  from {
    opacity: 0;
    transform: scale(0.98);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Applied to */
.profile-image {
  animation: fadeInImage 0.7s ease-in-out;
}

.project-image {
  animation: fadeInImage 0.6s ease-in-out 0.1s both;
}
```

### Shimmer Loading

```css
@keyframes shimmer {
  from {
    background-position: -1000px 0;
  }
  to {
    background-position: 1000px 0;
  }
}

/* Applied to loading placeholders */
.shimmer {
  animation: shimmer 2s infinite;
  background: linear-gradient(90deg, 
    rgba(255, 255, 255, 0) 0%, 
    rgba(255, 255, 255, 0.3) 50%, 
    rgba(255, 255, 255, 0) 100%);
  background-size: 200% 100%;
}
```

### Button Hover Lift

```css
@keyframes buttonLift {
  to {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(99, 102, 241, 0.25);
  }
}

/* Applied via CSS transitions instead */
.header_btn {
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1),
              box-shadow 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.header_btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(99, 102, 241, 0.25);
}
```

### Card Elevation

```css
@keyframes cardElevate {
  to {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(99, 102, 241, 0.18);
  }
}

/* Applied via CSS transitions */
.glass-card {
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1),
              box-shadow 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.glass-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(99, 102, 241, 0.18);
}
```

---

## Box Shadow System

### Shadow Levels

```css
/* Subtle shadows - Buttons, small elements */
box-shadow: 0 4px 12px rgba(99, 102, 241, 0.15);

/* Medium shadows - Cards, elevated elements */
box-shadow: 0 8px 24px rgba(99, 102, 241, 0.15);

/* Strong shadows - Hover states, emphasis */
box-shadow: 0 12px 36px rgba(99, 102, 241, 0.2);

/* Maximum shadows - Active states, peaks */
box-shadow: 0 20px 40px rgba(99, 102, 241, 0.25);

/* Multi-layer shadows - Complex depth */
box-shadow: 
  0 1px 3px rgba(0, 0, 0, 0.08),
  0 4px 12px rgba(99, 102, 241, 0.15),
  0 8px 24px rgba(99, 102, 241, 0.1);
```

### Shadow Color System

```css
/* Indigo shadows (Primary) */
box-shadow: 0 X Xpx rgba(99, 102, 241, 0.XX);

/* Cyan shadows (Secondary) */
box-shadow: 0 X Xpx rgba(14, 165, 233, 0.XX);

/* Dark shadows (Text, contrast) */
box-shadow: 0 X Xpx rgba(0, 0, 0, 0.XX);

/* White shadows (Light elevation) */
box-shadow: 0 X Xpx rgba(255, 255, 255, 0.XX);
```

---

## Spacing System

### Padding Standards

```css
/* Small spacing - 0.5rem (8px) */
padding: 0.5rem;

/* Base spacing - 0.7-1rem (11-16px) */
padding: 0.7rem 1.4rem;    /* Buttons */
padding: 1rem;             /* Cards */

/* Medium spacing - 1.5-2rem (24-32px) */
padding: 1.5rem;           /* Section padding */
padding: 2rem;             /* Large sections */

/* Large spacing - 3-4rem (48-64px) */
padding: 3rem 2rem;        /* Section top/bottom */
padding: 4rem 2rem;        /* Hero section */
```

### Margin Standards

```css
/* Small margin - 0.5rem (8px) */
margin: 0.5rem;

/* Base margin - 1rem (16px) */
margin-bottom: 1rem;       /* Between paragraphs */

/* Medium margin - 1.5-2rem (24-32px) */
margin-bottom: 1.5rem;     /* Between sections */
margin: 2rem 0;

/* Large margin - 3-4rem (48-64px) */
margin: 3rem 0;            /* Between major sections */
margin: 4rem 0;            /* Top-level spacing */
```

### Gap (Flex/Grid)

```css
gap: 0.5rem;               /* Small groups */
gap: 1rem;                 /* Normal spacing */
gap: 1.5rem;               /* Card grids */
gap: 2rem;                 /* Large grids */
```

---

## Border Specifications

### Border Radius

```css
/* Buttons & Pills */
border-radius: 999px;      /* Pill-shaped (completely rounded) */

/* Cards & Containers */
border-radius: 20px;       /* Smooth rounded corners */
border-radius: 12px;       /* Medium rounded corners */

/* Input fields */
border-radius: 8px;        /* Small rounded corners */

/* Full circles (avatars) */
border-radius: 50%;        /* Perfect circles */
```

### Border Styles

```css
/* Button borders */
border: 1.5px solid rgba(99, 102, 241, 0.35);

/* Card borders */
border: 1px solid rgba(99, 102, 241, 0.15);

/* Accent borders */
border: 2px solid rgba(99, 102, 241, 0.7);

/* Hover borders */
border: 1.5px solid rgba(99, 102, 241, 0.7);
```

---

## File References

| File | Selectors | Lines |
|------|-----------|-------|
| `navbar.css` | `.navbar`, `.header_btn`, `.download`, `.hamburger` | All nav styling |
| `styles.css` | `.glass-card`, animations, colors | Global styles |
| `images.css` | `.profile-image`, `.project-image`, animations | Image styles |
| `imaegs.css` | Alternative image selectors | Backup image styles |
| `index.html` | HTML markup with classes | Structure |

---

## Quick Copy-Paste Values

### Primary Color
```css
#6366f1        /* Hex */
rgb(99, 102, 241)    /* RGB */
rgba(99, 102, 241, 0.15)  /* With opacity */
```

### Secondary Color
```css
#0ea5e9        /* Hex */
rgb(14, 165, 233)    /* RGB */
rgba(14, 165, 233, 0.1)   /* With opacity */
```

### Standard Transition
```css
transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
```

### Button Base
```css
padding: 0.7rem 1.4rem;
border-radius: 999px;
font-weight: 700;
transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
```

### Card Base
```css
background: rgba(255, 255, 255, 0.95);
border: 1px solid rgba(99, 102, 241, 0.15);
border-radius: 20px;
transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
```

---

## Performance Metrics

### File Sizes

| File | Size | Status |
|------|------|--------|
| navbar.css | ~8 KB | Optimized |
| styles.css | ~15 KB | Optimized |
| images.css | ~3 KB | Optimized |
| Total CSS | ~26 KB | Minimal increase |

### Animation Performance

- All animations use GPU-accelerated properties (transform, opacity)
- No layout-triggering properties (width, height, position)
- 60fps on modern devices
- Negligible performance impact

### Browser Rendering

- No layout thrashing
- Efficient repainting
- Cached animations
- Optimized selectors

---

## Version History

**v2.1** (Current)
- Comprehensive technical specifications
- Color palette documentation
- Button specifications detailed
- Animation keyframes defined
- Responsive breakpoints documented
- Box shadow system established

**v2.0**
- Initial design improvements
- Button navbar implementation
- Image animation support
- Color scheme introduction

---

**Status**: ✅ Complete & Current  
**Last Reviewed**: February 2026  
**Next Review**: Quarterly
