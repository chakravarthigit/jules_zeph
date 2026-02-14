import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { colors, typography } from '../../theme';
import { ClayView } from '../../components/ClayView';
import { ProfileAvatar } from '../../components/ProfileAvatar';
import { StatCard } from '../../components/StatCard';
import { EventCard } from '../../components/EventCard';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ProfileScreen = ({ navigation }: any) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerBtn} onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color={colors.text.secondary} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerBtn} onPress={() => navigation.navigate('Settings')}>
          <Icon name="settings" size={24} color={colors.text.secondary} />
        </TouchableOpacity>
      </View>

      <View style={styles.profileInfo}>
        <ProfileAvatar size={120} showPulse />
        <Text style={styles.name}>Sarah Jenkins</Text>
        <Text style={styles.username}>@sarah_j</Text>
        <Text style={styles.bio}>
          Community gardener 🌻 & local coffee enthusiast. Organizing cleanups in the downtown district.
        </Text>
      </View>

      <View style={styles.statsContainer}>
        <StatCard label="Hosted" value="12" />
        <StatCard label="Joined" value="45" color={colors.primary} />
        <StatCard label="Helped" value="88" />
      </View>

      <View style={styles.reputationSection}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Reputation</Text>
          <Text style={styles.seeAll}>View All</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.badgeList}>
          <ClayView style={styles.badgeCard}>
            <Icon name="local-fire-department" size={24} color={colors.primary} style={styles.badgeIcon} />
            <View>
              <Text style={styles.badgeTitle}>Super Host</Text>
              <Text style={styles.badgeLevel}>Lvl 3</Text>
            </View>
          </ClayView>
          <ClayView style={styles.badgeCard}>
            <Icon name="volunteer-activism" size={24} color={colors.accents.teal} style={styles.badgeIcon} />
            <View>
              <Text style={styles.badgeTitle}>Helper</Text>
              <Text style={styles.badgeLevel}>Top 10%</Text>
            </View>
          </ClayView>
        </ScrollView>
      </View>

      <View style={styles.tabsSection}>
        <ClayView style={styles.tabPill}>
          <TouchableOpacity style={[styles.tabItem, styles.activeTab]}><Text style={styles.activeTabText}>Posted</Text></TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}><Text style={styles.tabText}>Joined</Text></TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}><Text style={styles.tabText}>Saved</Text></TouchableOpacity>
        </ClayView>

        <View style={styles.postsGrid}>
           {/* Mock Post Grid */}
           <View style={styles.gridItem}>
             <ClayView style={styles.postPlaceholder} />
           </View>
           <View style={styles.gridItem}>
             <ClayView style={styles.postPlaceholder} />
           </View>
        </View>
      </View>
    </ScrollView>
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
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  headerBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  headerIcon: {
    fontSize: 20,
    color: colors.text.primary,
  },
  profileInfo: {
    alignItems: 'center',
    paddingHorizontal: 40,
    marginTop: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.text.primary,
    marginTop: 16,
  },
  username: {
    fontSize: 16,
    color: colors.primary,
    fontWeight: '600',
    marginBottom: 16,
  },
  bio: {
    fontSize: 14,
    color: colors.text.secondary,
    textAlign: 'center',
    lineHeight: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 30,
    marginBottom: 40,
  },
  reputationSection: {
    marginBottom: 40,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text.primary,
  },
  seeAll: {
    fontSize: 12,
    color: colors.primary,
    fontWeight: 'bold',
  },
  badgeList: {
    paddingLeft: 25,
    paddingRight: 10,
  },
  badgeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 20,
    marginRight: 12,
    width: 160,
  },
  badgeIcon: {
    marginRight: 10,
  },
  badgeTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.text.primary,
  },
  badgeLevel: {
    fontSize: 10,
    color: colors.text.secondary,
  },
  tabsSection: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  tabPill: {
    flexDirection: 'row',
    height: 50,
    borderRadius: 25,
    padding: 4,
    marginBottom: 20,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 21,
  },
  activeTab: {
    backgroundColor: colors.primary,
  },
  tabText: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.text.secondary,
  },
  activeTabText: {
    fontSize: 13,
    fontWeight: '800',
    color: 'white',
  },
  postsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
  },
  gridItem: {
    width: '47%',
    aspectRatio: 1,
  },
  postPlaceholder: {
    flex: 1,
    borderRadius: 20,
    backgroundColor: 'white',
  },
});

export default ProfileScreen;
