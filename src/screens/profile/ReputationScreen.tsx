import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { colors, typography } from '../../theme';
import { ClayView } from '../../components/ClayView';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ReputationScreen = ({ navigation }: any) => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={32} color={colors.text.secondary} />
        </TouchableOpacity>
        <Text style={styles.title}>Reputation</Text>
        <View style={{ width: 32 }} />
      </View>

      <ClayView style={styles.summaryCard}>
         <View style={styles.scoreCircle}>
            <Text style={styles.scoreValue}>4.9</Text>
            <Text style={styles.scoreLabel}>Out of 5</Text>
         </View>
         <Text style={styles.reputationTitle}>Super Neighborhood Host</Text>
         <Text style={styles.reputationDesc}>You've consistently provided value to your local community.</Text>
      </ClayView>

      <View style={styles.badgesSection}>
         <Text style={styles.sectionTitle}>UNLOCKED BADGES</Text>
         <View style={styles.badgeGrid}>
            {[
              { label: 'Super Host', icon: 'local-fire-department', color: colors.primary },
              { label: 'Early Bird', icon: 'history-edu', color: colors.accents.lavender },
              { label: 'Helper', icon: 'volunteer-activism', color: colors.accents.teal },
              { label: 'Organizer', icon: 'event-note', color: colors.accents.coral }
            ].map((badge, i) => (
              <ClayView key={i} style={styles.badgeItem}>
                <Icon name={badge.icon} size={32} color={badge.color} />
                <Text style={styles.badgeLabel}>{badge.label}</Text>
              </ClayView>
            ))}
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
  content: {
    paddingHorizontal: 25,
    paddingTop: 60,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text.primary,
  },
  summaryCard: {
    padding: 30,
    borderRadius: 40,
    alignItems: 'center',
    marginBottom: 40,
  },
  scoreCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 5,
  },
  scoreValue: {
    fontSize: 36,
    fontWeight: '900',
    color: colors.primary,
  },
  scoreLabel: {
    fontSize: 10,
    color: colors.text.secondary,
    fontWeight: 'bold',
  },
  reputationTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text.primary,
    marginBottom: 8,
  },
  reputationDesc: {
    fontSize: 14,
    color: colors.text.secondary,
    textAlign: 'center',
    lineHeight: 20,
  },
  badgesSection: {
  },
  sectionTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: colors.text.secondary,
    letterSpacing: 1,
    marginBottom: 20,
    marginLeft: 10,
  },
  badgeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
  },
  badgeItem: {
    width: '47%',
    padding: 20,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeLabel: {
    marginTop: 12,
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.text.primary,
  },
});

export default ReputationScreen;
