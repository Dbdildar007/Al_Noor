// src/components/EventCard.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Colors, Typography, Spacing, BorderRadius, Shadows } from '../theme';

const { width } = Dimensions.get('window');

interface EventCardProps {
  category: string;
  categoryColor: string;
  categoryBg: string;
  title: string;
  description: string;
  date: string;
  action: string;
  image: string;
  onPress?: () => void;
}

const EventIllustration: React.FC<{ type: string }> = ({ type }) => {
  const getBg = () => {
    if (type === 'study') return '#E8F4FD';
    if (type === 'community') return '#E8F5E9';
    return '#FFF3E0';
  };

  const getEmoji = () => {
    if (type === 'study') return '📚';
    if (type === 'community') return '🤝';
    return '🍱';
  };

  return (
    <View style={[styles.illustration, { backgroundColor: getBg() }]}>
      {/* Decorative shapes */}
      <View style={[styles.illustrationCircle, { backgroundColor: getBg(), opacity: 0.6 }]} />
      <View style={[styles.illustrationRect, { opacity: 0.2 }]} />
      <Text style={styles.illustrationEmoji}>{getEmoji()}</Text>
      {type === 'study' && (
        <>
          <View style={styles.studyBook1} />
          <View style={styles.studyBook2} />
          <Text style={styles.studyText}>STUDY{'\n'}& WORK</Text>
        </>
      )}
      {type === 'community' && (
        <Text style={styles.communityText}>COMMUNITY{'\n'}IFTAR</Text>
      )}
      {type === 'volunteer' && (
        <>
          <Text style={styles.volunteerBadge}>DAYS</Text>
          <Text style={styles.volunteerText}>VOLUNTEER</Text>
        </>
      )}
    </View>
  );
};

const EventCard: React.FC<EventCardProps> = ({
  category,
  categoryColor,
  categoryBg,
  title,
  description,
  date,
  action,
  image,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      {/* Illustration */}
      <EventIllustration type={image} />

      {/* Content */}
      <View style={styles.content}>
        {/* Category badge */}
        <View style={[styles.badge, { backgroundColor: categoryBg }]}>
          <Text style={[styles.badgeText, { color: categoryColor }]}>{category}</Text>
        </View>

        {/* Date */}
        <Text style={styles.date}>📅 {date}</Text>

        {/* Title */}
        <Text style={styles.title}>{title}</Text>

        {/* Description */}
        <Text style={styles.description}>{description}</Text>

        {/* Action button */}
        <TouchableOpacity style={styles.actionBtn} onPress={onPress} activeOpacity={0.8}>
          <Text style={styles.actionBtnText}>{action}</Text>
          <Text style={styles.actionArrow}> →</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.cardBg,
    borderRadius: BorderRadius.xl,
    marginBottom: Spacing.md,
    ...Shadows.card,
    borderWidth: 1,
    borderColor: Colors.borderLight,
    overflow: 'hidden',
  },
  illustration: {
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  illustrationCircle: {
    position: 'absolute',
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(0,0,0,0.04)',
    right: -20,
    top: -20,
  },
  illustrationRect: {
    position: 'absolute',
    width: 80,
    height: 80,
    borderRadius: 12,
    backgroundColor: Colors.primary,
    left: 20,
    bottom: -20,
    transform: [{ rotate: '15deg' }],
  },
  illustrationEmoji: {
    fontSize: 48,
    position: 'absolute',
  },
  studyBook1: {
    position: 'absolute',
    width: 40,
    height: 52,
    backgroundColor: Colors.blue,
    borderRadius: 4,
    left: width / 2 - 60,
    top: 30,
    opacity: 0.6,
  },
  studyBook2: {
    position: 'absolute',
    width: 36,
    height: 48,
    backgroundColor: Colors.orange,
    borderRadius: 4,
    left: width / 2 - 20,
    top: 34,
    opacity: 0.6,
  },
  studyText: {
    position: 'absolute',
    fontSize: 16,
    fontWeight: '800',
    color: Colors.text,
    opacity: 0.7,
    textAlign: 'center',
  },
  communityText: {
    position: 'absolute',
    fontSize: 14,
    fontWeight: '800',
    color: Colors.primary,
    opacity: 0.6,
    textAlign: 'center',
  },
  volunteerBadge: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: Colors.orange,
    color: Colors.white,
    fontSize: 10,
    fontWeight: '800',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
    overflow: 'hidden',
  },
  volunteerText: {
    position: 'absolute',
    top: 16,
    left: 12,
    fontSize: 11,
    fontWeight: '800',
    color: Colors.orange,
    letterSpacing: 1,
  },
  content: {
    padding: Spacing.base,
  },
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: Spacing.sm,
    paddingVertical: 4,
    borderRadius: BorderRadius.sm,
    marginBottom: Spacing.xs,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: Typography.fontWeights.bold,
    letterSpacing: 0.5,
  },
  date: {
    fontSize: Typography.fontSizes.xs,
    color: Colors.textMuted,
    marginBottom: 6,
    letterSpacing: 0.3,
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
  actionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: Colors.border,
    borderRadius: BorderRadius.round,
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.lg,
  },
  actionBtnText: {
    color: Colors.text,
    fontSize: Typography.fontSizes.sm,
    fontWeight: Typography.fontWeights.semiBold,
  },
  actionArrow: {
    color: Colors.primary,
    fontSize: Typography.fontSizes.sm,
    fontWeight: Typography.fontWeights.bold,
  },
});

export default EventCard;
