# Typography System: Pure Home Inspection LLC

## Brand Typography Principles

Our typography system is designed for clarity, professionalism, and approachability. It ensures all communication is easy to read, accessible, and reinforces our trustworthy, supportive brand personality.

## Primary Typeface

- **Font:** Inter, Open Sans, or a similar modern sans-serif
- **Usage:** Body text, UI elements, and most headings
- **Rationale:** Clean, highly readable, and approachable—ideal for building trust and ensuring accessibility for all users

## Secondary Typeface (Optional)

- **Font:** A slightly bolder sans-serif (e.g., Montserrat or Lato) for major headings or accents
- **Usage:** Section titles, callouts, or key statements
- **Rationale:** Adds visual hierarchy and emphasis while maintaining professionalism

## Type Scale

- **Body Text:** 1rem (16px), line height 1.6–1.7 for readability
- **Headings:**
  - H1: 2.25rem (36px)
  - H2: 1.75rem (28px)
  - H3: 1.5rem (24px)
  - H4: 1.25rem (20px)
- **Supporting Text:** 0.875rem (14px) for captions and fine print

## Hierarchy & Usage

- **Headlines:** Use clear, direct language. Avoid all-caps except for short, intentional emphasis.
- **Body:** Prioritize legibility and comfort. Use regular or medium weight.
- **Supporting Text:** Use muted colors for secondary information.

## Accessibility

- Ensure high contrast between text and background (minimum 4.5:1 for body text)
- Use sufficient font size for all audiences (16px+ for body)
- Avoid using color alone to convey meaning

## Implementation Example (Tailwind CSS)

```js
fontFamily: {
  sans: ['Inter', 'Open Sans', 'system-ui', 'sans-serif'],
  heading: ['Montserrat', 'Lato', 'sans-serif'],
},
fontSize: {
  base: ['1rem', { lineHeight: '1.7' }],
  lg: ['1.125rem', { lineHeight: '1.75' }],
  xl: ['1.25rem', { lineHeight: '1.75' }],
  '2xl': ['1.5rem', { lineHeight: '2rem' }],
  '3xl': ['1.75rem', { lineHeight: '2.25rem' }],
  '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
},
```

## Brand Voice in Typography

- Use sentence case for most text
- Keep headlines concise and reassuring
- Avoid jargon and overly technical language

## Testing & Validation

- Test for readability on all devices
- Validate accessibility with tools like axe-core

## Summary

Our typography system supports Pure Home Inspection LLC’s mission to deliver clear, honest, and professional communication at every touchpoint.
