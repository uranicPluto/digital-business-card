# Digital Business Card

LOVABLE MASTER PROMPT — BUSINESS CARD CUSTOMER PAGE



Objective



Build a pixel-focused, responsive customer-facing business profile and feedback webpage based on the attached reference image.



Important: Recreate the UI shown in the reference as closely as possible. Do not redesign it, add unnecessary sections, or turn this into a complete business website.



This is a single-page experience that customers access after tapping an NFC card or scanning a QR code at a business.



The page should look premium, minimalist, professional, trustworthy, and suitable for every type of business.



1. Technology and Scope



- React + TypeScript.

- Tailwind CSS.

- Lucide React icons.

- Responsive mobile-first layout.

- Clean, reusable components.

- Use mock data only.

- Frontend UI prototype only.



Strictly out of scope



Do NOT build:



- Marketing homepage or business website.

- Admin or client dashboard.

- Customization studio.

- Authentication or login.

- Backend or database.

- API integrations.

- Payment functionality.

- Real NFC or QR functionality.

- Analytics dashboard.

- Additional pages or navigation systems.



Build only the customer-facing profile page.



2. Visual Design — Match the Reference



Use the uploaded image as the primary design reference.



Design language



- Minimalist and professional.

- White and very light blue-gray backgrounds.

- Navy blue typography.

- Blue primary action buttons.

- Subtle borders and soft shadows.

- Rounded cards and buttons.

- Generous spacing.

- Clean and readable typography.

- Consistent alignment.

- No unnecessary gradients.

- No glassmorphism.

- No excessive animations.

- No decorative elements that distract from the content.



Suggested colors



- Main background: "#FFFFFF"

- Secondary background: "#F4F7FB"

- Primary navy: "#10213D"

- Primary blue: "#0B4B88"

- Button blue: "#07549A"

- Secondary text: "#5E6878"

- Border: "#E1E7EF"

- Card background: "#F5F8FC"



Use Inter or a similar clean sans-serif font.



3. Page Structure



Build the page in the following exact order.



Section 1 — Business Cover and Identity



At the top:



- Wide business cover/banner image.

- Business logo positioned in the center, overlapping the lower edge of the cover image.

- Business name.

- Small verified-style badge beside the business name (visual decoration only).

- Business category.

- Location.

- Short business description.



Use the following demo information:



Business name: Your Business

Category: Business

Location: Bengaluru, India

Description: Delivering quality service and a great customer experience.



Use a professional modern office image as the default cover and a simple business-building icon as the placeholder logo.



The business name and description should be visually prominent.



Section 2 — Google Review Button



Create a large, horizontally centered button.



Content:



- Google multicolor G logo.

- Text: "Review Us on Google"

- External-link icon.



Design:



- White background.

- Subtle border.

- Rounded pill shape.

- Soft shadow.

- Dark navy text.



This button must remain visually prominent and separate from the private feedback form.



Use a placeholder external URL for the prototype.



Section 3 — Thank You Card



Create a light blue-gray rounded card.



Heading:



"Thank You for Visiting!"



Supporting text:



"We appreciate your time and trust."



Use bold navy typography and centered alignment.



Section 4 — Private Customer Feedback



Create a separate white card with a subtle border.



Heading:



"How Was Your Experience?"



Include:



Star rating



- Five outlined star icons.

- Allow customers to select 1–5 stars.

- Highlight selected stars in gold.

- Show hover and selected states.



Feedback field



- Multiline textarea.

- Placeholder: "Share your feedback with us..."



Submit button



- Text: "Submit Feedback"

- Full-width dark blue button.

- Rounded corners.



Interaction:



- Allow customers to select stars and type feedback.

- Validate that a rating is selected before submission.

- Display a simple success message after submission.

- Use frontend-only mock submission.



Do not redirect customers based on their star rating. The Google review button must remain available to every customer, regardless of their feedback.



Section 5 — Stay Connected



Add a centered heading:



"Stay Connected"



Use subtle horizontal divider lines on both sides.



Display social media icons in individual rounded-square buttons:



- Instagram

- Facebook

- YouTube

- WhatsApp

- LinkedIn

- Website



Use recognizable brand icons and their appropriate brand colors.



Keep icon buttons evenly spaced and consistent in size.



Section 6 — Contact Actions



Display three horizontally aligned buttons:



1. Call — phone icon.

2. Email — mail icon.

3. Location — map-pin icon.



Each button should have:



- White or very light blue background.

- Thin border.

- Rounded corners.

- Navy text.

- Appropriate icon.



Use placeholder links with the appropriate action types:



- "tel:"

- "mailto:"

- Map URL placeholder.



Hide individual contact buttons if their corresponding information is unavailable.



Section 7 — Footer



At the bottom, create a subtle light-blue wave-style background.



Display:



"Powered by Business Card™"



Use small, clean typography and a simple brand icon.



4. Responsive Behavior



The reference image is a mobile-first design. Prioritize matching the mobile layout.



Mobile



- Single-column layout.

- Full-width content with comfortable side padding.

- Cover image at the top.

- Centered overlapping logo.

- All cards stacked vertically.

- Full-width Google review and feedback buttons.

- Social icons evenly distributed.

- Contact buttons fit without horizontal overflow.

- No horizontal scrolling.



Tablet



- Maintain the centered single-column experience.

- Increase the content width slightly.



Desktop



- Center the page inside a clean, narrow content container.

- Suggested maximum width: 560px.

- Maintain the same single-column structure.

- Do not stretch the interface across the entire desktop screen.



The experience should still look like a polished digital business profile, not a conventional desktop website.



5. Functional UI Requirements



Implement the following frontend interactions:



- Select and change star ratings.

- Enter customer feedback.

- Submit feedback and display a success state.

- Google review button opens the configured external link.

- Social icons open their configured URLs.

- Call, email and location buttons use their respective links.

- Buttons have hover, active and focus states.

- Add subtle transitions without excessive animation.



Use realistic mock business data so the page looks complete immediately.



6. Component Structure



Organize the UI into reusable React components:



- "BusinessCover"

- "BusinessIdentity"

- "GoogleReviewButton"

- "ThankYouCard"

- "FeedbackCard"

- "StarRating"

- "SocialLinks"

- "ContactActions"

- "BusinessFooter"



Keep components clean and maintainable.



7. Final Quality Requirements



Before considering the work complete:



1. Compare the rendered page against the attached reference image.

2. Match the overall proportions, spacing, typography, colors and component positions.

3. Ensure the business logo overlaps the cover image correctly.

4. Ensure the feedback card and Google review button are visually distinct.

5. Verify all interactions work with mock data.

6. Test mobile, tablet and desktop layouts.

7. Fix all overflow, alignment and responsiveness issues.



Final instruction: Build only this one customer-facing Business Card webpage. The attached image is the design source of truth. Prioritize visual accuracy over adding features. Do not invent additional sections or change the overall layout.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/3984bbb8-b23d-4896-9f18-94cee94fa21c).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
