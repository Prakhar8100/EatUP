# EatUP - Food Delivery Frontend

A modern, responsive food delivery web application built with React and Vite. This frontend provides a seamless user experience for browsing food items, filtering options, and managing orders.

## Project Overview

EatUP (MunchMate) is a food delivery platform frontend that allows users to:
- Browse available food items across multiple categories
- Filter foods by type (Burgers, Pizza, Salads, Chicken) and price range
- View promotional offers and headline cards
- Access a responsive navigation with mobile-friendly menu
- Search for food items
- Manage a shopping cart

## Tech Stack

- **React** 19.2.0 - UI Library
- **Vite** 7.2.4 - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework for styling
- **React Router DOM** 7.13.1 - Client-side routing
- **React Icons** 5.5.0 - Icon library
- **ESLint** - Code quality and linting
- **Node.js/npm** - Package management

## Project Structure

`powershell
EatUP/Frontend/
+-- src/
¦   +-- main.jsx              # Application entry point
¦   +-- App.jsx               # Root component
¦   +-- App.css               # Global styles
¦   +-- index.css             # Global CSS setup
¦   +-- components/
¦   ¦   +-- Navbar.jsx        # Navigation bar with menu & search
¦   ¦   +-- Hero.jsx          # Hero banner section
¦   ¦   +-- HeadlineCards.jsx # Promotional cards
¦   ¦   +-- Food.jsx          # Food items grid with filters
¦   +-- data/
¦   ¦   +-- data.js           # Food items and categories data
¦   +-- assets/               # Static assets
+-- public/                   # Public assets
+-- index.html                # HTML entry point
+-- package.json              # Dependencies and scripts
+-- vite.config.js            # Vite configuration
+-- eslint.config.js          # ESLint configuration
+-- README.md                 # This file
`

## Features

### Components

- **Navbar** - Responsive navigation bar with:
  - Mobile-friendly hamburger menu
  - Search bar
  - Cart button
  - Delivery/Pickup toggle
  - Sidebar menu with options (Orders, Favorites, Wallet, etc.)

- **Hero** - Eye-catching banner section with:
  - Featured image
  - Overlay text
  - Call-to-action messaging

- **HeadlineCards** - Promotional cards showcasing:
  - Special offers (BOGO deals)
  - New restaurants
  - Dessert delivery options

- **Food** - Main food display with:
  - Grid layout (responsive 2-4 columns)
  - Category filters (All, Burgers, Pizza, Salads, Chicken)
  - Price range filters ($, $$, $-Raw, $-Raw$)
  - Food cards with images, names, and prices
  - Hover animations

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
`powershell
git clone <repository-url>
cd EatUP/Frontend
`

2. Install dependencies:
`powershell
npm install
`

### Development

Start the development server with hot module replacement (HMR):

`powershell
npm run dev
`

The application will be available at http://localhost:5173

### Building

Build the project for production:

`powershell
npm run build
`

### Preview

Preview the production build locally:

`powershell
npm run preview
`

### Linting

Check and lint the code:

`powershell
npm run lint
`

## Styling

This project uses **Tailwind CSS** for styling. All components are styled using Tailwind's utility classes for:
- Responsive design (mobile-first approach)
- Color schemes (orange as primary color)
- Spacing and layout
- Hover and interactive states

## Data Structure

The application uses a static data file (src/data/data.js) containing:

### Food Items
Each food item includes:
- id - Unique identifier
- name - Food item name
- category - Category (burger, pizza, salad, chicken)
- image - Image URL
- price - Price range ($, -Raw, -Raw$, -Raw-Raw)

### Categories
Available food categories for filtering:
- Burgers
- Pizza
- Salads
- Chicken

## Responsive Design

The application is fully responsive with breakpoints for:
- **Mobile** - Small screens (default)
- **Tablet** - Medium screens (md)
- **Desktop** - Large screens (lg)

## Future Enhancements

Potential features to implement:
- [ ] Product detail pages
- [ ] Shopping cart functionality
- [ ] User authentication and profiles
- [ ] Order history
- [ ] Payment integration
- [ ] Reviews and ratings
- [ ] Real-time order tracking
- [ ] Favorites management
- [ ] Backend API integration

## License

This project is private and maintained for internal use.
