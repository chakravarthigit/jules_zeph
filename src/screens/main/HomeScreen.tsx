import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { colors, typography } from '../../theme';
import { ClayView } from '../../components/ClayView';
import { ProfileAvatar } from '../../components/ProfileAvatar';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width, height } = Dimensions.get('window');

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Mock Map Background */}
      <View style={styles.mapContainer}>
        <View style={styles.placeholderMap} />
        {/* Mock Pins */}
        <View style={[styles.pin, { top: '30%', left: '20%', backgroundColor: colors.accents.coral }]} />
        <View style={[styles.pin, { top: '45%', right: '25%', backgroundColor: colors.accents.teal }]} />
        <View style={[styles.pin, { top: '25%', right: '10%', backgroundColor: colors.primary }]} />

        {/* User Location Pulse */}
        <View style={[styles.userLocation, { top: '50%', left: '50%' }]}>
           <View style={styles.userDot} />
        </View>
      </View>

      {/* Floating Header */}
      <View style={styles.header}>
        <ClayView style={styles.headerContent}>
          <View style={styles.logoBadge}>
            <View style={styles.logoCircle}><Text style={styles.logoLetter}>Z</Text></View>
            <Text style={styles.logoText}>ZEPH</Text>
          </View>
          <View style={styles.locationSelector}>
            <Text style={styles.locationLabel}>CURRENT LOCATION</Text>
            <View style={styles.locationRow}>
               <Text style={styles.locationName}>Near Vizag</Text>
               <Icon name="expand-more" size={16} color={colors.primary} />
            </View>
          </View>
          <TouchableOpacity style={styles.filterBtn}>
             <Icon name="tune" size={20} color={colors.text.secondary} />
          </TouchableOpacity>
        </ClayView>
      </View>

      {/* Bottom Horizontal Card Stack */}
      <View style={styles.bottomContent}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.cardList}
          snapToInterval={width * 0.85}
          decelerationRate="fast"
        >
          <ClayView style={styles.eventCard}>
            <View style={styles.cardHeader}>
              <View style={[styles.tag, { backgroundColor: colors.accents.coral }]}>
                <Icon name="music-note" size={12} color="white" />
                <Text style={styles.tagText}>Music</Text>
              </View>
              <View style={styles.distanceTag}>
                <Icon name="directions-walk" size={12} color={colors.text.secondary} />
                <Text style={styles.distanceText}>4 min</Text>
              </View>
            </View>
            <View style={styles.cardBody}>
              <Text style={styles.eventTitle}>Beachside Jam Session</Text>
              <Text style={styles.eventDesc} numberOfLines={2}>
                Bring your instruments or just vibe. Casual sunset session near the rocks.
              </Text>
            </View>
            <View style={styles.cardFooter}>
               <View style={styles.hostInfo}>
                  <ProfileAvatar size={32} />
                  <View style={styles.hostText}>
                    <Text style={styles.hostLabel}>HOSTED BY</Text>
                    <Text style={styles.hostName}>Priya M.</Text>
                  </View>
               </View>
               <TouchableOpacity style={styles.goBtn}>
                  <Icon name="arrow-forward" size={20} color="white" />
               </TouchableOpacity>
            </View>
          </ClayView>

          <ClayView style={[styles.eventCard, { opacity: 0.9, transform: [{ scale: 0.95 }] }]}>
            <View style={styles.cardHeader}>
              <View style={[styles.tag, { backgroundColor: colors.accents.teal }]}>
                <Text style={styles.tagText}>Food Walk</Text>
              </View>
              <View style={styles.distanceTag}>
                <Text style={styles.distanceText}>12 min walk</Text>
              </View>
            </View>
            <View style={styles.cardBody}>
              <Text style={styles.eventTitle}>Rishikonda Street Food</Text>
              <Text style={styles.eventDesc} numberOfLines={2}>
                Trying the best pani puri in town. Group of 5 already joined!
              </Text>
            </View>
          </ClayView>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e4dc',
  },
  mapContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  placeholderMap: {
    flex: 1,
    backgroundColor: '#e8e4dc',
    opacity: 0.5,
  },
  pin: {
    position: 'absolute',
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  userLocation: {
    position: 'absolute',
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'white',
    borderWidth: 4,
    borderColor: colors.primary,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
    marginLeft: -12,
    marginTop: -12,
  },
  userDot: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    top: 60,
    left: 20,
    right: 20,
    zIndex: 10,
  },
  headerContent: {
    flexDirection: 'row',
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    backgroundColor: 'rgba(240, 244, 248, 0.9)',
  },
  logoBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 20,
    paddingRight: 10,
  },
  logoCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoLetter: {
    color: 'white',
    fontWeight: '900',
    fontSize: 14,
  },
  logoText: {
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 6,
    color: colors.text.primary,
  },
  locationSelector: {
    alignItems: 'center',
  },
  locationLabel: {
    fontSize: 8,
    fontWeight: 'bold',
    color: colors.text.secondary,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.primary,
    marginRight: 4,
  },
  filterBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContent: {
    position: 'absolute',
    bottom: 120,
    width: '100%',
  },
  cardList: {
    paddingLeft: 20,
    paddingRight: 100,
  },
  eventCard: {
    width: width * 0.8,
    height: 220,
    padding: 20,
    justifyContent: 'space-between',
    marginRight: 15,
    backgroundColor: 'white',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 15,
  },
  tagText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
    marginLeft: 4,
  },
  distanceTag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f5f9',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 15,
  },
  distanceText: {
    color: colors.text.secondary,
    fontSize: 10,
    fontWeight: '600',
    marginLeft: 4,
  },
  cardBody: {
    marginTop: 10,
  },
  eventTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text.primary,
    marginBottom: 4,
  },
  eventDesc: {
    fontSize: 12,
    color: colors.text.secondary,
    lineHeight: 18,
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  hostInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  hostText: {
    marginLeft: 10,
  },
  hostLabel: {
    fontSize: 8,
    fontWeight: 'bold',
    color: colors.text.secondary,
  },
  hostName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.text.primary,
  },
  goBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  goBtnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
