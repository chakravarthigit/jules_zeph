import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { colors } from '../../theme';
import { ClayView } from '../../components/ClayView';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Animated, { FadeInDown } from 'react-native-reanimated';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Privacy'>;
}

const PrivacyScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.statusBarSpacer} />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconButton}>
          <ClayView style={styles.iconBtnInner}>
            <Icon name="arrow-back" size={24} color={colors.text.slate} />
          </ClayView>
        </TouchableOpacity>
        <Text style={styles.title}>Privacy & Terms</Text>
        <View style={styles.iconButton} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Animated.View entering={FadeInDown.delay(100)}>
          <ClayView style={styles.heroCard}>
            <View style={styles.shieldIconBg}>
              <Icon name="shield" size={32} color={colors.primary} />
            </View>
            <Text style={styles.heroTitle}>Your Privacy Matters</Text>
            <Text style={styles.heroText}>
              At ZEPH, we believe hyper-local discovery shouldn't come at the cost of your privacy. We've designed our clay-soft interface to be as transparent as our data policies.
            </Text>
            <View style={styles.updatedRow}>
              <View style={styles.statusDot} />
              <Text style={styles.updatedText}>Last updated: October 24, 2023</Text>
            </View>
          </ClayView>
        </Animated.View>

        <View style={styles.sections}>
          <Animated.View entering={FadeInDown.delay(200)} style={styles.section}>
            <Text style={styles.sectionTitle}><Text style={styles.sectionNum}>01.</Text> Data We Collect</Text>
            <ClayView style={styles.sectionCard}>
              <Text style={styles.sectionText}>
                To provide real-time mapping and activity discovery, we collect specific data points:
              </Text>
              <View style={styles.bulletList}>
                <View style={styles.bulletItem}>
                  <Icon name="check-circle" size={16} color={colors.primary} />
                  <Text style={styles.bulletText}><Text style={styles.boldText}>Precise Location:</Text> Used only when the app is active to show nearby events.</Text>
                </View>
                <View style={styles.bulletItem}>
                  <Icon name="check-circle" size={16} color={colors.primary} />
                  <Text style={styles.bulletText}><Text style={styles.boldText}>Usage Data:</Text> Which community zones you interact with most frequently.</Text>
                </View>
                <View style={styles.bulletItem}>
                  <Icon name="check-circle" size={16} color={colors.primary} />
                  <Text style={styles.bulletText}><Text style={styles.boldText}>Device Info:</Text> Model and OS version for optimization.</Text>
                </View>
              </View>
            </ClayView>
          </Animated.View>

          <Animated.View entering={FadeInDown.delay(300)} style={styles.section}>
            <Text style={styles.sectionTitle}><Text style={styles.sectionNum}>02.</Text> How We Use Data</Text>
            <ClayView style={styles.sectionCard}>
              <Text style={styles.sectionText}>
                Your data fuels the ZEPH engine. We use it to populate the <Text style={styles.primaryText}>Live Heatmap</Text>, suggest relevant local gatherings, and ensure community safety standards are met. We do <Text style={styles.boldText}>not</Text> sell your personal location history to third-party advertisers.
              </Text>
            </ClayView>
          </Animated.View>

          <Animated.View entering={FadeInDown.delay(400)} style={styles.section}>
            <Text style={styles.sectionTitle}><Text style={styles.sectionNum}>03.</Text> Your Rights</Text>
            <ClayView style={styles.sectionCard}>
              <Text style={[styles.sectionText, { marginBottom: 15 }]}>
                You have full control over your digital footprint on ZEPH.
              </Text>
              <View style={styles.actionList}>
                <TouchableOpacity style={styles.actionRow}>
                  <Text style={styles.actionText}>Request Data Export</Text>
                  <Icon name="chevron-right" size={18} color="#cbd5e1" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionRow}>
                  <Text style={[styles.actionText, { color: colors.status.error }]}>Delete Account</Text>
                  <Icon name="chevron-right" size={18} color="#cbd5e1" />
                </TouchableOpacity>
              </View>
            </ClayView>
          </Animated.View>
        </View>

        <View style={styles.supportContact}>
          <Text style={styles.supportLabel}>Have questions about our policy?</Text>
          <TouchableOpacity onPress={() => Linking.openURL('mailto:support@zeph.app')}>
            <Text style={styles.supportEmail}>support@zeph.app</Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: 120 }} />
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.declineBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.declineText}>Decline</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.acceptBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.acceptText}>Accept & Continue</Text>
          <Icon name="arrow-forward" size={18} color="white" />
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
    width: 48,
    height: 48,
  },
  iconBtnInner: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.text.primary,
    letterSpacing: 0.5,
  },
  scrollContent: {
    paddingHorizontal: 25,
    paddingTop: 10,
  },
  heroCard: {
    padding: 30,
    borderRadius: 32,
    marginBottom: 30,
  },
  shieldIconBg: {
    width: 64,
    height: 64,
    borderRadius: 20,
    backgroundColor: 'rgba(74, 124, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  heroTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.text.primary,
    marginBottom: 12,
  },
  heroText: {
    fontSize: 14,
    color: colors.text.slate,
    lineHeight: 22,
    marginBottom: 20,
  },
  updatedRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#10B981',
  },
  updatedText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.text.secondary,
  },
  sections: {
    gap: 30,
  },
  section: {
    gap: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.text.primary,
    marginLeft: 5,
  },
  sectionNum: {
    color: colors.primary,
  },
  sectionCard: {
    padding: 24,
    borderRadius: 24,
  },
  sectionText: {
    fontSize: 14,
    color: colors.text.slate,
    lineHeight: 22,
  },
  primaryText: {
    color: colors.primary,
    fontWeight: '600',
  },
  boldText: {
    fontWeight: '700',
    color: colors.text.primary,
  },
  bulletList: {
    marginTop: 15,
    gap: 12,
  },
  bulletItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  bulletText: {
    flex: 1,
    fontSize: 13,
    color: colors.text.slate,
    lineHeight: 18,
  },
  actionList: {
    gap: 12,
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f1f5f9',
    borderRadius: 16,
  },
  actionText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text.primary,
  },
  supportContact: {
    alignItems: 'center',
    marginTop: 40,
    gap: 8,
  },
  supportLabel: {
    fontSize: 12,
    color: colors.text.secondary,
    fontWeight: '600',
  },
  supportEmail: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.primary,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    paddingHorizontal: 25,
    paddingBottom: 40,
    paddingTop: 20,
    gap: 15,
    backgroundColor: colors.background.light,
  },
  declineBtn: {
    flex: 1,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.background.light,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.5)',
  },
  declineText: {
    fontSize: 16,
    fontWeight: '800',
    color: colors.text.secondary,
  },
  acceptBtn: {
    flex: 2,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  acceptText: {
    fontSize: 16,
    fontWeight: '800',
    color: 'white',
  },
});

export default PrivacyScreen;
