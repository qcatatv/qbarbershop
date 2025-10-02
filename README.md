# qBarberShop

A modern, responsive website for a premium barbershop built with Next.js 15 and TailwindCSS.

![qBarberShop](/public/logo/logoBarber.png)

## Overview

qBarberShop is a sophisticated web application designed for a modern barbershop business. Featuring a sleek dark theme with vibrant red accents, the site showcases services, provides information about the business, and allows customers to learn more about the barbershop experience.

## Features

- **Modern Design**: Contemporary dark theme with bold red accents and angular elements
- **Responsive Layout**: Fully responsive design that works on all device sizes
- **Service Showcase**: Detailed presentation of services with pricing and descriptions
- **About Section**: Company history, values, and statistics
- **Contact Information**: Easy access to location, hours, and contact details
- **Newsletter Signup**: Customer engagement through email subscription
- **Image Optimization**: Next.js Image component for optimized loading

## Tech Stack

- **Framework**: Next.js 15.5.4
- **Language**: TypeScript
- **Styling**: TailwindCSS 4
- **Fonts**: Bebas Neue & Roboto
- **Image Optimization**: Next.js Image component
- **Icons**: Lucide React icons

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/qbarbershop.git
cd qbarbershop
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
qbarbershop/
├── public/              # Static assets
│   └── logo/            # Logo images
├── src/
│   ├── app/             # App router components
│   │   ├── globals.css  # Global styles
│   │   ├── layout.tsx   # Root layout component
│   │   └── page.tsx     # Home page component
│   └── components/      # Reusable components
│       ├── About.tsx    # About section component
│       ├── Footer.tsx   # Footer component
│       ├── Hero.tsx     # Hero section component
│       ├── NavBar.tsx   # Navigation component
│       └── Services.tsx # Services section component
├── next.config.ts       # Next.js configuration
└── tailwind.config.js   # Tailwind CSS configuration
```

## Design System

The website employs a consistent design system with:

- **Color Palette**:
  - Primary Dark: #2D3142
  - Accent Red: #F05D5E
  - Light Gray: #E7ECEF
  - Dark Background: #1A1E29

- **Typography**:
  - Headings: Bebas Neue (uppercase, tracked wider)
  - Body: Roboto (clean, modern)

- **Design Elements**:
  - Angular shapes with skewed transforms
  - Bold typography
  - Clean card designs with subtle hover effects
  - Minimalist layout

## Deployment

The site can be deployed on Vercel:

```bash
npm run build
# or
vercel deploy
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any questions or feedback, please reach out to [your-email@example.com](mailto:your-email@example.com)
