import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { colors, typography } from '../../theme';
import { WalletCard } from '../../components/WalletCard';
import { ClayView } from '../../components/ClayView';
import Icon from 'react-native-vector-icons/MaterialIcons';

const WalletScreen = ({ navigation }: any) => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={32} color={colors.text.secondary} />
        </TouchableOpacity>
        <Text style={styles.title}>My Wallet</Text>
        <View style={{ width: 32 }} />
      </View>

      <WalletCard balance="1,240.50" currency="ZEPH" cardNumber="**** **** **** 3902" />

      <View style={styles.actionsRow}>
         <ClayView style={styles.actionItem}>
            <Icon name="south" size={24} color={colors.primary} />
            <Text style={styles.actionLabel}>Receive</Text>
         </ClayView>
         <ClayView style={styles.actionItem}>
            <Icon name="north" size={24} color={colors.primary} />
            <Text style={styles.actionLabel}>Send</Text>
         </ClayView>
         <ClayView style={styles.actionItem}>
            <Icon name="add" size={24} color={colors.primary} />
            <Text style={styles.actionLabel}>Add</Text>
         </ClayView>
      </View>

      <View style={styles.transactions}>
        <Text style={styles.sectionTitle}>Recent Transactions</Text>
        {[1, 2, 3].map((i) => (
          <ClayView key={i} style={styles.transactionCard}>
            <View style={styles.txIcon}>
               <Text>💰</Text>
            </View>
            <View style={styles.txDetails}>
               <Text style={styles.txTitle}>Yoga Event Payout</Text>
               <Text style={styles.txDate}>Oct 24, 2023</Text>
            </View>
            <Text style={styles.txAmount}>+15.00</Text>
          </ClayView>
        ))}
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
  backBtn: {
    fontSize: 24,
    color: colors.text.primary,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text.primary,
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  actionItem: {
    width: '30%',
    aspectRatio: 1,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionIcon: {
    fontSize: 24,
    color: colors.primary,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  actionLabel: {
    fontSize: 10,
    fontWeight: 'bold',
    color: colors.text.secondary,
  },
  transactions: {
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text.primary,
    marginBottom: 16,
  },
  transactionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 20,
    marginBottom: 12,
  },
  txIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  txDetails: {
    flex: 1,
  },
  txTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.text.primary,
  },
  txDate: {
    fontSize: 10,
    color: colors.text.secondary,
  },
  txAmount: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.status.success,
  },
});

export default WalletScreen;
