// src/components/CampaignCard.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Colors, Typography, Spacing, BorderRadius, Shadows } from '../theme';

interface CampaignCardProps {
  tag: string;
  tagColor: string;
  title: string;
  description: string;
  raised: number;
  goal: number;
  progress: number;
  category: string;
  onDonate?: () => void;
  onDetails?: () => void;
}

const CampaignCard: React.FC<CampaignCardProps> = ({
  tag,
  tagColor,
  title,
  description,
  raised,
  goal,
  progress,
  category,
  onDonate,
  onDetails,
}) => {
  const formatCurrency = (amount: number) => {
    if (amount >= 1000) return `$${(amount / 1000).toFixed(0)}k`;
    return `$${amount}`;
  };

  return (
    <View style={styles.container}>
      {/* Tag */}
      <View style={[styles.tag, { backgroundColor: tagColor + '15', borderColor: tagColor + '30' }]}>
        <View style={[styles.tagDot, { backgroundColor: tagColor }]} />
        <Text style={[styles.tagText, { color: tagColor }]}>{tag}</Text>
      </View>

      {/* Category label */}
      <View style={styles.categoryRow}>
        <Text style={styles.categoryText}>{category}</Text>
        <View style={styles.categoryIcon}>
          <Text style={styles.categoryEmoji}>
            {category === 'MOSQUE' ? '🕌' : '📚'}
          </Text>
        </View>
      </View>

      {/* Title & description */}
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>

      {/* Progress */}
      <View style={styles.progressSection}>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${progress * 100}%` as any }]} />
        </View>
        <View style={styles.progressLabels}>
          <Text style={styles.raisedText}>{formatCurrency(raised)} raised</Text>
          <Text style={styles.goalText}>Goal: {formatCurrency(goal)}</Text>
        </View>
      </View>

      {/* Buttons */}
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.donateBtn} onPress={onDonate} activeOpacity={0.8}>
          <Text style={styles.donateBtnText}>Donate Now</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.detailsBtn} onPress={onDetails} activeOpacity={0.8}>
          <Text style={styles.detailsBtnText}>Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.cardBg,
    borderRadius: BorderRadius.xl,
    padding: Spacing.base,
    marginBottom: Spacing.sm,
    ...Shadows.card,
    borderWidth: 1,
    borderColor: Colors.borderLight,
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: Spacing.sm,
    paddingVertical: 4,
    borderRadius: BorderRadius.round,
    borderWidth: 1,
    marginBottom: Spacing.sm,
    gap: 4,
  },
  tagDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  tagText: {
    fontSize: Typography.fontSizes.xs,
    fontWeight: Typography.fontWeights.bold,
    letterSpacing: 0.5,
  },
  categoryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  categoryText: {
    fontSize: Typography.fontSizes.xs,
    color: Colors.textMuted,
    letterSpacing: 1,
    fontWeight: Typography.fontWeights.semiBold,
  },
  categoryIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: Colors.surfaceGreen,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryEmoji: {
    fontSize: 14,
  },
  title: {
    fontSize: Typography.fontSizes.base,
    fontWeight: Typography.fontWeights.bold,
    color: Colors.text,
    marginBottom: 6,
    lineHeight: 22,
  },
  description: {
    fontSize: Typography.fontSizes.sm,
    color: Colors.textMuted,
    lineHeight: 18,
    marginBottom: Spacing.md,
  },
  progressSection: {
    marginBottom: Spacing.md,
  },
  progressBar: {
    height: 7,
    backgroundColor: Colors.progressBg,
    borderRadius: 4,
    marginBottom: 6,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: Colors.primary,
    borderRadius: 4,
  },
  progressLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  raisedText: {
    fontSize: Typography.fontSizes.xs,
    fontWeight: Typography.fontWeights.semiBold,
    color: Colors.primary,
  },
  goalText: {
    fontSize: Typography.fontSizes.xs,
    color: Colors.textMuted,
  },
  buttons: {
    flexDirection: 'row',
    gap: Spacing.sm,
  },
  donateBtn: {
    flex: 1,
    backgroundColor: Colors.primary,
    borderRadius: BorderRadius.round,
    paddingVertical: Spacing.sm + 2,
    alignItems: 'center',
    ...Shadows.button,
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
    borderColor: Colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailsBtnText: {
    color: Colors.textSecondary,
    fontSize: Typography.fontSizes.sm,
    fontWeight: Typography.fontWeights.semiBold,
  },
});

export default CampaignCard;
