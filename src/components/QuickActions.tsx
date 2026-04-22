// src/components/QuickActions.tsx
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
const ITEM_SIZE = (width - Spacing.base * 2 - Spacing.sm * 3) / 4;

const actions = [
  {
    id: '1',
    emoji: '🧭',
    label: 'Find Qibla',
    color: Colors.primary,
    bgColor: Colors.surfaceGreen,
    borderColor: Colors.accentLight,
  },
  {
    id: '2',
    emoji: '📖',
    label: 'Learn Quran',
    color: Colors.orange,
    bgColor: Colors.orangeLight,
    borderColor: '#F4C5B2',
  },
  {
    id: '3',
    emoji: '🕌',
    label: 'Prayer Guide',
    color: Colors.blue,
    bgColor: Colors.blueLight,
    borderColor: '#90CAF9',
  },
  {
    id: '4',
    emoji: '👥',
    label: 'Members',
    color: Colors.purple,
    bgColor: Colors.purpleLight,
    borderColor: '#CE93D8',
  },
];

const QuickActions: React.FC = () => {
  return (
    <View style={styles.container}>
      {actions.map((action) => (
        <TouchableOpacity
          key={action.id}
          style={[
            styles.item,
            {
              backgroundColor: action.bgColor,
              borderColor: action.borderColor,
            },
          ]}
          activeOpacity={0.7}
        >
          <View style={[styles.iconContainer, { backgroundColor: action.color + '20' }]}>
            <Text style={styles.emoji}>{action.emoji}</Text>
          </View>
          <Text style={[styles.label, { color: action.color }]}>{action.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: Spacing.base,
    marginBottom: Spacing.base,
    gap: Spacing.sm,
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.lg,
    borderWidth: 1,
    ...Shadows.card,
    gap: 6,
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emoji: {
    fontSize: 18,
  },
  label: {
    fontSize: 10,
    fontWeight: Typography.fontWeights.semiBold,
    textAlign: 'center',
    letterSpacing: 0.2,
  },
});

export default QuickActions;
