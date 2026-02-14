import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { colors, typography } from '../../theme';
import { ClayView } from '../../components/ClayView';
import { ProfileAvatar } from '../../components/ProfileAvatar';
import { GradientButton } from '../../components/GradientButton';
import { IconPill } from '../../components/IconPill';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width, height } = Dimensions.get('window');

const EventDetailsScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.heroSection}>
          <View style={styles.placeholderHero} />
          <View style={styles.navHeader}>
            <TouchableOpacity style={styles.navBtn} onPress={() => navigation.goBack()}>
              <Icon name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
            <View style={styles.headerRight}>
               <TouchableOpacity style={styles.navBtn}><Icon name="favorite-border" size={24} color="white" /></TouchableOpacity>
               <TouchableOpacity style={[styles.navBtn, { marginLeft: 10 }]}><Icon name="ios-share" size={24} color="white" /></TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.contentBody}>
          <View style={styles.statusRow}>
             <View style={styles.statusBadge}>
                <View style={styles.pulseDot} />
                <Text style={styles.statusText}>HAPPENING IN 20 MIN</Text>
             </View>
          </View>

          <Text style={styles.title}>Sunset Yoga at the Park</Text>

          <ClayView style={styles.hostCard}>
             <View style={styles.hostLeft}>
                <ProfileAvatar size={48} />
                <View style={styles.hostText}>
                   <Text style={styles.hostLabel}>HOSTED BY</Text>
                   <Text style={styles.hostName}>Sarah J.</Text>
                </View>
             </View>
             <TouchableOpacity style={styles.followBtn}><Text style={styles.followText}>Follow</Text></TouchableOpacity>
          </ClayView>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.pillsRow}>
             <IconPill label="Today" icon="📅" />
             <IconPill label="6:30 PM" icon="🕒" />
             <IconPill label="Free" icon="💰" />
          </ScrollView>

          <Text style={styles.description}>
             Join us for a relaxing session to wind down the week. We will focus on breathing and gentle movements suitable for all levels. Bring your own mat and water!
          </Text>

          <ClayView style={styles.mapCard}>
             <View style={styles.miniMapPlaceholder}>
                <Icon name="location-on" size={40} color={colors.accents.coral} />
             </View>
             <View style={styles.mapInfo}>
                <View>
                   <Text style={styles.mapTitle}>Central Park, Great Lawn</Text>
                   <Text style={styles.mapSub}>New York, NY</Text>
                </View>
                <TouchableOpacity style={styles.dirBtn}>
                   <Icon name="directions" size={20} color={colors.primary} />
                </TouchableOpacity>
             </View>
          </ClayView>

          <View style={styles.attendeesSection}>
             <Text style={styles.sectionTitle}>PEOPLE JOINING</Text>
             <ClayView style={styles.attendeesCard}>
                <View style={styles.avatarRow}>
                   {[1,2,3,4].map(i => <View key={i} style={styles.stackedAvatar} />)}
                   <View style={[styles.stackedAvatar, styles.countAvatar]}><Text style={styles.countText}>+24</Text></View>
                </View>
                <TouchableOpacity><Text style={styles.seeAll}>See all</Text></TouchableOpacity>
             </ClayView>
          </View>
        </View>
      </ScrollView>

      <View style={styles.actionFooter}>
        <TouchableOpacity style={styles.chatBtn}>
           <Icon name="chat-bubble-outline" size={24} color={colors.text.secondary} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.primaryAction}
          onPress={() => {}}
        >
           <Text style={styles.actionText}>Count Me In</Text>
           <Icon name="check-circle" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.light,
  },
  scrollContent: {
    paddingBottom: 120,
  },
  heroSection: {
    height: height * 0.45,
    width: '100%',
  },
  placeholderHero: {
    flex: 1,
    backgroundColor: colors.accents.coral,
    opacity: 0.8,
  },
  navHeader: {
    position: 'absolute',
    top: 60,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  navBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.5)',
  },
  navIcon: {
    fontSize: 20,
    color: 'white',
  },
  headerRight: {
    flexDirection: 'row',
  },
  contentBody: {
    marginTop: -40,
    backgroundColor: colors.background.light,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 25,
    paddingTop: 30,
  },
  statusRow: {
    marginBottom: 16,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    alignSelf: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  pulseDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.accents.coral,
    marginRight: 8,
  },
  statusText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: colors.accents.coral,
  },
  title: {
    fontSize: 36,
    fontWeight: '900',
    color: colors.text.primary,
    lineHeight: 42,
    marginBottom: 24,
  },
  hostCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 25,
    marginBottom: 24,
  },
  hostLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  hostText: {
    marginLeft: 12,
  },
  hostLabel: {
    fontSize: 8,
    fontWeight: 'bold',
    color: colors.primary,
  },
  hostName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text.primary,
  },
  followBtn: {
    backgroundColor: '#f1f5f9',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 15,
  },
  followText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.text.secondary,
  },
  pillsRow: {
    marginBottom: 24,
  },
  description: {
    fontSize: 15,
    color: colors.text.secondary,
    lineHeight: 24,
    marginBottom: 30,
    fontWeight: '500',
  },
  mapCard: {
    borderRadius: 25,
    overflow: 'hidden',
    padding: 10,
    marginBottom: 30,
  },
  miniMapPlaceholder: {
    height: 120,
    backgroundColor: '#eee',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
  },
  mapTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.text.primary,
  },
  mapSub: {
    fontSize: 12,
    color: colors.text.secondary,
  },
  dirBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(77, 127, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  attendeesSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: colors.text.secondary,
    letterSpacing: 1,
    marginBottom: 12,
    marginLeft: 10,
  },
  attendeesCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 25,
  },
  avatarRow: {
    flexDirection: 'row',
  },
  stackedAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#ddd',
    borderWidth: 2,
    borderColor: 'white',
    marginLeft: -10,
  },
  countAvatar: {
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  countText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  seeAll: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.primary,
  },
  actionFooter: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingHorizontal: 25,
    paddingTop: 20,
    paddingBottom: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    flexDirection: 'row',
    alignItems: 'center',
  },
  chatBtn: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#eee',
    marginRight: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  primaryAction: {
    flex: 1,
    backgroundColor: colors.primary,
    height: 60,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 8,
  },
  actionText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
});

export default EventDetailsScreen;
