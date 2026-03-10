# Product Dashboard Manager

## Introduction
The Product Dashboard Manager is a dynamic React application built with Vite and Material UI. It displays a collection of product cards, allowing users to visualize product details, filter by availability, and manage items in the dashboard. This project demonstrates core React concepts such as component structuring, state management, iteration, and conditional rendering.

## Features
- **Dynamic Dashboard**: Automatically renders product cards from a dataset.
- **Availability Filtering**: Easily identify products that are in stock or out of stock.
- **Product Management**: Ability to remove individual product cards from the dashboard.
- **Responsive Design**: Styled with a combination of Material UI and CSS Modules for a polished, modern UI.
- **Automated Testing**: Fully verified with pre-written Jest and React Testing Library tests.

## Tech Stack
- **React**: Frontend library for building the UI.
- **Vite**: Fast development build tool.
- **Material UI**: Comprehensive UI component library.
- **CSS Modules**: For scoped, component-specific styling.
- **Vitest & React Testing Library**: For automated unit and integration testing.

---

## Getting Started

### Prerequisites
Ensure you have **Node.js** and **npm** installed on your machine.

### Installation
1. **Clone the repository**:
   ```sh
   git clone <your-repository-url>
   cd product-dashboard-vite
   ```

2. **Install dependencies**:
   ```sh
   npm install
   ```

3. **Start the development server**:
   ```sh
   npm run dev
   ```
   *The application will typically be available at `http://localhost:5173/`.*

---

## Running Tests
To ensure the application is functioning correctly, you can run the automated test suite:

1. **Run all tests**:
   ```sh
   npm test
   ```

2. **Run tests in watch mode**:
   ```sh
   npm run test:watch
   ```

---

## Project Structure
- `src/App.jsx`: Main entry point managing the dashboard state.
- `src/components/ProductList.jsx`: Container component for mapping product data.
- `src/components/ProductCard.jsx`: Individual card component with product details.
- `src/styles/ProductCard.module.css`: Scoped styling for the card component.
- `src/__tests__/`: Contains automated test files to verify dashboard functionality.

---

## Contributing
If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are welcome.
