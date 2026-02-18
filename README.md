# 🇬🇧 Life in the UK Test Practice

A modern, fast, and interactive web application designed to help you prepare for and pass the **Life in the UK Test**. Featuring comprehensive practice exams, a realistic timed test mode, and detailed results analysis.

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

## ✨ Features

- **🎯 Targeted Practice Exams**: 15+ focused exams covering essential topics from the official handbook.
- **⏱️ Realistic Test Mode**: Mock exams with a 45-minute timer and 24 random questions, simulating the real test environment.
- **📊 Detailed Results**: Instant feedback on your performance with a breakdown of scores.
- **🔄 Review Incorrect Answers**: Specifically study the questions you missed to reinforce your knowledge.
- **📱 Responsive Design**: Optimized for desktop, tablet, and mobile viewing.
- **⚡ Built for Speed**: Powered by Vite and React for a lightning-fast user experience.

## 🛠️ Tech Stack

- **Frontend**: React (v19)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router (v7)
- **Deployment**: GitHub Pages

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (Latest LTS recommended)
- npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yanfung418/life-in-the-uk-test.git
   cd life-in-the-uk-test
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173`.

## 📦 Building and Deployment

### Build for Production
```bash
npm run build
```

### Deploy to GitHub Pages
This project is configured to deploy directly to GitHub Pages using the `gh-pages` package.
```bash
npm run deploy
```

## 📂 Project Structure

- `src/data/exams.js`: Contains the comprehensive database of test questions.
- `src/pages/`: Main application views (Landing, Practice, Test, Results).
- `src/components/`: Reusable UI components.
- `src/services/`: Local storage and data management logic.

