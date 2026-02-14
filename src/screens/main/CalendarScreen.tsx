import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { colors } from '../../theme';
import { ClayView } from '../../components/ClayView';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Animated, { FadeInDown, FadeIn } from 'react-native-reanimated';

const DAYS = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
const DATES = Array.from({ length: 18 }, (_, i) => i + 1);

const EVENTS = [
  {
    id: '1',
    title: 'Morning Yoga',
    time: '09:00 AM',
    location: 'Central Green',
    icon: 'spa',
    color: '#f97316'
  },
  {
    id: '2',
    title: 'Community Potluck',
    time: '01:30 PM',
    location: 'The Old Mill',
    icon: 'restaurant',
    color: '#10b981',
    hasMap: true
  },
  {
    id: '3',
    title: 'Sunset Jazz Trio',
    time: '06:00 PM',
    location: 'Riverside Amphitheater',
    icon: 'music-note',
    color: '#a855f7'
  }
];

const CalendarScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.statusBarSpacer} />

      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton}>
          <ClayView style={styles.iconBtnInner}>
            <Icon name="chevron-left" size={24} color={colors.primary} />
          </ClayView>
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.monthTitle}>October 2023</Text>
          <Text style={styles.discoveryMode}>DISCOVERY MODE</Text>
        </View>
        <TouchableOpacity style={styles.iconButton}>
          <ClayView style={styles.iconBtnInner}>
            <Icon name="chevron-right" size={24} color={colors.primary} />
          </ClayView>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.calendarSection}>
          <View style={styles.daysHeader}>
            {DAYS.map(day => (
              <Text key={day} style={styles.dayHeaderText}>{day}</Text>
            ))}
          </View>
          <View style={styles.calendarGrid}>
            <View style={styles.emptyDay} />
            <View style={styles.emptyDay} />
            {DATES.map(date => {
              const isActive = date === 11;
              const hasEvent = [2, 4, 8, 14].includes(date);
              return (
                <View key={date} style={styles.dateCell}>
                  {isActive ? (
                    <Animated.View entering={FadeIn}>
                      <TouchableOpacity style={styles.activeDateBtn}>
                        <Text style={styles.activeDateText}>{date}</Text>
                        <View style={styles.activeDot} />
                      </TouchableOpacity>
                    </Animated.View>
                  ) : (
                    <ClayView style={styles.dateBtn}>
                      <Text style={styles.dateText}>{date}</Text>
                      {hasEvent && <View style={[styles.eventDot, { backgroundColor: date === 2 ? '#fb923c' : date === 4 ? '#c084fc' : date === 8 ? '#4ade80' : '#f472b6' }]} />}
                    </ClayView>
                  )}
                </View>
              );
            })}
          </View>
          <View style={styles.handleWrapper}>
             <View style={styles.handle} />
          </View>
        </View>

        <View style={styles.upcomingSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Your Plans</Text>
            <Text style={styles.eventCount}>3 Events</Text>
          </View>

          <View style={styles.eventList}>
            {EVENTS.map((event, index) => (
              <Animated.View key={event.id} entering={FadeInDown.delay(index * 150)}>
                <TouchableOpacity activeOpacity={0.9}>
                  <ClayView style={styles.eventCard}>
                    <ClayView inset style={styles.eventIconContainer}>
                      <Icon name={event.icon} size={28} color={event.color} />
                    </ClayView>
                    <View style={styles.eventInfo}>
                      <View style={styles.eventTop}>
                        <Text style={styles.eventTitle}>{event.title}</Text>
                        <View style={styles.timeBadge}>
                          <Text style={styles.timeText}>{event.time}</Text>
                        </View>
                      </View>
                      <Text style={styles.eventDesc}>{index === 0 ? "Relaxing flow to start the day" : index === 1 ? "Bring a dish, share a story" : "Live smooth jazz by the river"}</Text>
                      <View style={styles.locationRow}>
                        <Icon name="location-on" size={14} color={colors.primary} />
                        <Text style={styles.locationText}>{event.location}</Text>
                      </View>
                    </View>
                    {event.hasMap && (
                      <View style={styles.mapPreview}>
                        <Image
                          source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCq_u04AJQXvCgxJaMLH6rEBUv_yzoo38nAS7DqVm8txwKSCh99FV70TvjOAErVmo4lBlcuMQcRsZowwdnbR_GqEPg_4rqNYKwb6OfQUgD-ZR4fon24w9CqpwD13WpV9YUphlUlPsUYLSQBd2n4ANOI7nNvScZVLVGr88ifvZ1zESk5FKo2Zqxuj5WmBVm1f8w6ofJJAx4wj4AJG0anFYDU1-9CFwaXtQsG-c6MsqvGqibMqJjV_uSuhSgO9qlGzGKs-YbwdPqS9xw' }}
                          style={styles.mapImage}
                        />
                      </View>
                    )}
                  </ClayView>
                </TouchableOpacity>
              </Animated.View>
            ))}
          </View>
        </View>
        <View style={{ height: 150 }} />
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
    paddingBottom: 20,
  },
  iconButton: {
    width: 44,
    height: 44,
  },
  iconBtnInner: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitleContainer: {
    alignItems: 'center',
  },
  monthTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.text.primary,
  },
  discoveryMode: {
    fontSize: 10,
    fontWeight: '800',
    color: colors.primary,
    letterSpacing: 2,
    marginTop: 4,
  },
  scrollContent: {
    paddingTop: 10,
  },
  calendarSection: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  daysHeader: {
    flexDirection: 'row',
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  dayHeaderText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '800',
    color: '#94a3b8',
  },
  calendarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dateCell: {
    width: '14.28%',
    aspectRatio: 1,
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyDay: {
    width: '14.28%',
    aspectRatio: 1,
  },
  dateBtn: {
    width: 40,
    height: 40,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateText: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.text.slate,
  },
  activeDateBtn: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
    transform: [{ scale: 1.1 }],
  },
  activeDateText: {
    fontSize: 18,
    fontWeight: '800',
    color: 'white',
  },
  activeDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'white',
    marginTop: 2,
  },
  eventDot: {
    position: 'absolute',
    bottom: 6,
    width: 4,
    height: 4,
    borderRadius: 2,
  },
  handleWrapper: {
    alignItems: 'center',
    marginTop: 15,
  },
  handle: {
    width: 48,
    height: 4,
    backgroundColor: '#e2e8f0',
    borderRadius: 2,
  },
  upcomingSection: {
    paddingHorizontal: 25,
    paddingTop: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: colors.text.primary,
  },
  eventCount: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.primary,
    marginBottom: 4,
  },
  eventList: {
    gap: 20,
  },
  eventCard: {
    padding: 16,
    flexDirection: 'row',
    borderRadius: 28,
    gap: 15,
    alignItems: 'center',
  },
  eventIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  eventInfo: {
    flex: 1,
  },
  eventTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.text.primary,
  },
  timeBadge: {
    backgroundColor: '#f1f5f9',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  timeText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#94a3b8',
  },
  eventDesc: {
    fontSize: 13,
    color: colors.text.secondary,
    marginTop: 4,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 10,
  },
  locationText: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.primary,
  },
  mapPreview: {
    width: 64,
    height: 64,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: 'white',
    overflow: 'hidden',
  },
  mapImage: {
    width: '100%',
    height: '100%',
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
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 10,
  },
});

export default CalendarScreen;
