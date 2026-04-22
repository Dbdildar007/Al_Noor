// src/screens/HomeScreen.tsx
import React, { useState } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  StatusBar,
  RefreshControl,
  Text,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Colors, Spacing, BorderRadius } from '../theme';
import HeroHeader from '../components/HeroHeader';
import PrayerTimesCard from '../components/PrayerTimesCard';
import QuickActions from '../components/QuickActions';
import SectionHeader from '../components/SectionHeader';
import CampaignCard from '../components/CampaignCard';
import EventCard from '../components/EventCard';
import BottomTabBar from '../components/BottomTabBar';
import RunningCampaignBanner from '../components/RunningCampaignBanner';
import { campaigns, events } from '../data';

const HomeScreen: React.FC = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1500);
  };

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.primaryDark} />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={Colors.primary}
            colors={[Colors.primary]}
          />
        }
      >
        {/* Hero Header */}
        <HeroHeader />

        {/* Prayer Times */}
        <PrayerTimesCard />

        {/* Quick Actions */}
        <QuickActions />

        {/* Running Campaigns Section */}
        <SectionHeader
          title="Running Campaigns"
          actionLabel="All Campaigns"
        />
        <View style={styles.campaignsContainer}>
          {campaigns.map((campaign) => (
            <CampaignCard
              key={campaign.id}
              tag={campaign.tag}
              tagColor={campaign.tagColor}
              title={campaign.title}
              description={campaign.description}
              raised={campaign.raised}
              goal={campaign.goal}
              progress={campaign.progress}
              category={campaign.category}
            />
          ))}
        </View>

        {/* Running Campaign Banner */}
        <RunningCampaignBanner />

        {/* Upcoming Events */}
        <SectionHeader
          title="Upcoming Community Events"
          actionLabel="View All Events"
        />
        <View style={styles.eventsContainer}>
          {events.map((event) => (
            <EventCard
              key={event.id}
              category={event.category}
              categoryColor={event.categoryColor}
              categoryBg={event.categoryBg}
              title={event.title}
              description={event.description}
              date={event.date}
              action={event.action}
              image={event.image}
            />
          ))}
        </View>

        {/* Bottom padding for tab bar */}
        <View style={styles.bottomPad} />
      </ScrollView>

      {/* Bottom Tab Bar */}
      <BottomTabBar activeTab={activeTab} onTabPress={setActiveTab} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    paddingTop: 0,
  },
  campaignsContainer: {
    paddingHorizontal: Spacing.base,
    marginBottom: Spacing.base,
  },
  eventsContainer: {
    paddingHorizontal: Spacing.base,
    marginBottom: Spacing.base,
  },
  bottomPad: {
    height: 90,
  },
});

export default HomeScreen;
