# kanban-task-management

Kanban Task Management Web Application is an interactive, user-friendly tool designed to help manage tasks efficiently. Developed with Vue.js and styled using Tailwind CSS, it features a modern, responsive design that adapts to different device sizes. The application allows users to create, read, update, and delete boards and tasks, offering an intuitive task management experience. This is also a solution to the [Kanban task management web app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/kanban-task-management-web-app-wgQLt-HlbB)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
  - [Compile and Hot-Reload for Development](#Compile-and-Hot-Reload-for-Development)
  - [Run Unit Tests](#Run-Unit-Tests)
  - [Run End-to-End Tests with](#Run-End-to-End-Tests-with)
  - [Lint](#Lint)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Create, read, update, and delete boards and tasks
- Receive form validations when trying to create/edit boards and tasks
- Mark subtasks as complete and move tasks between columns
- Hide/show the board sidebar
- Toggle the theme between light/dark modes
- Allow users to drag and drop tasks to change their status and re-order them in a column
- Keep track of any changes, even after refreshing the browser (`localStorage` was used for this)
- Build this project as a full-stack application

### Technologies Used

- **Frontend:** Vue.js
- **Styling:** Tailwind CSS
- **Testing:** Vitest, Playwright
- **Other Tools:** Vite, PostCSS

## Setup and Installation

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests

Running unit test with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with

Running End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
npm run build

# Runs the end-to-end tests
npm run test:e2e
# Runs the tests only on Chromium
npm run test:e2e -- --project=chromium
# Runs the tests of a specific file
npm run test:e2e -- tests/example.spec.ts
# Runs the tests in debug mode
npm run test:e2e -- --debug
```

### Lint

Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
