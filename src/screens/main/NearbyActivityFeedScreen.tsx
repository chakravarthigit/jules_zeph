import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { ClayView } from '../../components/ClayView';
import { colors } from '../../theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Animated, { FadeInDown } from 'react-native-reanimated';

const ACTIVITIES = [
  {
    id: '1',
    user: 'Sarah Miller',
    action: 'posted a new event',
    target: 'Summer Garden Party',
    time: '2m ago',
    avatar: 'https://i.pravatar.cc/150?u=sarah',
    icon: 'event',
    iconColor: colors.primary
  },
  {
    id: '2',
    user: 'James Wilson',
    action: 'joined the group',
    target: 'Local Runners',
    time: '15m ago',
    avatar: 'https://i.pravatar.cc/150?u=james',
    icon: 'group',
    iconColor: '#10B981'
  },
  {
    id: '3',
    user: 'Neighborhood Watch',
    action: 'shared an update',
    target: 'Safety First',
    time: '1h ago',
    avatar: 'https://i.pravatar.cc/150?u=watch',
    icon: 'security',
    iconColor: colors.accents.coralPunch
  },
  {
    id: '4',
    user: 'Emma Davis',
    action: 'added a photo to',
    target: 'Central Park Meetup',
    time: '3h ago',
    avatar: 'https://i.pravatar.cc/150?u=emma',
    icon: 'photo',
    iconColor: '#8B5CF6'
  }
];

const NearbyActivityFeedScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Activity</Text>
        <TouchableOpacity style={styles.filterBtn}>
          <Icon name="filter-list" size={24} color={colors.primary} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {ACTIVITIES.map((activity, index) => (
          <Animated.View key={activity.id} entering={FadeInDown.delay(index * 100)}>
            <ClayView style={styles.activityCard}>
              <View style={styles.cardHeader}>
                <Image source={{ uri: activity.avatar }} style={styles.avatar} />
                <View style={styles.userInfo}>
                  <Text style={styles.userName}>{activity.user}</Text>
                  <Text style={styles.timeText}>{activity.time}</Text>
                </View>
                <View style={[styles.iconBox, { backgroundColor: activity.iconColor + '20' }]}>
                  <Icon name={activity.icon} size={20} color={activity.iconColor} />
                </View>
              </View>

              <View style={styles.actionRow}>
                <Text style={styles.actionText}>
                  {activity.action} <Text style={styles.targetText}>{activity.target}</Text>
                </Text>
              </View>

              <View style={styles.footer}>
                <TouchableOpacity style={styles.footerBtn}>
                  <Icon name="favorite-border" size={18} color={colors.text.secondary} />
                  <Text style={styles.footerBtnText}>Like</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerBtn}>
                  <Icon name="chat-bubble-outline" size={18} color={colors.text.secondary} />
                  <Text style={styles.footerBtnText}>Comment</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerBtn}>
                  <Icon name="share" size={18} color={colors.text.secondary} />
                  <Text style={styles.footerBtnText}>Share</Text>
                </TouchableOpacity>
              </View>
            </ClayView>
          </Animated.View>
        ))}
        <View style={{ height: 100 }} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.light,
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '900',
    color: colors.text.primary,
  },
  filterBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContent: {
    paddingHorizontal: 20,
    gap: 20,
  },
  activityCard: {
    padding: 20,
    borderRadius: 30,
    backgroundColor: 'white',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: '800',
    color: colors.text.primary,
  },
  timeText: {
    fontSize: 12,
    color: colors.text.secondary,
    marginTop: 2,
  },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionRow: {
    marginBottom: 20,
  },
  actionText: {
    fontSize: 16,
    color: colors.text.primary,
    lineHeight: 24,
  },
  targetText: {
    fontWeight: '800',
    color: colors.primary,
  },
  footer: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#f1f5f9',
    paddingTop: 15,
    justifyContent: 'space-between',
  },
  footerBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  footerBtnText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text.secondary,
  }
});

export default NearbyActivityFeedScreen;
