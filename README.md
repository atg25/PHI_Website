# PHI Website

This repository contains the PHI Website, a modern web application built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui. The site features a comprehensive design system and several main pages, including Home, Our Story, Services, and Contact. All design guidelines and implementation details are documented in the `docs/` directory.

## Tech Stack

- **[Next.js](https://nextjs.org/)** – React framework with App Router
- **TypeScript** – Type-safe development
- **Tailwind CSS** – Utility-first CSS framework
- **shadcn/ui** – Reusable UI components
- **ESLint** – Code quality and consistency

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (v18 or newer)
- npm or yarn

### Installation

1. Clone this repository:
   ```bash
   git clone <repository-url>
   cd PHI_Website
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── docs/                   # Design system documentation (brand, typography, color, spacing, components, implementation)
├── public/                 # Static assets (images, icons, etc.)
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout
│   │   ├── globals.css     # Global styles
│   │   ├── page.tsx        # Home page
│   │   ├── our-story/      # Our Story page
│   │   ├── services/       # Services page
│   │   └── contact/        # Contact page (with emailjs config)
│   ├── components/
│   │   ├── main-nav.tsx    # Main navigation
│   │   └── ui/             # Reusable UI components (button, card, dropdown-menu)
│   └── lib/                # Utility functions
├── tailwind.config.mjs     # Tailwind CSS configuration
└── ...other config files
```

## Customizing the Website

- **Content**: Edit the main pages in `src/app/` (`page.tsx`, `our-story/page.tsx`, `services/page.tsx`, `contact/page.tsx`) to update text and images.
- **Navigation**: Update `src/components/main-nav.tsx` for site navigation.
- **Design System**: Reference and follow the guidelines in the `docs/` directory for brand, typography, color, spacing, and components.
- **UI Components**: Use or extend the reusable components in `src/components/ui/`.
- **Styling**: Adjust styles in `globals.css` and `tailwind.config.mjs`.

## Design System Documentation

The `docs/` directory contains:

- Brand foundation (`01-brand-foundation.md`)
- Typography (`02-typography.md`)
- Color system (`03-color-system.md`)
- Spacing & layout (`04-spacing-layout.md`)
- Components (`05-components.md`)
- Implementation guidelines (`06-implementation.md`)

## Using the Design System and Documentation

Refer to the numbered docs for guidance on brand, typography, color, spacing, components, and implementation. Follow the recommended order for best results. Use these docs to ensure consistency and quality across all pages and components.

## Deployment

Deploy easily with [Vercel](https://vercel.com):

1. Create a Vercel account
2. Connect your GitHub
3. Import this repository
4. Deploy

Or use any hosting service that supports Next.js.

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

---

Happy coding! Use this project and design system to build a cohesive, professional website.
