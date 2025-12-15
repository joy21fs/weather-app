# weather-app

# Frontend Mentor – Weather App Solution

This is a solution to a **Weather App** challenge built as a frontend-focused project. The app fetches real-time weather data and presents it with a clean, accessible, and responsive UI.

## Table of contents

- [Overview](#overview)

  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)

- [My process](#my-process)

  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)

---

## Overview

### The challenge

Users should be able to:

- Search for a location and view current weather information
- View daily and/or hourly forecasts
- See loading and error states when fetching data
- Switch between unit systems (e.g. metric / imperial)
- View an optimal layout depending on their device's screen size

### Screenshot

### Links

- Solution URL: [https://github.com/joy21fs/weather-app](https://github.com/joy21fs/weather-app)
- Live Site URL: [https://weather-app-joy21fs.vercel.app/](https://weather-app-joy21fs.vercel.app/)

---

### Built with

- Web-first workflow
- React
- Component-first architecture
- Storybook (isolated component development)
- Custom React hooks
- Open-Meteo Weather API

---

### What I learned

**Component-first workflow (Storybook)**

- Built and tested UI components in isolation using **Storybook** before integrating them into pages
- Used Storybook to define component states such as loading, error, and empty
- This approach helped catch visual and accessibility issues early without relying on API availability
- Encouraged reusable, predictable components with clear props contracts

**Architecture & State Management**

- Separating **UI components** from **data-fetching logic** makes components easier to test and reuse
- Moving API logic into custom hooks allows multiple components (page layout, search, error state) to share loading and error states
- Keeping presentational components as _pure_ as possible improves maintainability

---

### Useful resources

- [https://open-meteo.com/](https://open-meteo.com/) – Weather API
- [https://caniuse.com](https://caniuse.com) – Browser support reference
- [https://developer.mozilla.org](https://developer.mozilla.org) – HTML, CSS, and accessibility docs
- [https://react.dev](https://react.dev) – Official React documentation

---

### Notes

This project focuses on **clean component boundaries**, **accessibility**, and **real-world UI states** (loading, error, empty). It was built to resemble production-ready frontend patterns rather than a purely visual demo.
