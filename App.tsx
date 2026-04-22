// App.tsx
import React, { useState, useEffect, useRef } from 'react';
import { AppState, AppStateStatus } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

import SplashScreen from './src/screens/SplashScreen';
import HomeScreen from './src/screens/HomeScreen';

const SPLASH_KEY = '@AlUmmah:splashShown';

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState<boolean | null>(null);
  const appState = useRef<AppStateStatus>(AppState.currentState);
  const isForeground = useRef<boolean>(true);

  useEffect(() => {
    checkSplash();

    const subscription = AppState.addEventListener('change', handleAppStateChange);
    return () => subscription.remove();
  }, []);

  const handleAppStateChange = (nextState: AppStateStatus) => {
    // If app goes to background then comes back, don't show splash again
    if (appState.current.match(/inactive|background/) && nextState === 'active') {
      isForeground.current = false; // Already launched before
    }
    appState.current = nextState;
  };

  const checkSplash = async () => {
    try {
      const hasShown = await AsyncStorage.getItem(SPLASH_KEY);
      // Show splash only on first-ever cold start
      // If app was in background (isForeground is false by the time we check),
      // we skip splash too
      if (!hasShown && isForeground.current) {
        setShowSplash(true);
      } else {
        setShowSplash(false);
      }
    } catch {
      setShowSplash(false);
    }
  };

  const handleSplashFinish = async () => {
    await AsyncStorage.setItem(SPLASH_KEY, 'true');
    setShowSplash(false);
  };

  // Don't render until we've checked async storage
  if (showSplash === null) return null;

  return (
    <SafeAreaProvider>
      {showSplash ? (
        <SplashScreen onFinish={handleSplashFinish} />
      ) : (
        <HomeScreen />
      )}
    </SafeAreaProvider>
  );
};

export default App;
