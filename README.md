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
 - Web view:
   
 <img width="3106" height="2366" alt="weather-app-joy21fs vercel app_" src="https://github.com/user-attachments/assets/abcf4f82-58b3-40c0-a500-38ce14314c57" />
 
- Tablet view:
  
<img width="600" alt="weather-app-joy21fs vercel app_(iPad Mini)" src="https://github.com/user-attachments/assets/8fc9e01f-55c0-4175-ae81-73275c8a8cb3" />

- Mobile view:
  
<img width="360" alt="weather-app-joy21fs vercel app_(iPhone 12 Pro)" src="https://github.com/user-attachments/assets/6c6dc053-d678-4772-ae61-464b4d185c33" />


- Storybook components:
<img width="1510" height="821" alt="weatherOverview-loading-state" src="https://github.com/user-attachments/assets/41288625-c090-4cf6-a20c-ce7ad358cb98" />
<img width="1510" height="821" alt="error fallback" src="https://github.com/user-attachments/assets/a74aa1a7-84a1-4920-82ec-15cbfd953c7e" />
<img width="1510" height="821" alt="day dropdown" src="https://github.com/user-attachments/assets/1e570f4c-b3e2-445e-ab44-a68a6764d973" />



 




### Links

- Solution URL: [https://github.com/joy21fs/weather-app](https://github.com/joy21fs/weather-app)
- Live Site URL: [https://weather-app-joy21fs.vercel.app/](https://weather-app-joy21fs.vercel.app/)
- Storybook URL: https://weather-app-storybook.vercel.app/

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

### Api resources

- [https://open-meteo.com/](https://open-meteo.com/) – Weather API

---
