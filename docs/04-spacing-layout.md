# Spacing & Layout System: Pure Home Inspection LLC

## Principles

Our spacing and layout system is designed for clarity, comfort, and professionalism. It ensures all content is easy to scan, visually balanced, and accessible to all users.

## Base Spacing

- Use a base-4 or base-8 scale (e.g., 4px, 8px, 16px, 24px, 32px, etc.) for consistent spacing between elements.
- Maintain generous padding and margins to create a sense of openness and trust.

## Layout Grid

- Use a 12-column responsive grid for flexible layouts.
- Max content width: 1200px for desktop, with appropriate padding on smaller screens.
- Center main content and keep navigation clear and accessible.

## Component Spacing

- **Cards:** 24px padding inside, 16px margin outside
- **Buttons:** 12–16px vertical, 24px horizontal padding
- **Forms:** 16–24px between fields, 32px between sections
- **Sections:** 48–64px vertical spacing between major sections

## White Space

- Use white space to separate content and guide the user’s eye.
- Avoid clutter; prioritize readability and a welcoming feel.

## Accessibility

- Ensure touch targets are at least 44x44px
- Maintain clear separation between interactive elements

## Implementation Example (Tailwind CSS)

```js
spacing: {
  0: '0px',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  6: '24px',
  8: '32px',
  12: '48px',
  16: '64px',
},
container: {
  center: true,
  padding: '1rem',
  screens: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1200px',
  },
},
```

## Summary

Our spacing and layout system supports a clean, professional, and approachable brand experience for Pure Home Inspection LLC.
