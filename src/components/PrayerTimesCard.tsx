// src/components/PrayerTimesCard.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Colors, Typography, Spacing, BorderRadius, Shadows } from '../theme';
import { prayerTimes } from '../data';

const prayers = [
  { name: 'FAJR', key: 'fajr', time: prayerTimes.fajr },
  { name: 'DHUHR', key: 'dhuhr', time: prayerTimes.dhuhr, active: true },
  { name: 'ASR', key: 'asr', time: prayerTimes.asr },
  { name: 'MAGHRIB', key: 'maghrib', time: prayerTimes.maghrib },
  { name: 'ISHA', key: 'isha', time: prayerTimes.isha },
];

const PrayerTimesCard: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.label}>PRAYER TRACKER</Text>
          <Text style={styles.subLabel}>Today's Prayer Times</Text>
        </View>
        <View style={styles.dateBox}>
          <Text style={styles.ramadanText}>{prayerTimes.ramadanDay}</Text>
          <Text style={styles.dateText}>{prayerTimes.currentDate}</Text>
        </View>
      </View>

      {/* Prayer times grid */}
      <View style={styles.grid}>
        {prayers.map((prayer, index) => (
          <View
            key={prayer.key}
            style={[
              styles.prayerItem,
              prayer.active && styles.prayerItemActive,
            ]}
          >
            {prayer.active && <View style={styles.activePulse} />}
            <View style={styles.prayerIcon}>
              {prayer.key === 'fajr' && <Text style={[styles.icon, prayer.active && styles.iconActive]}>🌙</Text>}
              {prayer.key === 'dhuhr' && <Text style={[styles.icon, prayer.active && styles.iconActive]}>☀️</Text>}
              {prayer.key === 'asr' && <Text style={[styles.icon, prayer.active && styles.iconActive]}>🌤️</Text>}
              {prayer.key === 'maghrib' && <Text style={[styles.icon, prayer.active && styles.iconActive]}>🌅</Text>}
              {prayer.key === 'isha' && <Text style={[styles.icon, prayer.active && styles.iconActive]}>🌃</Text>}
            </View>
            <Text style={[styles.prayerName, prayer.active && styles.prayerNameActive]}>
              {prayer.name}
            </Text>
            <Text style={[styles.prayerTime, prayer.active && styles.prayerTimeActive]}>
              {prayer.time}
            </Text>
            {prayer.active && <Text style={styles.nextLabel}>now</Text>}
          </View>
        ))}
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.locationRow}>
          <Text style={styles.locationIcon}>📍</Text>
          <Text style={styles.locationText}>Main Prayer Hall  ·  Central City</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.scheduleLink}>Full Schedule</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: Spacing.base,
    marginBottom: Spacing.base,
    backgroundColor: Colors.cardBg,
    borderRadius: BorderRadius.xl,
    padding: Spacing.base,
    ...Shadows.card,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: Spacing.md,
  },
  label: {
    fontSize: Typography.fontSizes.xs,
    fontWeight: Typography.fontWeights.bold,
    color: Colors.textMuted,
    letterSpacing: 1,
  },
  subLabel: {
    fontSize: Typography.fontSizes.sm,
    fontWeight: Typography.fontWeights.semiBold,
    color: Colors.text,
    marginTop: 2,
  },
  dateBox: {
    alignItems: 'flex-end',
  },
  ramadanText: {
    fontSize: Typography.fontSizes.xs,
    color: Colors.primary,
    fontWeight: Typography.fontWeights.semiBold,
  },
  dateText: {
    fontSize: Typography.fontSizes.xs,
    color: Colors.textMuted,
    marginTop: 2,
  },
  grid: {
    flexDirection: 'row',
    gap: Spacing.xs,
    marginBottom: Spacing.md,
  },
  prayerItem: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.surfaceGreen,
    borderRadius: BorderRadius.md,
    paddingVertical: Spacing.sm,
    paddingHorizontal: 4,
    position: 'relative',
    overflow: 'hidden',
  },
  prayerItemActive: {
    backgroundColor: Colors.primary,
  },
  activePulse: {
    position: 'absolute',
    top: -20,
    right: -20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.accent,
    opacity: 0.2,
  },
  prayerIcon: {
    marginBottom: 2,
  },
  icon: {
    fontSize: 14,
  },
  iconActive: {
    // active style
  },
  prayerName: {
    fontSize: 8,
    fontWeight: Typography.fontWeights.bold,
    color: Colors.textSecondary,
    letterSpacing: 0.5,
    marginBottom: 2,
  },
  prayerNameActive: {
    color: Colors.accentLight,
  },
  prayerTime: {
    fontSize: Typography.fontSizes.sm,
    fontWeight: Typography.fontWeights.bold,
    color: Colors.text,
  },
  prayerTimeActive: {
    color: Colors.white,
    fontSize: Typography.fontSizes.md,
  },
  nextLabel: {
    fontSize: 8,
    color: Colors.accentLight,
    marginTop: 2,
    fontWeight: Typography.fontWeights.medium,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: Spacing.sm,
    borderTopWidth: 1,
    borderTopColor: Colors.borderLight,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  locationIcon: {
    fontSize: 12,
  },
  locationText: {
    fontSize: Typography.fontSizes.xs,
    color: Colors.textMuted,
  },
  scheduleLink: {
    fontSize: Typography.fontSizes.xs,
    color: Colors.primary,
    fontWeight: Typography.fontWeights.semiBold,
  },
});

export default PrayerTimesCard;
