# Duke St. Studio Website

A modern, responsive portfolio website for Duke St. Studio, showcasing professional audio, web development, and UX/UI design services.

## Features

- **Hero Section**: Dynamic Aurora background with Variable Proximity text animations
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- **Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS, Framer Motion
- **Performance Optimized**: Built with Next.js App Router for optimal performance

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd duke-street
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
# Edit .env.local with your actual values
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Email Service Configuration
EMAIL_SERVICE_API_KEY=your_email_service_api_key_here
EMAIL_RECIPIENT=your_recipient_email_here
```

## Project Structure

```
duke-street/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Homepage
│   ├── components/          # Reusable components
│   │   ├── AuroraBackground.tsx
│   │   └── HeroSection.tsx
│   └── styles/              # Global styles
├── public/                  # Static assets
├── PRD.md                   # Product Requirements Document
└── .env.local              # Environment variables
```

## Development

- **Build**: `npm run build`
- **Lint**: `npm run lint`
- **Type Check**: `npm run type-check`

## Deployment

The project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy automatically on push to main branch

## Contributing

1. Follow the existing code style and conventions
2. Ensure all TypeScript types are properly defined
3. Test responsiveness across different screen sizes
4. Update documentation as needed

## License

This project is proprietary to Duke St. Studio.
