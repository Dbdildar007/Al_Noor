// src/components/RunningCampaignBanner.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Colors, Typography, Spacing, BorderRadius, Shadows } from '../theme';
import { runningCampaign } from '../data';

const RunningCampaignBanner: React.FC = () => {
  const progressPct = `${Math.round(runningCampaign.progress * 100)}%`;

  return (
    <View style={styles.container}>
      {/* Top label row */}
      <View style={styles.labelRow}>
        <View style={styles.tagContainer}>
          <View style={styles.tagDot} />
          <Text style={styles.tagText}>RUNNING CAMPAIGNS</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.allText}>All Campaigns →</Text>
        </TouchableOpacity>
      </View>

      {/* Campaign info card */}
      <View style={styles.card}>
        {/* Decorative element */}
        <View style={styles.decorTop} />
        <View style={styles.decorBottom} />

        <View style={styles.cardContent}>
          <Text style={styles.campaignTitle}>{runningCampaign.title}</Text>
          <Text style={styles.campaignDesc}>{runningCampaign.description}</Text>

          {/* Progress */}
          <View style={styles.progressWrapper}>
            <View style={styles.progressRow}>
              <Text style={styles.progressPct}>{progressPct} raised</Text>
              <Text style={styles.progressGoal}>
                ${runningCampaign.raised} / ${runningCampaign.goal}
              </Text>
            </View>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: progressPct as any }]} />
            </View>
          </View>

          {/* Buttons */}
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.donateBtn}>
              <Text style={styles.donateBtnText}>Donate Now</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.detailsBtn}>
              <Text style={styles.detailsBtnText}>View Details</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: Spacing.base,
    marginBottom: Spacing.base,
  },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.sm,
  },
  tagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  tagDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.orange,
  },
  tagText: {
    fontSize: Typography.fontSizes.xs,
    fontWeight: Typography.fontWeights.bold,
    color: Colors.text,
    letterSpacing: 0.5,
  },
  allText: {
    fontSize: Typography.fontSizes.xs,
    color: Colors.primary,
    fontWeight: Typography.fontWeights.semiBold,
  },
  card: {
    backgroundColor: Colors.primary,
    borderRadius: BorderRadius.xl,
    overflow: 'hidden',
    ...Shadows.button,
    position: 'relative',
  },
  decorTop: {
    position: 'absolute',
    top: -30,
    right: -30,
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(255,255,255,0.08)',
  },
  decorBottom: {
    position: 'absolute',
    bottom: -20,
    left: -20,
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255,255,255,0.05)',
  },
  cardContent: {
    padding: Spacing.base,
  },
  campaignTitle: {
    fontSize: Typography.fontSizes.base,
    fontWeight: Typography.fontWeights.bold,
    color: Colors.white,
    marginBottom: 6,
    lineHeight: 22,
  },
  campaignDesc: {
    fontSize: Typography.fontSizes.sm,
    color: 'rgba(255,255,255,0.75)',
    lineHeight: 18,
    marginBottom: Spacing.md,
  },
  progressWrapper: {
    marginBottom: Spacing.md,
  },
  progressRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  progressPct: {
    fontSize: Typography.fontSizes.xs,
    color: Colors.accentLight,
    fontWeight: Typography.fontWeights.semiBold,
  },
  progressGoal: {
    fontSize: Typography.fontSizes.xs,
    color: 'rgba(255,255,255,0.6)',
  },
  progressBar: {
    height: 6,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: Colors.accent,
    borderRadius: 3,
  },
  buttons: {
    flexDirection: 'row',
    gap: Spacing.sm,
  },
  donateBtn: {
    flex: 1,
    backgroundColor: Colors.accent,
    paddingVertical: Spacing.sm + 2,
    borderRadius: BorderRadius.round,
    alignItems: 'center',
  },
  donateBtnText: {
    color: Colors.white,
    fontSize: Typography.fontSizes.sm,
    fontWeight: Typography.fontWeights.bold,
  },
  detailsBtn: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm + 2,
    borderRadius: BorderRadius.round,
    borderWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailsBtnText: {
    color: Colors.white,
    fontSize: Typography.fontSizes.sm,
    fontWeight: Typography.fontWeights.semiBold,
  },
});

export default RunningCampaignBanner;
