# Akashkumar Yadav - Portfolio Website

A professional single-page portfolio website built with Angular and Tailwind CSS.

## Features

- Modern, responsive design with smooth scrolling navigation
- Hero section with call-to-action buttons
- Skills showcase organized by categories
- Professional experience timeline
- Project portfolio with tech stack details
- Certifications section
- Contact form with social links

## Technology Stack

- **Angular 17** - Frontend framework with standalone components
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type-safe JavaScript

## Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm start
```

3. Open your browser and navigate to `http://localhost:4200`

## Build

To build for production:
```bash
npm run build
```

The build artifacts will be stored in the `dist/portfolio` directory.

## Color Palette

- **Background/Primary**: Deep Charcoal (#2C3E50)
- **Accent/Call-to-Action**: Electric Blue (#3498DB)
- **Text/Surfaces**: Light Gray/White (#ECF0F1 / #FFFFFF)

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── header/
│   │   ├── hero/
│   │   ├── skills/
│   │   ├── experience/
│   │   ├── projects/
│   │   ├── certifications/
│   │   └── contact/
│   ├── app.component.ts
│   └── app.routes.ts
├── index.html
├── main.ts
└── styles.css
```

