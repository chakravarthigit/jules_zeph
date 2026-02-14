import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { colors } from '../../theme';
import { ClayView } from '../../components/ClayView';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Animated, { FadeInDown, FadeIn } from 'react-native-reanimated';
import Svg, { Path } from 'react-native-svg';

const TRANSACTIONS = [
  { id: '1', title: "Luigi's Pizza Event", time: 'Today, 12:30 PM', amount: '-$15.00', icon: 'local-pizza', color: '#f97316' },
  { id: '2', title: "Community Garden", time: 'Yesterday, 4:00 PM', amount: '-$20.00', icon: 'volunteer-activism', color: colors.primary },
  { id: '3', title: "Wallet Top Up", time: 'Aug 24, 09:15 AM', amount: '+$50.00', icon: 'account-balance-wallet', color: '#10b981', isPositive: true },
  { id: '4', title: "Friday Night Jazz", time: 'Aug 20, 8:00 PM', amount: '-$12.50', icon: 'music-note', color: '#f472b6' },
];

const WalletScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.statusBarSpacer} />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconButton}>
          <ClayView style={styles.iconBtnInner}>
            <Icon name="arrow-back" size={24} color={colors.primary} />
          </ClayView>
        </TouchableOpacity>
        <Text style={styles.title}>Wallet</Text>
        <TouchableOpacity style={styles.iconButton}>
          <ClayView style={styles.iconBtnInner}>
            <Icon name="settings" size={24} color={colors.primary} />
          </ClayView>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Animated.View entering={FadeIn}>
          <ClayView style={styles.balanceCard} color={colors.primary}>
            <View style={styles.cardBgIcon}>
              <Icon name="account-balance-wallet" size={120} color="rgba(255,255,255,0.1)" />
            </View>
            <Text style={styles.balanceLabel}>TOTAL BALANCE</Text>
            <Text style={styles.balanceAmount}>$128.50</Text>
            <View style={styles.availableBadge}>
              <View style={styles.availableDot} />
              <Text style={styles.availableText}>Available to spend</Text>
            </View>
          </ClayView>
        </Animated.View>

        <View style={styles.quickActions}>
          {[
            { label: 'Top Up', icon: 'add' },
            { label: 'Scan', icon: 'qr-code-scanner' },
            { label: 'Send', icon: 'send' }
          ].map((action, index) => (
            <Animated.View key={action.label} entering={FadeInDown.delay(200 + index * 100)} style={styles.actionItem}>
              <TouchableOpacity activeOpacity={0.8}>
                <ClayView style={styles.actionCard}>
                  <View style={styles.actionIconCircle}>
                    <Icon name={action.icon} size={24} color={colors.primary} />
                  </View>
                  <Text style={styles.actionLabel}>{action.label}</Text>
                </ClayView>
              </TouchableOpacity>
            </Animated.View>
          ))}
        </View>

        <View style={styles.historyHeader}>
          <Text style={styles.sectionTitle}>Transaction History</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See All</Text>
          </TouchableOpacity>
        </View>

        <ClayView inset style={styles.historyContainer}>
          {TRANSACTIONS.map((tx, index) => (
            <Animated.View key={tx.id} entering={FadeInDown.delay(500 + index * 100)}>
              <TouchableOpacity activeOpacity={0.9} style={styles.txRow}>
                <ClayView style={styles.txItemInner}>
                  <View style={styles.txLeft}>
                    <View style={[styles.txIconContainer, { backgroundColor: `${tx.color}15` }]}>
                      <Icon name={tx.icon} size={20} color={tx.color} />
                    </View>
                    <View>
                      <Text style={styles.txTitle}>{tx.title}</Text>
                      <Text style={styles.txTime}>{tx.time}</Text>
                    </View>
                  </View>
                  <Text style={[styles.txAmount, tx.isPositive && styles.positiveTx]}>
                    {tx.amount}
                  </Text>
                </ClayView>
              </TouchableOpacity>
            </Animated.View>
          ))}
        </ClayView>

        <View style={{ height: 120 }} />
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.withdrawBtn}>
          <Text style={styles.withdrawText}>Withdraw Funds</Text>
          <Icon name="arrow-upward" size={24} color="white" />
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
    fontSize: 20,
    fontWeight: '800',
    color: colors.text.primary,
  },
  scrollContent: {
    paddingHorizontal: 25,
    paddingTop: 10,
  },
  balanceCard: {
    height: 240,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  cardBgIcon: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 20,
  },
  balanceLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: 'rgba(255,255,255,0.6)',
    letterSpacing: 1.5,
    marginBottom: 8,
  },
  balanceAmount: {
    fontSize: 52,
    fontWeight: '900',
    color: 'white',
    letterSpacing: -1,
  },
  availableBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginTop: 20,
    gap: 8,
  },
  availableDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#86efac',
    shadowColor: '#86efac',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 6,
  },
  availableText: {
    fontSize: 12,
    fontWeight: '600',
    color: 'rgba(255,255,255,0.9)',
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    gap: 15,
  },
  actionItem: {
    flex: 1,
  },
  actionCard: {
    paddingVertical: 20,
    alignItems: 'center',
    borderRadius: 24,
    gap: 10,
  },
  actionIconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(74, 124, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionLabel: {
    fontSize: 12,
    fontWeight: '800',
    color: colors.text.secondary,
  },
  historyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 35,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.text.primary,
  },
  seeAllText: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.primary,
  },
  historyContainer: {
    padding: 10,
    borderRadius: 32,
    gap: 12,
  },
  txRow: {
    height: 76,
  },
  txItemInner: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    borderRadius: 38,
  },
  txLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  txIconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.text.primary,
  },
  txTime: {
    fontSize: 11,
    color: colors.text.secondary,
    marginTop: 2,
  },
  txAmount: {
    fontSize: 16,
    fontWeight: '800',
    color: colors.text.primary,
  },
  positiveTx: {
    color: '#10b981',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingBottom: 40,
    paddingTop: 20,
    backgroundColor: 'rgba(245, 246, 248, 0.8)',
  },
  withdrawBtn: {
    backgroundColor: colors.accents.coralPunch,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width - 100,
    height: 64,
    borderRadius: 32,
    gap: 12,
    shadowColor: colors.accents.coralPunch,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  withdrawText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
});

export default WalletScreen;
