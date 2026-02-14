import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import { ClayView } from '../../components/ClayView';
import { colors } from '../../theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Animated, { FadeInDown } from 'react-native-reanimated';

const GEMS = [
  {
    id: '1',
    title: 'Summer Street Fair',
    location: 'Main St. Block 4 • Hosted by Downtown Assoc.',
    time: 'Starts in 20m',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800',
    type: 'EVENT',
    dist: '0.1 mi',
    avatars: [
      'https://i.pravatar.cc/150?u=1',
      'https://i.pravatar.cc/150?u=2',
      'https://i.pravatar.cc/150?u=3',
    ]
  },
  {
    id: '2',
    title: 'Paws & Play Walking',
    location: 'Available Now - Verified Neighbor',
    rating: '5.0 (42)',
    replyTime: 'Avg. reply: 5 mins',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800',
    type: 'SERVICE',
    dist: '0.4 mi'
  },
  {
    id: '3',
    title: 'The Daily Grind',
    location: 'Local Roastery • Study Friendly',
    status: 'Open Now',
    closes: 'Closes at 8 PM',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800',
    type: 'CAFE',
    dist: '0.5 mi'
  }
];

const DiscoveryAreaScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ClayView style={styles.searchBarContainer}>
          <Icon name="search" size={20} color={colors.primary} />
          <TextInput
            placeholder="Search your neighborhood..."
            style={styles.searchInput}
            placeholderTextColor={colors.clay.gray}
          />
        </ClayView>
        <ClayView style={styles.mapBtn}>
          <Icon name="map" size={24} color={colors.primary} />
        </ClayView>
      </View>

      <View style={styles.filterScrollWrapper}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterScroll} contentContainerStyle={styles.filterContent}>
          <TouchableOpacity style={[styles.filterPill, styles.activePill]}>
            <Icon name="grid-view" size={18} color="white" />
            <Text style={[styles.filterText, styles.activeFilterText]}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterPill}>
            <Icon name="event" size={18} color={colors.primary} />
            <Text style={styles.filterText}>Events</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterPill}>
            <Icon name="restaurant" size={18} color={colors.primary} />
            <Text style={styles.filterText}>Food</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Nearby Gems</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>VIEW ALL</Text>
          </TouchableOpacity>
        </View>

        {GEMS.map((gem, index) => (
          <Animated.View key={gem.id} entering={FadeInDown.delay(index * 100)}>
            <ClayView style={styles.gemCard}>
              <View style={styles.imageContainer}>
                <Image source={{ uri: gem.image }} style={styles.gemImage} />
                <View style={styles.typeBadge}>
                  <Text style={styles.typeText}>{gem.type}</Text>
                </View>
                <View style={styles.distBadge}>
                  <Icon name="near-me" size={10} color={colors.primary} />
                  <Text style={styles.distText}>{gem.dist}</Text>
                </View>
              </View>

              <View style={styles.gemInfo}>
                <View style={styles.titleRow}>
                  <Text style={styles.gemTitle}>{gem.title}</Text>
                  <ClayView style={styles.bookmarkBtn} inset>
                    <Icon name="bookmark-border" size={20} color={colors.primary} />
                  </ClayView>
                </View>
                <Text style={styles.gemLocation}>{gem.location}</Text>

                {gem.time && (
                  <View style={styles.metaRow}>
                    <View style={styles.timeBadge}>
                      <Icon name="schedule" size={14} color={colors.primary} />
                      <Text style={styles.timeText}>{gem.time}</Text>
                    </View>
                    <View style={styles.avatars}>
                      {gem.avatars?.map((a, i) => (
                        <Image key={i} source={{ uri: a }} style={[styles.avatar, { marginLeft: i === 0 ? 0 : -8 }]} />
                      ))}
                    </View>
                  </View>
                )}

                {gem.rating && (
                   <View style={styles.metaRow}>
                    <View style={styles.ratingBadge}>
                      <Icon name="star" size={14} color="#FFB800" />
                      <Text style={styles.ratingText}>{gem.rating}</Text>
                    </View>
                    <Text style={styles.replyText}>{gem.replyTime}</Text>
                  </View>
                )}

                {gem.status && (
                  <View style={styles.metaRow}>
                    <View style={styles.statusBadge}>
                      <Icon name="storefront" size={14} color="#10B981" />
                      <Text style={styles.statusText}>{gem.status}</Text>
                    </View>
                    <Text style={styles.closesText}>{gem.closes}</Text>
                  </View>
                )}
              </View>
            </ClayView>
          </Animated.View>
        ))}
        <View style={{ height: 120 }} />
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
    paddingHorizontal: 20,
    gap: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  searchBarContainer: {
    flex: 1,
    height: 50,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: 'white',
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
    color: colors.text.primary,
  },
  mapBtn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  filterScrollWrapper: {
    height: 60,
  },
  filterScroll: {
    flex: 1,
  },
  filterContent: {
    paddingHorizontal: 20,
    gap: 12,
    alignItems: 'center',
  },
  filterPill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'white',
    gap: 8,
    borderWidth: 1,
    borderColor: '#f1f5f9',
  },
  activePill: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  filterText: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.text.secondary,
  },
  activeFilterText: {
    color: 'white',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '900',
    color: colors.text.primary,
  },
  viewAll: {
    fontSize: 12,
    fontWeight: '800',
    color: colors.primary,
  },
  gemCard: {
    borderRadius: 30,
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 20,
  },
  imageContainer: {
    width: '100%',
    height: 200,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 15,
  },
  gemImage: {
    width: '100%',
    height: '100%',
  },
  typeBadge: {
    position: 'absolute',
    bottom: 15,
    left: 15,
    backgroundColor: colors.primary,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
  },
  typeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: '900',
  },
  distBadge: {
    position: 'absolute',
    top: 15,
    right: 15,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  distText: {
    fontSize: 10,
    fontWeight: '800',
    color: colors.text.primary,
  },
  gemInfo: {
    paddingHorizontal: 5,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  gemTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.text.primary,
  },
  bookmarkBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gemLocation: {
    fontSize: 12,
    color: colors.text.secondary,
    marginBottom: 12,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  timeBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(74, 124, 255, 0.1)',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
    gap: 6,
  },
  timeText: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.primary,
  },
  avatars: {
    flexDirection: 'row',
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'white',
  },
  ratingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFBEB',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
    gap: 6,
  },
  ratingText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#D97706',
  },
  replyText: {
    fontSize: 11,
    color: colors.text.secondary,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ECFDF5',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
    gap: 6,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#059669',
  },
  closesText: {
    fontSize: 11,
    color: colors.text.secondary,
  }
});

export default DiscoveryAreaScreen;
