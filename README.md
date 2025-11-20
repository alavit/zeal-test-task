# Summer Spins Automation Tests

This project contains automated End-to-End (E2E) tests for the Summer Spins game help page on [games.lotto24.de](https://games.lotto24.de), built with [Playwright](https://playwright.dev/) and TypeScript.

## Prerequisites

-   [Node.js](https://nodejs.org/) (v14 or higher)
-   npm (usually comes with Node.js)

## Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd zeal-test-task
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Install Playwright browsers:
    ```bash
    npx playwright install
    ```

## Running Tests

### Run all tests
Executes all tests in headless mode (default).
```bash
npx playwright test
```

### Run tests in UI mode
Opens the interactive Playwright UI to run and debug tests.
```bash
npx playwright test --ui
```

### Run tests in headed mode
Runs tests with the browser visible.
```bash
npx playwright test --headed
```

### View HTML Report
After running tests, you can view the detailed HTML report.
```bash
npx playwright show-report
```

## Project Structure

-   **`pages/`**: Contains Page Object Models (POM) representing the web pages.
    -   `SummerSpinsPage.ts`: Interactions with the main game page and iframe.
    -   `HelpPage.ts`: Interactions and assertions for the Help page.
-   **`tests/`**: Contains the test specifications.
    -   `help-page.spec.ts`: Tests for the Summer Spins help functionality.
    -   `global.setup.ts`: Global setup script (e.g., accepting cookies).
-   **`playwright.config.ts`**: Main configuration file for Playwright.

## Features

-   **Page Object Model**: Uses the POM design pattern for better maintainability and code reuse.
-   **Global Setup**: Automatically handles cookie consent via `global.setup.ts` before running tests.
-   **Iframe Handling**: Demonstrates how to interact with elements inside iframes (e.g., in-game help).
