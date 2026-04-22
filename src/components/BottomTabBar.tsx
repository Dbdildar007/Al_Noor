// src/components/BottomTabBar.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { Colors, Typography, Spacing, BorderRadius, Shadows } from '../theme';

interface TabItem {
  id: string;
  icon: string;
  label: string;
  active?: boolean;
}

const tabs: TabItem[] = [
  { id: 'home', icon: '🏠', label: 'Home', active: true },
  { id: 'prayer', icon: '🕌', label: 'Prayer' },
  { id: 'quran', icon: '📖', label: 'Quran' },
  { id: 'events', icon: '📅', label: 'Events' },
  { id: 'profile', icon: '👤', label: 'Profile' },
];

interface BottomTabBarProps {
  activeTab?: string;
  onTabPress?: (id: string) => void;
}

const BottomTabBar: React.FC<BottomTabBarProps> = ({
  activeTab = 'home',
  onTabPress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <TouchableOpacity
              key={tab.id}
              style={[styles.tab, isActive && styles.tabActive]}
              onPress={() => onTabPress?.(tab.id)}
              activeOpacity={0.7}
            >
              {isActive && <View style={styles.activeIndicator} />}
              <Text style={[styles.tabIcon, isActive && styles.tabIconActive]}>
                {tab.icon}
              </Text>
              <Text style={[styles.tabLabel, isActive && styles.tabLabelActive]}>
                {tab.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: Colors.white,
    ...Shadows.card,
    borderTopWidth: 1,
    borderTopColor: Colors.borderLight,
    paddingBottom: Platform.OS === 'ios' ? 20 : 8,
  },
  tabBar: {
    flexDirection: 'row',
    paddingTop: 8,
    paddingHorizontal: Spacing.sm,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: Spacing.xs,
    position: 'relative',
  },
  tabActive: {},
  activeIndicator: {
    position: 'absolute',
    top: -8,
    width: 32,
    height: 3,
    backgroundColor: Colors.primary,
    borderRadius: 2,
  },
  tabIcon: {
    fontSize: 20,
    marginBottom: 2,
    opacity: 0.5,
  },
  tabIconActive: {
    opacity: 1,
  },
  tabLabel: {
    fontSize: 9,
    color: Colors.textMuted,
    fontWeight: Typography.fontWeights.medium,
  },
  tabLabelActive: {
    color: Colors.primary,
    fontWeight: Typography.fontWeights.bold,
  },
});

export default BottomTabBar;
