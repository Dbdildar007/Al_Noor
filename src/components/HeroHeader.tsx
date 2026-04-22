// src/components/HeroHeader.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import { Colors, Typography, Spacing, BorderRadius } from '../theme';

const { width } = Dimensions.get('window');

const HeroHeader: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Background gradient simulation */}
      <View style={styles.bgGradient}>
        {/* Mosque silhouette pattern - geometric */}
        <View style={styles.mosquePattern}>
          <View style={styles.dome} />
          <View style={styles.minaretLeft} />
          <View style={styles.minaretRight} />
          <View style={styles.archRow}>
            {[0,1,2,3,4,5].map(i => (
              <View key={i} style={styles.arch} />
            ))}
          </View>
        </View>

        {/* Decorative top scallop border */}
        <View style={styles.scallopsTop}>
          {Array(14).fill(0).map((_, i) => (
            <View key={i} style={styles.scallop} />
          ))}
        </View>
      </View>

      {/* Header nav */}
      <View style={styles.nav}>
        <View style={styles.logoRow}>
          <View style={styles.logoIcon}>
            <View style={styles.logoCrescent} />
          </View>
          <Text style={styles.logoText}>Al-Ummah</Text>
        </View>
        <TouchableOpacity style={styles.avatar}>
          <Text style={styles.avatarText}>A</Text>
        </TouchableOpacity>
      </View>

      {/* Event ticker */}
      <View style={styles.ticker}>
        <Text style={styles.tickerText}>
          ★  COMMUNITY IFTAH THIS FRIDAY AT 6:00 PM  ✦  COMMUNITY IFTAH THIS FRIDAY AT 6:00 PM  ★
        </Text>
      </View>

      {/* Hero CTA */}
      <View style={styles.heroContent}>
        <Text style={styles.heroTitle}>A Sanctuary for Every Soul</Text>
        <Text style={styles.heroSubtitle}>
          Join our vibrant community in spiritual growth, learning, and service. Finding peace in the heart of the city.
        </Text>
        <View style={styles.heroButtons}>
          <TouchableOpacity style={styles.primaryBtn}>
            <Text style={styles.primaryBtnText}>Join Us Today</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryBtn}>
            <Text style={styles.secondaryBtnText}>View Gallery</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    overflow: 'hidden',
    borderBottomLeftRadius: BorderRadius.xxl,
    borderBottomRightRadius: BorderRadius.xxl,
    marginBottom: Spacing.base,
  },
  bgGradient: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colors.primaryDark,
  },
  mosquePattern: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 120,
    alignItems: 'center',
    opacity: 0.15,
  },
  dome: {
    width: 100,
    height: 50,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: Colors.accent,
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
  },
  minaretLeft: {
    position: 'absolute',
    bottom: 30,
    left: width / 2 - 80,
    width: 16,
    height: 80,
    backgroundColor: Colors.accent,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  minaretRight: {
    position: 'absolute',
    bottom: 30,
    right: width / 2 - 80,
    width: 16,
    height: 80,
    backgroundColor: Colors.accent,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  archRow: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    gap: 4,
  },
  arch: {
    width: 40,
    height: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: Colors.accent,
  },
  scallopsTop: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    opacity: 0.1,
  },
  scallop: {
    width: 24,
    height: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    backgroundColor: Colors.white,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.base,
    paddingTop: Spacing.lg,
    paddingBottom: Spacing.sm,
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  logoIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: Colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  logoCrescent: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 3,
    borderColor: Colors.white,
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    transform: [{ rotate: '45deg' }],
  },
  logoText: {
    fontSize: Typography.fontSizes.lg,
    fontWeight: Typography.fontWeights.bold,
    color: Colors.white,
    letterSpacing: 0.5,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: Colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  avatarText: {
    color: Colors.white,
    fontWeight: Typography.fontWeights.bold,
    fontSize: Typography.fontSizes.md,
  },
  ticker: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingVertical: 5,
    paddingHorizontal: Spacing.base,
  },
  tickerText: {
    color: Colors.accentLight,
    fontSize: Typography.fontSizes.xs,
    letterSpacing: 0.5,
  },
  heroContent: {
    paddingHorizontal: Spacing.base,
    paddingTop: Spacing.xl,
    paddingBottom: Spacing.xxl,
  },
  heroTitle: {
    fontSize: Typography.fontSizes.xxl,
    fontWeight: Typography.fontWeights.extraBold,
    color: Colors.white,
    marginBottom: Spacing.sm,
    letterSpacing: 0.3,
  },
  heroSubtitle: {
    fontSize: Typography.fontSizes.sm,
    color: 'rgba(255,255,255,0.8)',
    lineHeight: 20,
    marginBottom: Spacing.lg,
  },
  heroButtons: {
    flexDirection: 'row',
    gap: Spacing.sm,
  },
  primaryBtn: {
    backgroundColor: Colors.accent,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm + 2,
    borderRadius: BorderRadius.round,
    shadowColor: Colors.accent,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 6,
  },
  primaryBtnText: {
    color: Colors.white,
    fontSize: Typography.fontSizes.md,
    fontWeight: Typography.fontWeights.bold,
  },
  secondaryBtn: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm + 2,
    borderRadius: BorderRadius.round,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  secondaryBtnText: {
    color: Colors.white,
    fontSize: Typography.fontSizes.md,
    fontWeight: Typography.fontWeights.medium,
  },
});

export default HeroHeader;
