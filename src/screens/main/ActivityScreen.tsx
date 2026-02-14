import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { colors } from '../../theme';
import { ClayView } from '../../components/ClayView';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Animated, { FadeInDown, FadeIn } from 'react-native-reanimated';

const ActivityScreen = () => {
  const [activeTab, setActiveTab] = useState('Nearby');

  return (
    <View style={styles.container}>
      <View style={styles.statusBarSpacer} />

      <View style={styles.header}>
        <Text style={styles.title}>Activity</Text>
        <TouchableOpacity style={styles.settingsBtn}>
          <ClayView style={styles.settingsBtnInner}>
            <Icon name="settings" size={24} color={colors.text.secondary} />
          </ClayView>
        </TouchableOpacity>
      </View>

      <View style={styles.tabBarWrapper}>
        <ClayView style={styles.tabBarPill}>
          {['Nearby', 'My Events', 'Mentions'].map(tab => (
            <TouchableOpacity
              key={tab}
              onPress={() => setActiveTab(tab)}
              style={[styles.tab, activeTab === tab && styles.activeTab]}
            >
              <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
            </TouchableOpacity>
          ))}
        </ClayView>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.dateHeader}>
          <Text style={styles.dateLabel}>NEW • TODAY</Text>
          <View style={styles.dividerLine} />
        </View>

        <Animated.View entering={FadeInDown.delay(100)}>
          <ClayView style={styles.notificationCard}>
            <View style={styles.cardIndicator} />
            <View style={styles.newDot} />
            <View style={[styles.iconContainer, { backgroundColor: 'rgba(74, 124, 255, 0.1)' }]}>
              <Icon name="location-on" size={28} color={colors.primary} />
            </View>
            <View style={styles.cardContent}>
              <View style={styles.cardTop}>
                <Text style={styles.cardTitle}>New pop-up market detected</Text>
                <Text style={styles.cardTime}>2m</Text>
              </View>
              <Text style={styles.cardDesc}>
                Spotted <Text style={styles.highlightText}>0.2mi</Text> away at the Plaza. Fresh produce and local crafts!
              </Text>
            </View>
          </ClayView>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(200)}>
          <ClayView style={styles.notificationCard}>
            <View style={styles.avatarWrapper}>
              <Image
                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1HK78YuTWeofdEQYQO5GGyE5-v1ZsLp6QEAV3ToE6jDc3AhwGfpxK0grffG-smp6TXmMdkFNrktojJlYKKq0UHyrmJoyieLgKrQpsQ_CUsxbv49aRl9hfdIqxDNUeKyLF9VwVdU8XXifSWvEjm8-1l-t7HtBBPO6RFmA6Y8rS3tut66ye7O5fuxT01afvKnElq-s9wsFVdJXBll7FVn0Q9s4adW8vGaPN5XrbtbAw1VqUQpZeUcmkQXDqbNZ2_rgB36gWzXaDLTQ' }}
                style={styles.avatar}
              />
              <View style={[styles.badge, { backgroundColor: '#22c55e' }]}>
                <Icon name="add" size={10} color="white" />
              </View>
            </View>
            <View style={styles.cardContent}>
              <View style={styles.cardTop}>
                <Text style={styles.cardTitle}>Ahmed joined</Text>
                <Text style={styles.cardTime}>14m</Text>
              </View>
              <Text style={styles.cardDesc}>
                He just RSVP'd to <Text style={styles.boldText}>"Sunset Yoga"</Text>
              </Text>
            </View>
          </ClayView>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(300)}>
          <ClayView style={styles.notificationCard}>
            <View style={styles.newDot} />
            <View style={[styles.iconContainer, { backgroundColor: 'rgba(167, 139, 250, 0.15)' }]}>
              <Icon name="forum" size={28} color="#a78bfa" />
            </View>
            <View style={styles.cardContent}>
              <View style={styles.cardTop}>
                <Text style={styles.cardTitle}>Downtown Runners</Text>
                <Text style={styles.cardTime}>1h</Text>
              </View>
              <View style={styles.typingRow}>
                <View style={styles.typingDots}>
                   <View style={styles.typingDot} />
                   <View style={styles.typingDot} />
                   <View style={styles.typingDot} />
                </View>
                <Text style={styles.cardDesc}>3 new messages from the group</Text>
              </View>
            </View>
          </ClayView>
        </Animated.View>

        <View style={[styles.dateHeader, { marginTop: 30 }]}>
          <Text style={styles.dateLabel}>YESTERDAY</Text>
          <View style={styles.dividerLine} />
        </View>

        <Animated.View entering={FadeInDown.delay(400)}>
          <ClayView style={[styles.notificationCard, { opacity: 0.9 }]}>
            <View style={styles.avatarWrapper}>
              <Image
                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAe_g9lGseEM3R3N-keeQZjARVQCe6B8VgW9j1l7_59cN55Jb_wBBQNpxwHPHVm1K36bbIbUo3kuxZ0kMKT5kb5HZdXfWXC7VEIA7BbYSCNsxZiBr2VDViBONBrbqdWFqXqMjHLApSDKSpQCtrctGlgW6OIE4l02HghZkLxUP9_fMy0l2zchBD8cAQtyD_oEvUzlqpt-NWWjgF5DtyksW8k_fVJtT3iWV-Wf4lDioa0f1UFnnn7ZcMYfgCgmJJJ-zPlGDDuegLvLyk' }}
                style={styles.avatar}
              />
              <View style={[styles.badge, { backgroundColor: '#a78bfa' }]}>
                <Text style={styles.badgeText}>@</Text>
              </View>
            </View>
            <View style={styles.cardContent}>
              <View style={styles.cardTop}>
                <Text style={styles.cardTitle}>Sarah mentioned you</Text>
                <Text style={styles.cardTime}>1d</Text>
              </View>
              <Text style={styles.cardDesc}>
                in <Text style={styles.boldText}>"Community Garden"</Text> comments
              </Text>
            </View>
          </ClayView>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(500)}>
          <ClayView style={[styles.notificationCard, { opacity: 0.8 }]}>
            <View style={[styles.iconContainer, { backgroundColor: '#f1f5f9' }]}>
              <Icon name="cloud-off" size={28} color="#94a3b8" />
            </View>
            <View style={styles.cardContent}>
              <View style={styles.cardTop}>
                <Text style={styles.cardTitle}>Storm warning issued</Text>
                <Text style={styles.cardTime}>1d</Text>
              </View>
              <Text style={styles.cardDesc}>
                Heavy rain expected in your area tomorrow. Outdoor events may be rescheduled.
              </Text>
            </View>
          </ClayView>
        </Animated.View>

        <View style={{ height: 120 }} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.light,
  },
  statusBarSpacer: {
    height: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingBottom: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: colors.text.primary,
    letterSpacing: -0.5,
  },
  settingsBtn: {
    width: 44,
    height: 44,
  },
  settingsBtnInner: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarWrapper: {
    paddingHorizontal: 25,
    paddingVertical: 20,
    backgroundColor: colors.background.light,
    zIndex: 10,
  },
  tabBarPill: {
    height: 56,
    flexDirection: 'row',
    borderRadius: 28,
    padding: 6,
    backgroundColor: 'rgba(241, 245, 249, 0.8)',
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 22,
  },
  activeTab: {
    backgroundColor: colors.primary,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text.secondary,
  },
  activeTabText: {
    color: 'white',
    fontWeight: '800',
  },
  scrollContent: {
    paddingHorizontal: 25,
  },
  dateHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    marginVertical: 15,
  },
  dateLabel: {
    fontSize: 10,
    fontWeight: '800',
    color: '#94a3b8',
    letterSpacing: 1,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#e2e8f0',
    borderRadius: 1,
  },
  notificationCard: {
    flexDirection: 'row',
    padding: 16,
    borderRadius: 24,
    marginBottom: 15,
    alignItems: 'center',
    gap: 15,
    position: 'relative',
    overflow: 'hidden',
  },
  cardIndicator: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 6,
    backgroundColor: colors.primary,
  },
  newDot: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.accents.sunYellow,
    zIndex: 1,
  },
  iconContainer: {
    width: 54,
    height: 54,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarWrapper: {
    position: 'relative',
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 27,
    borderWidth: 2,
    borderColor: 'white',
  },
  badge: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: '800',
  },
  cardContent: {
    flex: 1,
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: colors.text.primary,
  },
  cardTime: {
    fontSize: 10,
    fontWeight: '800',
    color: '#94a3b8',
  },
  cardDesc: {
    fontSize: 13,
    color: colors.text.secondary,
    lineHeight: 18,
  },
  highlightText: {
    color: colors.primary,
    fontWeight: '800',
  },
  boldText: {
    fontWeight: '700',
    color: colors.text.slate,
  },
  typingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 4,
  },
  typingDots: {
    flexDirection: 'row',
    gap: 2,
  },
  typingDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#a78bfa',
  },
});

export default ActivityScreen;
