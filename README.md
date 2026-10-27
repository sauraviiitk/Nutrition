<div align="center">

# 🥗 Nutrition+

### Smart AI-Powered Food Scanner & Macro Tracker

An intelligent, privacy-focused nutrition companion built with **Expo**, **React Native**, and **Google Gemini Vision**. Snap a photo of your meal or describe it in plain English to get instant, accurate macro estimations (Calories, Protein, Carbs, Fat).

[![React Native](https://img.shields.io/badge/React_Native-0.86-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-SDK_57-000020?style=for-the-badge&logo=expo&logoColor=white)](https://expo.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Gemini](https://img.shields.io/badge/Google_Gemini-Vision_AI-8E75B2?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/)

<br/>

**[📱 Open Live Demo on Expo Go](https://expo.dev/preview/update?message=Fix+app.json+schema+errors&updateRuntimeVersion=1.0.0&createdAt=2026-09-07T10%3A01%3A56.866Z&slug=exp&projectId=0ea2f3a9-23f1-43f7-8489-9232a130799a&group=bd56e5e7-d6b9-4fb5-9f16-d90d2b032ebe)** &nbsp;|&nbsp; **[🔗 Permanent Project Link](https://u.expo.dev/0ea2f3a9-23f1-43f7-8489-9232a130799a)**

</div>

---

## 📱 App Preview

| Home Dashboard | Macro Tracking | AI Camera Scanner | Meal History Diary |
|:---:|:---:|:---:|:---:|
| <img width="210" alt="Home Screen" src="https://github.com/user-attachments/assets/4da98143-b0be-47f0-b8ee-f1947f3e3ad4" /> | <img width="210" alt="Dashboard Details" src="https://github.com/user-attachments/assets/2af9062f-508c-4f21-8750-09a861602224" /> | <img width="210" alt="Food Scanner" src="https://github.com/user-attachments/assets/e47649d9-801f-4696-adb5-9b48c099079b" /> | <img width="210" alt="Meal Diary" src="https://github.com/user-attachments/assets/9810a15a-f579-4279-9a19-eedb65bc9075" /> |

---

## ✨ Features

- 📸 **AI Food Recognition** — Take a picture with your camera or pick one from your photo library; Gemini AI detects individual food items, estimates portion sizes, and calculates macros.
- 💬 **Natural Language Logging** — Can't take a photo? Just describe what you ate (e.g. *"2 scrambled eggs with cheddar and a black coffee"*) and get structured macro breakdowns.
- ✏️ **Interactive Editing & Recalculation** — Adjust portion sizes or rename items on the fly; the AI recalculates individual item values with a single tap.
- 🎯 **Daily Target Dashboard** — Track today's progress against customizable calorie goals with dynamic progress meters and macro summaries (Protein, Carbs, Fat).
- 📅 **Categorized Meal Diary** — Organize your daily nutrition into Breakfast, Lunch, Dinner, and Snacks with exact logging timestamps and easy deletion.
- 🔒 **Local-First & Private** — All your meal logs and daily goals are saved locally on your device via AsyncStorage.
- 🎨 **Sleek Dark Mode Design** — Purpose-built dark theme featuring high-contrast typography, smooth gradients, and tactile micro-interactions.

---

## 🏗️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [React Native 0.86](https://reactnative.dev/) with [Expo SDK 57](https://expo.dev/) |
| **Routing & Backend** | [Expo Router](https://docs.expo.dev/router/introduction/) with Full-Stack API Routes (`+api.ts`) |
| **Vision AI** | [Google Gemini API](https://ai.google.dev/) via `@google/genai` (Structured JSON Mode) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) (Strict typing across client and server routes) |
| **Persistence** | [`@react-native-async-storage/async-storage`](https://react-native-async-storage.github.io/async-storage/) |
| **Icons & UI** | [`lucide-react-native`](https://lucide.dev/), `expo-linear-gradient`, `@react-native-masked-view/masked-view` |
| **Deployment** | Serverless API hosting on [Vercel](https://vercel.com) & OTA updates on [Expo EAS](https://expo.dev/eas) |

---

## 📂 Project Architecture

```plaintext
Nutrition/
├── app/
│   ├── (tabs)/
│   │   ├── _layout.tsx         # Bottom tab navigation bar (Home, Scan, Diary)
│   │   ├── index.tsx           # Daily nutrition dashboard & calorie progress
│   │   ├── scan.tsx            # Camera viewfinder & gallery photo selection
│   │   └── diary.tsx           # Chronological meal history & log management
│   ├── api/
│   │   ├── scan-food+api.ts    # POST: Image base64 → AI macro breakdown
│   │   ├── analyze-text+api.ts # POST: Natural text description → AI macro estimation
│   │   └── recalculate-item+api.ts # POST: Re-estimate single item & portion
│   ├── _layout.tsx             # Root stack navigation layout
│   ├── add-meal.tsx            # Selection modal (Scan Photo vs. Describe Meal)
│   ├── manual-entry.tsx        # Text-based meal description screen
│   ├── scan-result.tsx         # Macro review, item editing, and meal saving
│   └── settings.tsx            # Daily calorie goal customization
├── utils/
│   ├── mealStorage.ts          # AsyncStorage helper for meal CRUD & date indexing
│   └── settingsStorage.ts      # AsyncStorage helper for user calorie goals
├── .env.example                # Template for environment variables
├── app.json                    # Expo project configuration & permissions
├── vercel.json                 # Vercel deployment configuration for API routes
└── package.json                # Project dependencies and npm scripts
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.x or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Expo Go](https://expo.dev/go) app installed on your physical iOS or Android device (or an iOS Simulator / Android Emulator)
- A Google Gemini API key from [Google AI Studio](https://aistudio.google.com/)

---

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sauraviiitk/Nutrition.git
   cd Nutrition/Nutrition
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   Copy `.env.example` to create your local `.env`:
   ```bash
   cp .env.example .env
   ```

4. **Add your Gemini API Key:**
   Open `.env` and set your key:
   ```env
   GEMINI_API_KEY=your_actual_gemini_api_key_here
   EXPO_PUBLIC_API_BASE=http://localhost:8081
   ```

   > 💡 **Testing on a Physical Device?**
   > When running on a physical phone via the Expo Go app, `localhost` will point to the phone itself rather than your development machine. Change `EXPO_PUBLIC_API_BASE` to your computer's local Wi-Fi IP address (e.g. `http://192.168.1.50:8081`).

---

### Running the App

Start the Expo development server:

```bash
npx expo start
```

- **iOS / Android:** Open the **Expo Go** app and scan the QR code displayed in the terminal.
- **Web:** Press `w` in your terminal to launch the web client.
- **Simulator / Emulator:** Press `i` for iOS Simulator or `a` for Android Emulator.

---

## 📡 API Reference

Nutrition+ leverages Expo Router API routes with `@google/genai` to securely handle AI inferences server-side without exposing API keys on the client:

### 1. `POST /api/scan-food`
Analyzes a base64-encoded meal image and extracts items with estimated calories and macros.
- **Request Body:**
  ```json
  {
    "base64Image": "<base64_string>",
    "mediaType": "image/jpeg"
  }
  ```
- **Response:**
  ```json
  {
    "items": [
      {
        "name": "Grilled Chicken Breast",
        "portion_estimate": "150g",
        "calories": 248,
        "protein_g": 46,
        "carbs_g": 0,
        "fat_g": 5
      }
    ],
    "total": { "calories": 248, "protein_g": 46, "carbs_g": 0, "fat_g": 5 },
    "confidence": "high"
  }
  ```

### 2. `POST /api/analyze-text`
Estimates nutritional data from free-form meal descriptions.
- **Request Body:**
  ```json
  {
    "description": "Bowl of oatmeal with sliced banana and a spoonful of peanut butter"
  }
  ```

### 3. `POST /api/recalculate-item`
Re-calculates nutritional values for a single item after user corrections.
- **Request Body:**
  ```json
  {
    "name": "Greek Yogurt",
    "portion_estimate": "200g"
  }
  ```

---

## 🛠️ Key Improvements & Bug Fixes

1. **🛡️ Robust AI Error Handling & Structured JSON Parsing**
   - Fixed unhandled runtime exceptions (`response.text is possibly undefined`) when Gemini encounters safety filters or API limits.
   - Enforced structured JSON output (`responseMimeType: "application/json"`) and regex-based extraction to prevent JSON parse errors from conversational LLM preambles.
   - Added environment variable validation for `GEMINI_API_KEY` with meaningful error responses.

2. **📸 Persistent Camera Permission Lifecycle**
   - Replaced stateful one-shot permission checks with Expo's `useCameraPermissions` hook.
   - Prevents the scan screen from prompting the user to grant camera permissions every time they revisit the tab when permission was already approved.

3. **🌓 Safe Parameter Handling & UI Contrast Polish**
   - Guarded `JSON.parse` in `scan-result.tsx` against corrupted route parameters with a user-friendly fallback screen.
   - Fixed invisible dark-mode headers and back arrow buttons (`#1A1A1A` on `#0B110D`).
   - Resolved input focus conflict by removing duplicate `autoFocus` props.

4. **🌍 Timezone-Safe Date Consistency**
   - Added `getTodayDateKey()` using local device calendar days (`YYYY-MM-DD`) instead of UTC `toISOString()`.
   - Ensures meals logged late at night or across time zones reliably appear on the correct day's diary and dashboard.


