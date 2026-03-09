# Restaurant Redesign Guide: Best Practices & Rules

This guide serves as a persistent set of rules for the Simmer Restaurant website redesign, based on conversion optimization and UX principles for high-converting landing pages.

## 1. Hero Section & Branding

- **Strong Visuals**: Use high-quality, authentic photos of Simmer’s signature dishes or its unique "Read & Dine" atmosphere. **NO STOCK PHOTOS.**
- **Compelling Headline**: A clear, benefit-driven headline that instantly tells visitors what Simmer offers (e.g., "Authentic West African & Continental Fusion in the Heart of [City]").
- **Immediate CTA**: Place a prominent "Book a Table" or "Order Online" button squarely in the hero section.

## 2. Menu Strategy (SEO-First)

- **Menu Highlights**: Use the `food-menu.json` and `drinks-menu.json` to render a visual menu.
- **Appetizing Visuals**: Every category should have at least one mouth-watering close-up of a dish.
- **Hierarchy**: Use clear category headers (Starters, Main, etc.) with brief, engaging descriptions.

## 3. Design & Performance

- **Modern Palette**: Maintain a luxurious color scheme (consistent with existing branding). Use contrasting colors for CTAs to make them pop.
- **Performance**: Compress all images to ensure the landing page loads in under 3 seconds.
- **Mobile-First**: Design for smartphones first. Ensure large tap targets (minimum 48x48px for buttons) and a clean single-column layout.

## 4. Conversion & Trust

- **Sticky CTA**: Keep "Book Now" or "Order Now" accessible via a sticky header or repeated in the top, middle, and bottom sections.
- **Social Proof**: Incorporate dynamic star ratings and authentic guest testimonials (preferably with photos).
- **Location & Hours**: Clear contact info and opening hours at both the top (navigation) and bottom (footer).

## 5. SEO Basics

- **Metadata**: Each page must have descriptive meta titles (e.g., "Best Fine Dining in [City] | Simmer Restaurant") and meta descriptions.
- **Semantic HTML**: Use proper H1-H6 hierarchy for all menu items and section titles.
- **Alt Text**: Add descriptive alt text to all food images for better ranking in image searches.

## Actionable Rules for Antigravity (Agent)

- Whenever creating a new UI component for the menu or landing page, ensure it adheres to the **Mobile-First** and **SEO-First** principles listed above.
- Default to **₦** (Naira sign) for all prices across the UI.
- Ensure all interactive elements have unique, descriptive IDs for future browser testing.
