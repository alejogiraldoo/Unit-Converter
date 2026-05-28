# Unit Converter Web App

A robust, server-rendered web application that allows users to seamlessly convert values between different units of measurement, including Length, Weight, and Temperature.

This project is a solution to the [Unit Converter](https://roadmap.sh/projects/unit-converter) challenge from **Roadmap.sh**.

## Features

- **Server-Side Processing**: The application handles form submissions and calculates conversions on the backend, returning the processed data to the view (`target="_self"`).
- **Vite-Powered Bundling**: Extremely fast development environment and optimized production builds.
- **Multiple Unit Categories**:
  - **Length**: millimeter, centimeter, meter, kilometer, inch, foot, yard, mile.
  - **Weight**: milligram, gram, kilogram, ounce, pound.
  - **Temperature**: Celsius, Fahrenheit, Kelvin.
- **No Database Required**: Lightweight execution focusing on pure conversion logic.
- **Strict Code Quality**: Enforced via ESLint, Prettier, and Husky pre-commit hooks.

## Tech Stack & Tooling

- **Language**: TypeScript (running as ES Modules).
- **Runtime**: Node.js.
- **Development Tooling**: .
- **Code Quality**: ESLint, Prettier.
- **Git Hooks**: Husky.

## Installation & Setup

Follow these steps to run the project locally:

1. **Clone the repository:**
```bash
git clone [https://github.com/YOUR_USERNAME/unit-converter.git](https://github.com/YOUR_USERNAME/unit-converter.git)
cd unit-converter
```

2. **Install dependencies:**
```bash
npm install
```

**Note:** This will also automatically trigger the prepare script to set up Husky git hooks.

3. **Run in Development Mode:**
```bash
npm run dev
```
This starts the Vite development server for real-time updates.

4. **Build for Production:**
```bash
npm run build
```
Runs the TypeScript compiler and Vite build to generate optimized assets.

5. **Linting & Formatting:**
```bash
npm run preview
```
Starts a local server to preview the production-ready application.

6. **Linting & Formatting:**
```bash
npm run lint
```
Automatically fixes linting errors and formats the code according to ESLint and Prettier rules.

## Architectural Patterns
To maintain clean code and separate the conversion logic cleanly, this project relies on specific design patterns:

- **Strategy Pattern:** Used to define a family of conversion algorithms (e.g., converting Celsius to Fahrenheit vs. Meters to Yards), encapsulating each one, and making them interchangeable based on user input.

- **Template Method:** Defines the skeleton of the conversion process in a base class, letting subclasses override specific steps of the calculation without changing the overall algorithm structure.

## Study References & Resources:

### Design Patterns
- [Strategy Pattern - Refactoring Guru](https://refactoring.guru/design-patterns/strategy)
- [Template Method - Refactoring Guru](https://refactoring.guru/design-patterns/template-method)

### HTML & Javascript
- [HTML <form> target Attribute](https://www.geeksforgeeks.org/html/html-form-target-attribute/)
- [Client-Side Form Handling with JavaScript – Explained with Example Code](https://www.freecodecamp.org/news/form-validation-in-javascript/#let-s-see-an-example-registration-form)
- [How to work with Form Elements in TypeScript ?](https://www.geeksforgeeks.org/typescript/how-to-work-with-form-elements-in-typescript/)
- [How can I trigger an onchange event manually in javascript?](https://www.tutorialspoint.com/article/how-can-i-trigger-an-onchange-event-manually-in-javascript)
- [Curso JavaScript: 151. SPA: Enrutamiento (Router)](https://youtu.be/nC9WK4jFXls?si=PnFI5REcmzAVytAI)


### Linter & Formatting Setup
- [ESLint Getting Started](https://eslint.org/docs/latest/use/getting-started)
- [TypeScript ESLint Docs](https://typescript-eslint.io/getting-started/)
- [typescript-eslint-parser](https://typescript-eslint.io/packages/parser/)
- [Prettier Integration with Linters](https://prettier.io/docs/integrating-with-linters)
- [eslint-plugin-prettier GitHub](https://github.com/prettier/eslint-plugin-prettier)
- [Typescript Project from Scratch | Complete Tutorial for Beginners](https://youtu.be/61v23Ce5SXA?si=OiZNe39HMikOdc52)
- [Husky, ESLint & Prettier Setup](https://youtu.be/sKT4YvXc1SY?si=qryPVV8IeG6Lqy6T)
- [How to Set Up ESLint in 2026! (Beginner's Guide)](https://youtu.be/eieTlMwCwWU?si=FFu0ilJ8NpykAkY-)