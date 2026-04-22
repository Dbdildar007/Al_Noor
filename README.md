# Al-Ummah — React Native CLI App

A full-featured Islamic community app built with React Native CLI.

---

## 📁 Folder Structure

```
AlUmmah/
├── App.tsx                        # Root component — splash logic lives here
├── babel.config.js
├── tsconfig.json
├── package.json
│
├── src/
│   ├── screens/
│   │   ├── SplashScreen.tsx       # Animated splash (shows once on cold start)
│   │   └── HomeScreen.tsx         # Main scrollable home screen
│   │
│   ├── components/
│   │   ├── HeroHeader.tsx         # Top banner with mosque graphic + CTA
│   │   ├── PrayerTimesCard.tsx    # 5-prayer tracker with active highlight
│   │   ├── QuickActions.tsx       # 4-icon grid (Qibla, Quran, Guide, Members)
│   │   ├── SectionHeader.tsx      # Reusable title + "View All" row
│   │   ├── CampaignCard.tsx       # Fundraising card with progress bar
│   │   ├── RunningCampaignBanner.tsx # Dark-green featured campaign
│   │   ├── EventCard.tsx          # Event card with illustration + RSVP
│   │   └── BottomTabBar.tsx       # 5-tab custom bottom navigation
│   │
│   ├── theme/
│   │   └── index.ts               # Colors, typography, spacing, shadows
│   │
│   └── data/
│       └── index.ts               # Mock data (prayers, campaigns, events)
│
└── android/
    └── MainActivity.kt            # Native splash screen hook
```

---

## 🚀 Setup & Installation

### Prerequisites
- Node.js ≥ 18
- React Native CLI: `npm install -g react-native-cli`
- Android Studio (for Android) or Xcode (for iOS)
- JDK 17+

### 1. Install dependencies

```bash
cd AlUmmah
npm install
```

### 2. Install pods (iOS only)

```bash
cd ios && pod install && cd ..
```

### 3. Link native modules

```bash
# react-native-vector-icons
npx react-native-asset

# react-native-splash-screen — Android
# In android/app/build.gradle, add:
# implementation project(':react-native-splash-screen')

# In MainApplication.kt, add:
# import org.devio.rn.splashscreen.SplashScreenReactPackage
# and register it in getPackages()
```

### 4. Run the app

```bash
# Android
npx react-native run-android

# iOS
npx react-native run-ios
```

---

## 💡 Splash Screen Behavior

The splash screen is controlled **entirely in JavaScript** via `AsyncStorage`.

| Scenario | Splash shown? |
|---|---|
| First ever app launch (cold start) | ✅ Yes — animated, 2.5s |
| App reopened from background | ❌ No |
| App force-quit and reopened | ❌ No (already stored in AsyncStorage) |
| AsyncStorage cleared / fresh install | ✅ Yes |

### How it works (`App.tsx`)

```
AppState listener → detects background→foreground transitions
AsyncStorage key @AlUmmah:splashShown →
  null  → first launch → show splash → set key
  'true' → already launched → skip splash
```

To **reset** splash for testing, clear AsyncStorage or uninstall the app.

---

## 🎨 Design System

| Token | Value |
|---|---|
| Primary | `#2D6A4F` (deep green) |
| Accent | `#52B788` (medium green) |
| Background | `#F8F9F0` (off-white) |
| Orange | `#E76F51` |
| Card BG | `#FFFFFF` |

---

## 📦 Key Dependencies

| Package | Purpose |
|---|---|
| `react-native-safe-area-context` | Safe area insets |
| `@react-native-async-storage/async-storage` | Splash shown flag |
| `react-native-splash-screen` | Native Android/iOS splash frame |
| `react-native-linear-gradient` | Gradient backgrounds |
| `react-native-vector-icons` | Tab bar icons |

---

## 🔧 Customization

- **Add real prayer times**: Replace `src/data/index.ts` with an API call to [Aladhan API](https://aladhan.com/prayer-times-api)
- **Add navigation**: Install `@react-navigation/native-stack` and wrap screens
- **Add real events**: Connect to a backend / Firebase
- **Push notifications**: Add `@notifee/react-native` for prayer time reminders
