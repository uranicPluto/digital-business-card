# Business Card marketing website

## Goal
Add a polished marketing website at `/marketing` while preserving the existing customer-facing profile at `/` unchanged.

## Experience
- Create a brand-led marketing home page using the brief’s recommended positioning: “More Than a Business Card. A Better Way to Connect.”
- Explain the current offer clearly: a personalized digital profile shared through NFC or QR, with business links and customer-engagement destinations.
- Present the core flow (tap or scan, open the profile, connect) and the audiences named in the brief: businesses, professionals, creators, and personal brands.
- Include clear navigation and calls to action that lead to the product explanation, without inventing contact details, pricing, customer results, or unconfirmed product features.
- Add supporting informational pages for “How it works” and “About” under `/marketing`, so each can be shared and indexed independently.
- Keep all content local and static; no accounts, lead delivery, persistence, or external service integration.

## Visual direction
Build a distinctive, confident digital-connectivity brand experience, using the existing design tokens and responsive patterns. Use relevant visual assets to show the physical-to-digital connection; avoid generic stock-like decoration and retain an uncluttered, conversion-focused layout.

## Technical details
- Preserve `/` and its existing customer feedback/profile interactions.
- Add `/marketing`, `/marketing/how-it-works`, and `/marketing/about` as separate TanStack routes, with working links created alongside those routes.
- Give each marketing route its own title, description, Open Graph title/description/type, and Twitter card metadata.
- Keep factual claims limited to what the uploaded brand brief confirms; do not advertise broader future offerings as currently available.
- Update or add focused tests for the new routes and navigation, then verify the marketing pages and existing root profile render at desktop and mobile widths.
