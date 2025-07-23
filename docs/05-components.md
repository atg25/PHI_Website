# Component System: Pure Home Inspection LLC

## Principles

Our component system is designed for clarity, trust, and ease of use. Every component should feel approachable, professional, and supportive, helping users confidently navigate the inspection process.

## Buttons

- **Style:** Rounded corners, solid blue (primary) or green (success) backgrounds, clear and readable text
- **States:** Hover and focus states for accessibility
- **Usage:** Clear calls to action (e.g., "Schedule Inspection", "Get Quote")

## Cards

- **Style:** White background, subtle shadow, generous padding
- **Usage:** Service overviews, inspection summaries, testimonials

## Navigation

- **Style:** Simple, horizontal layout for desktop; collapsible menu for mobile
- **Usage:** Easy access to key pages (Home, Services, Schedule, Contact)

## Forms

- **Style:** Clear labels, ample spacing, accessible error states
- **Usage:** Scheduling, contact, and quote request forms

## Feedback & Alerts

- **Style:** Use green for success, red for errors, gold for important notices
- **Usage:** Confirmation messages, error alerts, informational banners

## Accessibility

- All components must be keyboard accessible
- Use ARIA labels where appropriate
- Ensure sufficient color contrast for all states

## Implementation Example (Tailwind CSS)

```js
// Button
<button class="bg-primary text-white rounded px-6 py-3 hover:bg-primary-dark focus:outline focus:ring">Schedule Inspection</button>

// Card
<div class="bg-white shadow-md p-6 rounded-lg">...</div>
```

## Summary

Components for Pure Home Inspection LLC are designed to be welcoming, trustworthy, and easy to use, supporting a seamless and reassuring user experience.
