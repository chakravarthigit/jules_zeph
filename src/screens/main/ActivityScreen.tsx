import React from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { colors, typography } from '../../theme';
import { ClayView } from '../../components/ClayView';
import { ProfileAvatar } from '../../components/ProfileAvatar';
import { IconPill } from '../../components/IconPill';
import { NotificationItem } from '../../components/NotificationItem';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CATEGORIES = [
  { id: 'all', label: 'All', emoji: '🎈' },
  { id: 'food', label: 'Food', emoji: '🍕' },
  { id: 'active', label: 'Active', emoji: '🏃' },
  { id: 'social', label: 'Social', emoji: '🥂' },
];

const ActivityScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>What's Near You</Text>
          <View style={styles.locationRow}>
             <Icon name="location-on" size={14} color={colors.primary} />
             <Text style={styles.locationText}>SoHo, New York</Text>
          </View>
        </View>
        <ProfileAvatar size={48} />
      </View>

      <View style={styles.toggleRow}>
        <ClayView style={styles.togglePill} inset>
          <TouchableOpacity style={styles.toggleItem}><Text style={styles.toggleText}>Map</Text></TouchableOpacity>
          <TouchableOpacity style={[styles.toggleItem, styles.activeToggle]}><Text style={styles.activeToggleText}>Cards</Text></TouchableOpacity>
          <TouchableOpacity style={styles.toggleItem}><Text style={styles.toggleText}>List</Text></TouchableOpacity>
        </ClayView>
      </View>

      <View style={styles.categoriesContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoryList}>
          {CATEGORIES.map(cat => (
            <IconPill key={cat.id} label={cat.label} icon={cat.emoji} active={cat.id === 'all'} />
          ))}
        </ScrollView>
      </View>

      <ScrollView contentContainerStyle={styles.feed} showsVerticalScrollIndicator={false}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Happening Right Now</Text>
          <Text style={styles.seeAll}>See All</Text>
        </View>

        <ClayView style={styles.urgentCard}>
           <View style={styles.cardContent}>
              <View style={styles.emojiContainer}>
                 <Text style={styles.largeEmoji}>🏐</Text>
              </View>
              <View style={styles.eventInfo}>
                 <Text style={styles.eventTitle}>Beach Volleyball 4v4</Text>
                 <View style={styles.eventMetaRow}>
                    <Icon name="near-me" size={12} color={colors.primary} />
                    <Text style={styles.eventMeta}>0.1 mi</Text>
                    <Icon name="timer" size={12} color={colors.accents.coral} style={{ marginLeft: 8 }} />
                    <Text style={[styles.eventMeta, { color: colors.accents.coral }]}>20m left</Text>
                 </View>
                 <View style={styles.attendees}>
                    <View style={styles.avatarStack}>
                       <View style={styles.miniAvatar} />
                       <View style={styles.miniAvatar} />
                       <View style={styles.miniAvatar} />
                    </View>
                    <Text style={styles.attendeeText}>+5 joining</Text>
                 </View>
              </View>
           </View>
        </ClayView>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Nearby</Text>
        </View>

        <NotificationItem
          title="Artisan Coffee Tasting"
          message="Starts in 1h • Join us for a unique experience."
          time="0.3 mi away"
          unread
        />
        <NotificationItem
          title="Rooftop Open Mic Night"
          message="Tonight 8 PM • Show your talent!"
          time="0.5 mi away"
        />
        <NotificationItem
          title="Board Game Marathon"
          message="Tomorrow • All day long."
          time="1.2 mi away"
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.light,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingTop: 60,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '900',
    color: colors.text.primary,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  locationText: {
    fontSize: 12,
    color: colors.primary,
    fontWeight: '700',
    marginLeft: 4,
  },
  toggleRow: {
    paddingHorizontal: 25,
    marginBottom: 20,
  },
  togglePill: {
    flexDirection: 'row',
    height: 50,
    borderRadius: 25,
    padding: 4,
  },
  toggleItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 21,
  },
  activeToggle: {
    backgroundColor: colors.primary,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  toggleText: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.text.secondary,
  },
  activeToggleText: {
    fontSize: 13,
    fontWeight: '800',
    color: 'white',
  },
  categoriesContainer: {
    marginBottom: 20,
  },
  categoryList: {
    paddingLeft: 25,
    paddingRight: 15,
  },
  feed: {
    paddingHorizontal: 25,
    paddingBottom: 120,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 16,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: colors.text.primary,
  },
  seeAll: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.primary,
  },
  urgentCard: {
    marginBottom: 24,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'rgba(255, 138, 128, 0.3)',
  },
  cardContent: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
  },
  emojiContainer: {
    width: 64,
    height: 64,
    borderRadius: 20,
    backgroundColor: '#f1f5f9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  largeEmoji: {
    fontSize: 32,
  },
  eventInfo: {
    marginLeft: 16,
    flex: 1,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text.primary,
    marginBottom: 4,
  },
  eventMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  eventMeta: {
    fontSize: 12,
    color: colors.text.secondary,
    fontWeight: 'bold',
    marginLeft: 4,
  },
  attendees: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarStack: {
    flexDirection: 'row',
    marginRight: 8,
  },
  miniAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#ddd',
    borderWidth: 2,
    borderColor: 'white',
    marginLeft: -8,
  },
  attendeeText: {
    fontSize: 10,
    fontWeight: '700',
    color: colors.text.secondary,
  },
});

export default ActivityScreen;
