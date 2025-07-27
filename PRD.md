Product Requirements Document: Duke St. Studio Website
0. AI Directives & Interpretation Guidelines
Primary Visual Reference: The dss.jpg image is the primary visual reference for layout, color palette, typography, and general aesthetic. The AI should strive to replicate its visual design as closely as possible. The AI must continuously compare its generated output against dss.jpg during development to ensure visual fidelity and aesthetic alignment.

Component Integration: For ReactBits components, the AI should integrate them to achieve the visual and interactive effects implied by dss.jpg and the component's demo. Prioritize seamless integration over exact replication if a component's demo differs slightly from dss.jpg.

Responsive Design: This is a critical requirement. The AI must ensure all sections and components are fully responsive across mobile, tablet, and desktop breakpoints using Tailwind CSS's responsive utilities. Focus on fluid layouts, appropriate spacing, and legible typography at all sizes. The AI must perform internal checks for responsiveness at various breakpoints as each section is developed, ensuring no horizontal scrolling occurs.

Prioritization: Implement features section by section, starting from the top of the homepage and working downwards. Prioritize core functionality (layout, content, responsive design) before detailed micro-animations. Animations should be layered in after the core layout and content of a section are visually accurate and responsive.

Security: Always prioritize secure coding practices, especially for form handling and API key management. The AI must ensure that sensitive information (e.g., API keys) is never exposed on the client-side.

Simplicity & Efficiency: Adhere to the low-cost and efficient nature of the project. Avoid overly complex solutions when simpler alternatives exist. The AI should prioritize lean implementations and avoid over-engineering for this low-cost project, focusing on essential functionality and clean code.

Iterative Feedback Loop: The AI should anticipate and be ready to incorporate feedback for refinement after each major section or feature is implemented.

Placeholder Visuals: For visual placeholders (e.g., in 'Introduction/Value Proposition' and 'Why Choose Us' sections), the AI should use simple, visually appropriate placeholder images (e.g., from https://placehold.co/) or colored div elements to maintain layout integrity and visual flow.

1. Project Overview
This document outlines the requirements for building a modern, performant, and responsive portfolio website for "Duke St. Studio." The website will serve as an online presence to showcase services (audio, web, UX/UI), empower small businesses, NDIS providers, and creative entrepreneurs, and capture leads through a contact form. The development will leverage a Pro Cursor AI coding account, GitHub for version control, Vercel for free hosting, and a custom domain.

2. Goals
Establish a professional and visually appealing online presence for Duke St. Studio.

Clearly communicate the studio's services and value proposition.

Showcase expertise through a clean and engaging user experience.

Facilitate lead generation through an accessible contact form.

Ensure the website is fast, efficient, and accessible on all devices.

3. Target Audience
Small businesses

NDIS providers

Creative entrepreneurs

Individuals seeking audio, web development, UX, or UI design services.

4. Key Features & Content
The website will primarily consist of a single, scrollable homepage with distinct sections, as depicted in the provided dss.jpg example.

4.1. Homepage Sections & Components
The homepage will be structured into the following sections, integrating the specified ReactBits components:

Hero Section (Top):

Height: The Hero Section should occupy approximately 95vh (95% of the viewport height) to ensure a prominent initial view.

Content:

"Duke St. Studio" logo/text (as seen with the specific font/styling in dss.jpg).

Tagline: "audio. web. ux/ui"

Call to Action Button: "Get in touch"

Down Arrow Icon

Functionality: The "Get in touch" button and the down arrow at the bottom of the hero section should both smoothly scroll the user down to the Contact Form Section. The Contact Form Section must have a unique HTML id (e.g., contact-form-section) that these elements scroll to.

Background: Integrate the Aurora Background component (https://reactbits.dev/backgrounds/aurora) for a dynamic and engaging visual.

Aurora Color Stops: ["#3971F9", "#D974FB", "#F84F07"] (Blue, Pink, Red from the palette).

The color scheme of the Aurora background should subtly complement the purple-to-orange gradient seen in the dss.jpg header.

Layout: The logo/text should be centrally aligned horizontally within the top section, with the tagline directly below it, mirroring the spacing and alignment in dss.jpg.

Introduction/Value Proposition Section:

Layout: This section should feature a two-column layout on desktop (text on left, visual placeholder on right) transitioning to a single-column stack on mobile, as depicted in dss.jpg.

Content:

Heading: "We empower small businesses, NDIS providers & creative entrepreneurs to grow their brand presence and tell their story authentically."

Visual Element: A rectangular, rounded-corner placeholder box on the right side, mirroring the light background and internal layout of the example in dss.jpg.

Component: Consider using elements from Fluid Glass (https://reactbits.dev/components/fluid-glass) for the visual placeholder box or any subtle overlays, aiming for a translucent, modern effect if it aligns with the dss.jpg aesthetic.

"Why Choose Us" Section:

Content:

Heading: "Why choose us"

Body Text: "We believe in a collaborative approach, ensuring your vision is at the heart of every project. Our expertise spans across diverse digital landscapes, delivering tailored solutions that resonate with your audience and drive measurable results. We are committed to transparency, quality, and a seamless client experience."

Visual: Placeholder for a visual element (as seen in dss.jpg).

"Who We Help" Section:

Content:

Heading: "Who we help"

List Item 1: "Multi-media Companies" with descriptive text: "Local and international clients looking to establish their online presence, enhance their brand, or streamline their digital workflows. We provide comprehensive solutions from concept to delivery."

List Item 2: "NDIS Providers" with descriptive text: "Supporting NDIS providers with accessible and user-friendly digital platforms that enhance service delivery and client engagement, ensuring compliance and ease of use."

List Item 3: "Creative Entrepreneurs" with descriptive text: "Empowering artists, musicians, designers, and other creatives to build unique online portfolios, e-commerce stores, and digital experiences that truly reflect their artistic vision."

Component: Utilize the Card Swap component (https://reactbits.dev/components/card-swap) for presenting these client types, allowing for interactive display of information.

Closing Statement/Summary Section:

Content: "Whether it's creating podcasts that connect or building websites that convert, we specialise in crafting simple, yet beautiful digital experiences. From custom branding to seamless UX/UI design, we help businesses grow with a focus on the future."

Contact Form Section:

Content: A contact form for inquiries.

User Flow:

User fills in Name, Email, and Message fields.

User clicks "Submit" button.

During Submission: The submit button should display a loading indicator (e.g., "Sending..." text or a spinner) and be disabled to prevent multiple submissions.

On Success: A clear, non-intrusive success message (e.g., a small toast notification or a message below the form) should appear: "Message sent successfully! We'll get back to you soon." The form fields should clear.

On Error: A clear, non-intrusive error message should appear: "There was an error sending your message. Please try again later." The form fields should retain their values to allow the user to easily retry.

Fields: Name (text input), Email (email input with basic validation), Message (textarea). All fields are required.

Functionality: Upon submission, the form data must be securely sent via email to a designated recipient.

Footer:

Content:

"Speak to us"

"Legal"

"Feedback"

Copyright information (e.g., "© 2025 Duke St. Studio. All rights reserved.")

4.2. Text Animations
Variable Proximity (https://reactbits.dev/text-animations/variable-proximity): Apply this animation to primary headings and key introductory text blocks. The animation should trigger as the element enters the viewport, providing a subtle, engaging reveal.

General Micro-animations: Implement subtle, modern micro-animations for:

Load-in for Sections: As each major section scrolls into view, its content (text, images, cards) should subtly fade in or slide up from the bottom with a slight delay, creating a staggered effect.

Button Hover/Press States: Implement a subtle scale-up effect (e.g., scale-105), a slight background color change, or a soft shadow on hover, and a slight scale-down/press effect on click. Ensure smooth transitions.

5. Design & User Experience (UX)
Aesthetics: The website should embody a sleek, modern, and professional aesthetic, consistent with the provided dss.jpg example.

**CRITICAL RESPONSIVENESS NOTE: While Figma serves as a design reference, the final implementation's layout and spacing must prioritize full responsiveness and fluid adaptation across all devices. Fixed pixel measurements from Figma should be translated into responsive Tailwind units or relative values where appropriate. The website MUST NOT follow Figma directly on layout and spacing if it compromises responsiveness.**

5.1. Visual Style Guide
The AI should extract and apply the following visual styles, primarily using Tailwind CSS classes, to match the dss.jpg reference:

Color Palette:

Dark: #000510 (Primary background for dark sections)

White: #FFFFFF (General text on dark backgrounds, elements on dark sections)

Beige: #F9F7F1 (Primary background for light sections, card backgrounds)

Yellow: #F8C807 (Highlight/Accent text, buttons, emphasis)

Blue: #3971F9 (Accent color, potentially for links or specific UI elements)

Red: #F84F07 (Accent color, potentially for alerts or specific UI elements)

Pink: #D974FB (Accent color, potentially for specific UI elements or gradients)

Gradient: The header/hero background should transition from a deep purple (similar to the Pink #D974FB or a slightly darker purple) to a vibrant orange (similar to Red #F84F07 or a slightly softer orange), as seen in dss.jpg.

Typography:

Main Headings & Body Font: Archivo

Weights: Semi-bold, Medium, Regular.

Hero Text Heading Font ("Duke St. Studio"): Instrument Serif

Weights/Styles: Regular, Italic.

Font Sizes & Weights: The AI should derive appropriate text- and font- Tailwind classes to match the visual hierarchy and emphasis seen in dss.jpg (e.g., large, bold headings; smaller, lighter taglines; readable body text).

Font Loading: Utilize Next.js's next/font for efficient loading of these custom fonts. The AI should ensure these fonts are configured in tailwind.config.ts to be easily applied via Tailwind's font-sans (for Archivo) and a custom font utility (for Instrument Serif).

**Optimized Typography Implementation:**

Hero Title: text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-instrument-serif font-normal tracking-tight leading-[0.9] sm:leading-[0.85] lg:leading-[0.8] text-white

Tagline: text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-archivo font-medium tracking-wide text-white/90 leading-tight

Body Text: text-base sm:text-lg lg:text-xl xl:text-2xl font-archivo font-normal leading-relaxed

Navigation: text-lg sm:text-xl lg:text-2xl xl:text-3xl font-instrument-serif font-normal tracking-tight (logo), text-nav lg:text-nav-lg font-archivo font-medium (links)

**Navigation Component Specifications:**

Text Wrapper (Left Side): flex flex-col items-start
- "Sydney Based": text-xl font-archivo font-medium leading-[30px] text-[#F7F6F3]
- "Working nation-wide": text-xl font-archivo font-medium leading-[30px] text-white mix-blend-overlay

Button (Right Side): flex px-4 py-3 justify-center items-center gap-2.5 rounded-2xl bg-white text-dark text-xl font-archivo font-medium leading-[28px]

Navigation Height: h-16 sm:h-18 lg:h-22 (responsive height scaling)

Background: bg-dark/30 backdrop-blur-lg border-b border-white/5

Hover Effects: hover:bg-white/90 (button), hover:scale-1.02 (text wrapper)

Focus States: focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-dark (button)

**Note:** The navigation now features a simplified layout with location text on the left and a white "Get in touch" button on the right, removing the previous navigation links and logo.

Spacing:

General: Use Tailwind's default spacing scale (p-, m-, gap-) consistently.

Vertical Spacing: Aim for generous vertical spacing between major sections and content blocks to provide visual breathing room, as observed in dss.jpg.

Horizontal Spacing: Maintain consistent horizontal padding within content containers.

Container Width: Content should be constrained to a maximum readable width, similar to the centered content blocks in dss.jpg, with appropriate horizontal padding on smaller screens.

**Optimized Responsive Spacing:**

Hero Section: px-4 sm:px-6 lg:px-8 xl:px-12, max-w-4xl lg:max-w-5xl xl:max-w-6xl

Navigation: px-4 sm:px-6 lg:px-8, max-w-7xl

Section Spacing: space-y-6 sm:space-y-8 lg:space-y-10

Button Padding: px-8 sm:px-10 lg:px-12 py-3 sm:py-4 lg:py-5

**Custom Tailwind Utilities:**

Spacing: h-18 (4.5rem/72px), h-22 (5.5rem/88px)

Font Sizes: text-nav (14px), text-nav-lg (16px)

Navigation Heights: h-16 sm:h-18 lg:h-22 (responsive scaling)

Border Radius: All prominent containers, cards, and buttons should have a noticeable, soft border-radius (e.g., rounded-xl or rounded-2xl) consistent with the rounded aesthetic in dss.jpg.

Shadows: Apply subtle, soft shadows to cards and interactive elements to give them depth, mimicking the effect seen in dss.jpg.

**Optimized Shadow Implementation:**

Buttons: shadow-xl hover:shadow-2xl hover:shadow-yellow/20

Cards: shadow-lg hover:shadow-xl

Navigation: shadow-lg hover:shadow-xl

Gradients: The AI should recreate the specific purple-to-orange gradient for the header/hero section background, using Tailwind's gradient utilities (e.g., bg-gradient-to-r from-purple-700 to-orange-500, adjusting specific color values to match dss.jpg based on the provided palette).

**Aurora Component Optimization:**

Color Stops: ["#3971F9", "#D974FB", "#F84F07"]

Blend: 0.25 (reduced for more subtlety)

Amplitude: 0.3 (reduced for gentler waves)

Speed: 0.12 (slightly slower for more elegant movement)

Fractal Noise Iterations: 4 (increased for more detail)

Amplitude Decay: 0.5 (reduced for smoother transitions)

Frequency Scaling: 2.0 (increased for better detail)

Fully Responsive Design (CRITICAL):

The website must be fully optimized for responsive design, ensuring an optimal viewing and interaction experience across all device sizes and orientations (mobile, tablet, desktop).

Layouts, spacing, typography, and interactive elements must adapt gracefully to different screen widths.

No horizontal scrolling should occur on any device.

The AI must extensively use responsive utility classes (e.g., Tailwind's sm:, md:, lg:, xl:) for layout, padding, margin, and typography.

**Responsive Breakpoint Strategy:**

Mobile: < 640px (sm:)

Tablet: 640px - 1024px (sm: to lg:)

Desktop: 1024px - 1280px (lg: to xl:)

Large Desktop: > 1280px (xl:)

Intuitive Navigation: While a single-page site, ensure smooth scrolling and clear visual hierarchy.

Accessibility (Basic): Implement fundamental accessibility best practices, including:

Semantic HTML elements.

Clear focus states for interactive elements (buttons, form fields).

Sufficient color contrast for text and UI elements.

**Enhanced Accessibility Implementation:**

Focus Rings: focus:outline-none focus:ring-2 focus:ring-yellow/50 focus:ring-offset-2 focus:ring-offset-dark

Aria Labels: aria-label="Scroll to next section", aria-label="Toggle mobile menu", aria-expanded={isMobileMenuOpen}

Button States: Proper hover, focus, and active states with visual feedback

Loading & Feedback:

Provide clear visual feedback for form submissions (e.g., "Sending...", "Message successfully sent!", "Error sending message. Please try again.").

Error Handling (Client-side): Display user-friendly error messages for validation failures (e.g., "Please enter a valid email address").

Avoid browser alert() or confirm() dialogs; use custom UI for messages.

6. Technical Requirements
6.1. Core Tech Stack
Framework: Next.js (React) - Utilize the App Router where appropriate.

Styling: Tailwind CSS - All styling should be implemented using Tailwind utility classes.

Animations:

Framer Motion: Primary library for component-based animations, micro-interactions, and load-in effects.

Third-Party Library Usage: When integrating ReactBits components, refer to their documentation for specific setup instructions. Install necessary NPM packages as required.

GSAP (GreenSock Animation Platform): Use as a secondary option only if highly complex or custom timeline-based animations are required that are difficult to achieve with Framer Motion.

Language: TypeScript - All code should be written in TypeScript for improved type safety and AI assistance.

6.1.4. Icons
Library: Phosphor Icons (https://github.com/phosphor-icons/homepage).

Style Preference: The project should primarily use bold or fill outlined icons from the Phosphor Icons library. The AI should choose the most visually appropriate style (bold or fill outlined) for each icon based on the dss.jpg aesthetic and the icon's context.

Usage: Icons should be used for elements like the down arrow in the Hero Section, potentially in the footer links, or any other small UI elements where an icon would enhance clarity or aesthetics.

Installation/Integration Note: The AI should handle the installation and integration of Phosphor Icons (e.g., via npm install phosphor-react or similar, and importing components).

6.2. Progressive Web App (PWA) Features
The website should be configured as a PWA to enhance performance and user experience:

Manifest File: Generate a manifest.json with appropriate app name, icons, and display properties.

Service Worker: Implement a service worker (e.g., using next-pwa library or manual configuration) for:

Caching of static assets (HTML, CSS, JS, images) for offline access and faster subsequent loads.

Basic offline page.

HTTPS: The site will be served over HTTPS (handled by Vercel).

Home Screen Installability: Enable the "Add to Home Screen" prompt.

6.3. Form Submission & Email Sending
Server-Side Endpoint: Create a Next.js API Route (or Route Handler in app/api) to securely handle form submissions. This endpoint will receive form data (Name, Email, Message).

Email Sending Service: Integrate with a third-party Email API service (e.g., Resend, SendGrid's free tier, Mailgun's free tier).

The API route will use the chosen service's SDK to send an email to a predefined recipient (e.g., info@dukestudio.com).

Security: Ensure API keys for the email service, and the recipient email address, are stored securely as environment variables (e.g., in .env.local for development and configured in Vercel for production). They must never be hardcoded or exposed on the client-side. The AI should prompt for these if not provided.

Form Validation:

Client-side HTML5 validation (required, type="email").

Server-side Validation: Implement robust server-side validation within the API route to sanitize and validate input before sending the email. Return appropriate HTTP status codes (e.g., 400 Bad Request for invalid input, 500 Internal Server Error for server issues).

6.4. Development & Deployment
Version Control: GitHub repository.

Hosting: Vercel for deployment.

Image Optimization: Utilize Next.js's next/image component for all images to ensure optimal loading and responsiveness.

Font Optimization: Use Next.js's next/font for efficient loading of web fonts.

Code Quality: Configure ESLint and Prettier for consistent code style and quality.

Favicon & App Icons: Include appropriate favicon and various app icons for PWA and general browser display.

Custom 404 Page: Create a custom "Page Not Found" (404.tsx or not-found.tsx) page.

Sitemap & Robots.txt: Generate sitemap.xml and robots.txt files for basic search engine guidance.

6.5. Project Structure & Naming Conventions
The AI should adhere to the following project structure and naming conventions for consistency and maintainability:

Root Level:

src/: Main application source code (preferred over root-level components).

public/: Static assets (images, favicons, manifest.json).

.env.local: Environment variables (for local development).

PRD.md: This Product Requirements Document.

Inside src/:

app/: Next.js App Router specific files.

app/layout.tsx: Root layout component.

app/page.tsx: Homepage component.

app/api/: Directory for API Routes (Route Handlers).

app/api/contact/route.ts: For the contact form API endpoint.

components/: Reusable UI components.

hooks/: Custom React hooks.

utils/: General utility functions (e.g., helper functions, data formatting).

styles/: Global styles (e.g., globals.css for Tailwind imports, or any custom CSS beyond Tailwind config).

Naming Conventions:

Folders: kebab-case (e.g., contact-form, hero-section).

Files:

React Components: PascalCase (e.g., HeroSection.tsx, ContactForm.tsx).

Custom Hooks: camelCase with use prefix (e.g., useFormInput.ts).

Utility Files: camelCase (e.g., formatDate.ts, emailUtils.ts).

API Routes: route.ts within a descriptive folder (e.g., app/api/contact/route.ts).

Variables/Functions: camelCase.

Constants: SCREAMING_SNAKE_CASE.

6.6. Development Practices
State Management: Prioritize React's useState for simple component state. For more complex local state within components (e.g., form handling), consider useReducer.

Code Commenting: The AI should add clear and concise comments to explain complex logic, component props, API route functionality, and any non-obvious design decisions.

Environment Variable Usage: Explicitly use process.env.NEXT_PUBLIC_VAR_NAME for environment variables accessible on the client-side (e.g., for public API keys if any, though none are planned directly for this project's client-side) and process.env.VAR_NAME for server-only variables (like the email service API key in API routes).

Contact Form Development Order: For the "Contact Form Section," the AI should prioritize developing the server-side API route before implementing the client-side form component.

Git Branching Strategy (Optimal Workflow):
The AI should adhere to the following branching strategy for a streamlined development and deployment workflow:

main Branch:

Purpose: This branch represents the stable, production-ready version of the website. Code on main should always be deployable.

Commits: No direct commits are allowed to main. All changes must come via merges from the dev branch (or release branches if implemented later).

Deployment: Vercel should be configured to deploy from the main branch.

dev Branch:

Purpose: This is the primary branch for active development and integration of new features and bug fixes. All feature branches will merge into dev.

Commits: Direct commits to dev should be avoided. All changes should ideally come from merged feature branches.

Testing: This branch will serve as the environment for comprehensive testing before changes are promoted to main.

Feature Branches (Implicit):

Purpose: For each new feature or significant bug fix, a new branch should be created off dev (e.g., feat/contact-form, fix/hero-alignment).

Workflow: Work on features in these dedicated branches, commit frequently, and then open a Pull Request (PR) to merge back into dev upon completion and review.

Merge Strategy: When merging from dev to main, a rebase-and-merge or squash-and-merge strategy is preferred to maintain a clean main history, though a simple merge is acceptable for simplicity if that's easier for the AI.

7. Future Considerations (Out of Scope for Initial Build)
Adding more static project or policy pages.

Integration with external analytics services.

Newsletter signup functionality.