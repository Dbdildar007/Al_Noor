// src/screens/SplashScreen.tsx
import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
  StatusBar,
} from 'react-native';
import { Colors } from '../theme';

const { width, height } = Dimensions.get('window');

interface SplashScreenProps {
  onFinish: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;
  const bgFade = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Entrance animation
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 6,
        tension: 40,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();

    // Exit after 2.5s
    const timer = setTimeout(() => {
      Animated.timing(bgFade, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        onFinish();
      });
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Animated.View style={[styles.container, { opacity: bgFade }]}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.splashBg} />

      {/* Decorative circles */}
      <View style={styles.circleTopRight} />
      <View style={styles.circleBottomLeft} />
      <View style={styles.circleCenter} />

      {/* Geometric pattern top */}
      <View style={styles.patternTop}>
        {Array(6).fill(0).map((_, i) => (
          <View key={i} style={[styles.patternDot, { opacity: 0.15 + i * 0.05 }]} />
        ))}
      </View>

      {/* Main content */}
      <Animated.View
        style={[
          styles.content,
          {
            opacity: fadeAnim,
            transform: [
              { scale: scaleAnim },
              { translateY: slideAnim },
            ],
          },
        ]}
      >
        {/* Logo Icon */}
        <View style={styles.logoContainer}>
          <View style={styles.logoOuter}>
            <View style={styles.logoInner}>
              {/* Crescent moon shape */}
              <View style={styles.crescent} />
              <View style={styles.crescentCover} />
              {/* Star */}
              <View style={styles.star} />
            </View>
          </View>
          <View style={styles.logoGlow} />
        </View>

        {/* App Name */}
        <Text style={styles.appName}>Al-Ummah</Text>
        <View style={styles.divider}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>✦</Text>
          <View style={styles.dividerLine} />
        </View>
        <Text style={styles.tagline}>A Sanctuary for Every Soul</Text>

        {/* Arabic text */}
        <Text style={styles.arabicText}>بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</Text>
      </Animated.View>

      {/* Loading dots */}
      <Animated.View style={[styles.loadingContainer, { opacity: fadeAnim }]}>
        {[0, 1, 2].map((i) => (
          <LoadingDot key={i} delay={i * 200} />
        ))}
      </Animated.View>

      {/* Bottom pattern */}
      <View style={styles.patternBottom}>
        {Array(6).fill(0).map((_, i) => (
          <View key={i} style={[styles.patternDot, { opacity: 0.15 + i * 0.05 }]} />
        ))}
      </View>
    </Animated.View>
  );
};

const LoadingDot: React.FC<{ delay: number }> = ({ delay }) => {
  const pulse = useRef(new Animated.Value(0.3)).current;

  useEffect(() => {
    const animate = () => {
      Animated.sequence([
        Animated.timing(pulse, { toValue: 1, duration: 500, useNativeDriver: true }),
        Animated.timing(pulse, { toValue: 0.3, duration: 500, useNativeDriver: true }),
      ]).start(() => animate());
    };
    const t = setTimeout(animate, delay);
    return () => clearTimeout(t);
  }, []);

  return (
    <Animated.View style={[styles.loadingDot, { opacity: pulse }]} />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.splashBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleTopRight: {
    position: 'absolute',
    top: -80,
    right: -80,
    width: 240,
    height: 240,
    borderRadius: 120,
    backgroundColor: Colors.primaryLight,
    opacity: 0.15,
  },
  circleBottomLeft: {
    position: 'absolute',
    bottom: -60,
    left: -60,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: Colors.accent,
    opacity: 0.12,
  },
  circleCenter: {
    position: 'absolute',
    width: 400,
    height: 400,
    borderRadius: 200,
    borderWidth: 1,
    borderColor: Colors.accent,
    opacity: 0.08,
  },
  patternTop: {
    position: 'absolute',
    top: 60,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
  },
  patternBottom: {
    position: 'absolute',
    bottom: 100,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
  },
  patternDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.accent,
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  logoContainer: {
    position: 'relative',
    marginBottom: 28,
  },
  logoGlow: {
    position: 'absolute',
    top: -10,
    left: -10,
    right: -10,
    bottom: -10,
    borderRadius: 50,
    backgroundColor: Colors.accent,
    opacity: 0.15,
  },
  logoOuter: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: 'rgba(82, 183, 136, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: 'rgba(82, 183, 136, 0.4)',
  },
  logoInner: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  crescent: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.splashBg,
    position: 'absolute',
    top: 8,
    left: 8,
  },
  crescentCover: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.accent,
    position: 'absolute',
    top: 8,
    left: 14,
  },
  star: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.splashBg,
    position: 'absolute',
    top: 14,
    right: 12,
  },
  appName: {
    fontSize: 36,
    fontWeight: '800',
    color: Colors.white,
    letterSpacing: 1.5,
    marginBottom: 16,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 12,
  },
  dividerLine: {
    width: 50,
    height: 1,
    backgroundColor: Colors.accent,
    opacity: 0.5,
  },
  dividerText: {
    color: Colors.accent,
    fontSize: 12,
  },
  tagline: {
    fontSize: 14,
    color: Colors.accentLight,
    letterSpacing: 0.5,
    marginBottom: 20,
    opacity: 0.9,
  },
  arabicText: {
    fontSize: 16,
    color: Colors.accentLight,
    letterSpacing: 1,
    opacity: 0.7,
    marginTop: 8,
  },
  loadingContainer: {
    position: 'absolute',
    bottom: 60,
    flexDirection: 'row',
    gap: 8,
  },
  loadingDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.accent,
  },
});

export default SplashScreen;
