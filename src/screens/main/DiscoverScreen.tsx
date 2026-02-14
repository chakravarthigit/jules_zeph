import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { colors } from '../../theme';
import { ClayView } from '../../components/ClayView';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Animated, { FadeInRight, FadeInDown } from 'react-native-reanimated';

const CATEGORIES = [
  { id: '1', label: 'All', icon: '🎈' },
  { id: '2', label: 'Food', icon: '🍕' },
  { id: '3', label: 'Active', icon: '🏃' },
  { id: '4', label: 'Social', icon: '🥂' },
  { id: '5', label: 'Art', icon: '🎨' },
];

const NEARBY_EVENTS = [
  {
    id: '1',
    title: 'Artisan Coffee Tasting',
    dist: '0.3 mi',
    time: 'Starts in 1h',
    cat: 'Food & Drink',
    icon: '☕',
    avatars: ['https://lh3.googleusercontent.com/aida-public/AB6AXuA44pkbHu0TuAF3hLDP2LbJ9RcVBVuOGoAWeu3hH_hcHrGYlSwVb4bjGzU8pX83ZGOpdRbSdkw2nG0oIAguFGSo2HOdgZtWs3i0I4whaa32Wb5VkeiZ7-CUTISUesKYkm-qwHLcJRy5L5A3ramyZrIveL8Ln1vHhi9H_qeSZIBzRSuJvoFygRKpZd0hXg6j4u_81Ou-CCOqOjtjFpm85kFubkRHjXCRINY919jj7vl_Uxi6Ad38ryHhq_NIMYQsIfR9jRGFhkDuyFg', 'https://lh3.googleusercontent.com/aida-public/AB6AXuCROt7lyO-htu1eSYaQSamATQ2omFhzWLNV46kdMmJBo3_C2Q4oSXAMXYOQfYzUIZQmn-D4F0xLE3kUzgE3X227kBb3_pAaATWrpoZ72eFxK1Upx9-wIaIdokzmsNnbFl7yDoLIZcpOeZCKGjX86BwkOk_NHUxHIunIyAUYxlIWSVFb4GuYj-juLnF4VmF8cVEI3gbNSe5NFLfISzgbcb46gh2axgESalk2yHaoxCQ8ZXT3-DGa6t0qqcLgnjBAGhFx1g6LYp0SvFM']
  },
  {
    id: '2',
    title: 'Rooftop Open Mic Night',
    dist: '0.5 mi',
    time: 'Tonight 8 PM',
    icon: '🎸',
    progress: 0.75,
    spots: '15 Spots Filled',
    left: '5 Left'
  },
  {
    id: '3',
    title: 'Board Game Marathon',
    dist: '1.2 mi',
    time: 'Tomorrow',
    icon: '🧩',
    isInterested: true
  }
];

const DiscoverScreen = () => {
  const [activeView, setActiveView] = useState('Cards');
  const [activeCat, setActiveCat] = useState('All');

  return (
    <View style={styles.container}>
      <View style={styles.statusBarSpacer} />

      <View style={styles.header}>
        <View>
          <Text style={styles.title}>What's Near You</Text>
          <View style={styles.locationRow}>
            <Icon name="location-on" size={14} color={colors.primary} />
            <Text style={styles.locationText}>SoHo, New York</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.profileBtn}>
          <ClayView style={styles.profileBtnInner}>
            <Image
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAODJzF63HA_xbx15DyGnLNPB8HKrJeZeIXmUVu3cC6Di3vzQVNK1hwbc8HSJ5_N5pGMoxE3Wsz_g7D6PWfWKnp5ynpJz3xGDPRMaEV8qQMXTy-QfzBX2Ge8l2jC5H9AdkjSOOufIaf9EwdvKhh9sPcugznrFzPuku3ncD2SB8W2dtzfQd09N_Ga3u0bdSGdiASGDWB1Q0VmuimrSGoyXM6nHMWon0WTtUrM5w_jFakU0Ye4-Z5duGLYMxDzQ1uaZ8ff_YXmBx1HgM' }}
              style={styles.avatar}
            />
          </ClayView>
        </TouchableOpacity>
      </View>

      <View style={styles.viewToggleWrapper}>
        <ClayView inset style={styles.togglePill}>
          {['Map', 'Cards', 'List'].map(view => (
            <TouchableOpacity
              key={view}
              onPress={() => setActiveView(view)}
              style={[styles.toggleBtn, activeView === view && styles.activeToggle]}
            >
              <Text style={[styles.toggleText, activeView === view && styles.activeToggleText]}>{view}</Text>
            </TouchableOpacity>
          ))}
        </ClayView>
      </View>

      <View style={styles.categoriesWrapper}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoriesScroll}>
          {CATEGORIES.map((cat, index) => {
            const isActive = activeCat === cat.label;
            return (
              <Animated.View key={cat.id} entering={FadeInRight.delay(index * 100)}>
                <TouchableOpacity
                  onPress={() => setActiveCat(cat.label)}
                  style={[styles.catChip, isActive && styles.activeCatChip]}
                >
                  <Text style={styles.catIcon}>{cat.icon}</Text>
                  <Text style={[styles.catLabel, isActive && styles.activeCatLabel]}>{cat.label}</Text>
                </TouchableOpacity>
              </Animated.View>
            );
          })}
        </ScrollView>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.sectionHeader}>
          <View style={styles.sectionTitleRow}>
            <View style={styles.liveDot} />
            <Text style={styles.sectionTitle}>Happening Right Now</Text>
          </View>
          <TouchableOpacity><Text style={styles.seeAllText}>See All</Text></TouchableOpacity>
        </View>

        <Animated.View entering={FadeInDown.delay(200)}>
          <ClayView style={styles.urgentCard}>
            <View style={styles.endingBadge}>
               <Text style={styles.endingText}>ENDING SOON</Text>
            </View>
            <View style={styles.cardMain}>
              <ClayView inset style={styles.urgentIconBox}>
                <Text style={{ fontSize: 32 }}>🏐</Text>
              </ClayView>
              <View style={styles.urgentInfo}>
                <Text style={styles.urgentTitle}>Beach Volleyball 4v4</Text>
                <View style={styles.urgentMeta}>
                   <View style={styles.metaItem}>
                     <Icon name="near-me" size={12} color={colors.primary} />
                     <Text style={styles.metaText}>0.1 mi</Text>
                   </View>
                   <View style={styles.metaItem}>
                     <Icon name="timer" size={12} color={colors.accents.coralPunch} />
                     <Text style={[styles.metaText, { color: colors.accents.coralPunch, fontWeight: '700' }]}>20m left</Text>
                   </View>
                </View>
                <View style={styles.urgentFooter}>
                  <View style={styles.avatarPile}>
                     {[1,2,3].map(i => (
                       <Image
                         key={i}
                         source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPSz7HaMt3yCMRI_XaUv1sJRSHCxc3FykF7miSyLMlJkDGfb4pi6w_PUzGbnvX1k0dsnJTaDfcPLXoufyYRgFI9QRXcqaPlsI_-_MNebgpllpqALkQXgfxO9lHIoA1rK2UyKBpPWVjS8GVITkpTq-pCavg_UN5zdjtNHy8fvN3MPaLJzdFMNctxSE5sMgzz6HzH6SImt7X11OngBNTSMcStnpePGdbeaRJVdbnMvTkrOfOYCb3uajobyspLsCOtUQj90--gX7_MMo' }}
                         style={[styles.pileAvatar, { marginLeft: i === 1 ? 0 : -8 }]}
                       />
                     ))}
                     <View style={styles.pileCount}><Text style={styles.pileCountText}>+5</Text></View>
                  </View>
                  <TouchableOpacity style={styles.arrowBtn}>
                     <Icon name="chevron-right" size={20} color={colors.primary} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ClayView>
        </Animated.View>

        <Text style={[styles.sectionTitle, { marginTop: 30, marginBottom: 20 }]}>Nearby</Text>

        <View style={styles.nearbyList}>
          {NEARBY_EVENTS.map((event, index) => (
            <Animated.View key={event.id} entering={FadeInDown.delay(300 + index * 100)}>
              <ClayView style={styles.nearbyCard}>
                <ClayView inset style={styles.nearbyIconBox}>
                  <Text style={{ fontSize: 28 }}>{event.icon}</Text>
                </ClayView>
                <View style={styles.nearbyInfo}>
                  <Text style={styles.nearbyTitle}>{event.title}</Text>
                  <View style={styles.urgentMeta}>
                    <View style={styles.metaItem}>
                      <Icon name="near-me" size={12} color={colors.primary} />
                      <Text style={styles.metaText}>{event.dist}</Text>
                    </View>
                    <View style={styles.metaItem}>
                      <Icon name={event.time.includes('Tomorrow') ? "event" : "schedule"} size={12} color="#94a3b8" />
                      <Text style={styles.metaText}>{event.time}</Text>
                    </View>
                  </View>

                  {event.progress !== undefined && (
                    <View style={styles.progressSection}>
                      <View style={styles.progressBar}>
                        <View style={[styles.progressFill, { width: `${event.progress * 100}%` }]} />
                      </View>
                      <View style={styles.spotsRow}>
                        <Text style={styles.spotsText}>{event.spots}</Text>
                        <Text style={[styles.spotsText, { color: colors.primary }]}>{event.left}</Text>
                      </View>
                    </View>
                  )}

                  {event.cat && (
                    <View style={styles.catFooter}>
                      <View style={styles.catBadge}>
                        <Text style={styles.catBadgeText}>{event.cat}</Text>
                      </View>
                      <View style={styles.avatarPile}>
                         {event.avatars?.map((a, i) => (
                           <Image key={i} source={{ uri: a }} style={[styles.pileAvatar, { width: 24, height: 24, borderRadius: 12, marginLeft: i === 0 ? 0 : -6 }]} />
                         ))}
                      </View>
                    </View>
                  )}

                  {event.isInterested && (
                    <TouchableOpacity style={styles.interestBtn}>
                      <Text style={styles.interestBtnText}>Interested?</Text>
                    </TouchableOpacity>
                  )}
                </View>
              </ClayView>
            </Animated.View>
          ))}
        </View>

        <View style={{ height: 120 }} />
      </ScrollView>

      <TouchableOpacity style={styles.fab}>
        <Icon name="add" size={32} color="white" />
      </TouchableOpacity>
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
    fontSize: 26,
    fontWeight: '900',
    color: colors.text.primary,
    letterSpacing: -0.5,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 4,
  },
  locationText: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.primary,
  },
  profileBtn: {
    width: 48,
    height: 48,
  },
  profileBtnInner: {
    width: 48,
    height: 48,
    borderRadius: 24,
    padding: 3,
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 22,
  },
  viewToggleWrapper: {
    paddingHorizontal: 25,
    marginTop: 20,
  },
  togglePill: {
    height: 52,
    flexDirection: 'row',
    borderRadius: 26,
    padding: 5,
  },
  toggleBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 22,
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
    fontSize: 14,
    fontWeight: '600',
    color: colors.text.secondary,
  },
  activeToggleText: {
    color: 'white',
    fontWeight: '800',
  },
  categoriesWrapper: {
    marginTop: 25,
  },
  categoriesScroll: {
    paddingLeft: 25,
    paddingRight: 25,
    gap: 12,
    paddingBottom: 5,
  },
  catChip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 30,
    backgroundColor: 'white',
    gap: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  activeCatChip: {
    backgroundColor: colors.primary,
    shadowColor: colors.primary,
    shadowOpacity: 0.2,
    elevation: 4,
  },
  catIcon: {
    fontSize: 18,
  },
  catLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.text.slate,
  },
  activeCatLabel: {
    color: 'white',
  },
  scrollContent: {
    paddingHorizontal: 25,
    paddingTop: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  sectionTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  liveDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.accents.coralPunch,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '900',
    color: colors.text.primary,
  },
  seeAllText: {
    fontSize: 12,
    fontWeight: '800',
    color: colors.primary,
  },
  urgentCard: {
    borderRadius: 32,
    padding: 20,
    borderWidth: 2,
    borderColor: 'rgba(255, 138, 128, 0.3)',
    position: 'relative',
    overflow: 'hidden',
  },
  endingBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'rgba(255, 138, 128, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderBottomLeftRadius: 16,
  },
  endingText: {
    fontSize: 10,
    fontWeight: '900',
    color: colors.accents.coralPunch,
  },
  cardMain: {
    flexDirection: 'row',
    gap: 15,
  },
  urgentIconBox: {
    width: 64,
    height: 64,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  urgentInfo: {
    flex: 1,
  },
  urgentTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.text.primary,
    marginBottom: 6,
  },
  urgentMeta: {
    flexDirection: 'row',
    gap: 15,
    marginBottom: 12,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaText: {
    fontSize: 11,
    fontWeight: '600',
    color: colors.text.secondary,
  },
  urgentFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatarPile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pileAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: 'white',
  },
  pileCount: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.primary,
    borderWidth: 2,
    borderColor: 'white',
    marginLeft: -8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pileCountText: {
    fontSize: 10,
    fontWeight: '800',
    color: 'white',
  },
  arrowBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(74, 124, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nearbyList: {
    gap: 20,
  },
  nearbyCard: {
    flexDirection: 'row',
    padding: 20,
    borderRadius: 28,
    gap: 15,
  },
  nearbyIconBox: {
    width: 64,
    height: 64,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nearbyInfo: {
    flex: 1,
  },
  nearbyTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.text.primary,
    marginBottom: 6,
  },
  progressSection: {
    marginTop: 5,
  },
  progressBar: {
    height: 6,
    backgroundColor: '#f1f5f9',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: 3,
  },
  spotsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 6,
  },
  spotsText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#94a3b8',
  },
  catFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  catBadge: {
    backgroundColor: 'rgba(74, 124, 255, 0.1)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  catBadgeText: {
    fontSize: 10,
    fontWeight: '700',
    color: colors.primary,
  },
  interestBtn: {
    marginTop: 10,
    height: 36,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(74, 124, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  interestBtnText: {
    fontSize: 12,
    fontWeight: '800',
    color: colors.primary,
  },
  fab: {
    position: 'absolute',
    bottom: 110,
    right: 25,
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
});

export default DiscoverScreen;
