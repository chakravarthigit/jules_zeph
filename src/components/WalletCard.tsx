import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors, typography } from '../theme';
import { ClayView } from './ClayView';

interface WalletCardProps {
  balance: string;
  currency: string;
  cardNumber?: string;
}

export const WalletCard: React.FC<WalletCardProps> = ({ balance, currency, cardNumber }) => {
  return (
    <ClayView style={styles.outerContainer}>
      <LinearGradient
        colors={[colors.primary, colors.primaryDark]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.container}
      >
        <Text style={styles.label}>Balance</Text>
        <View style={styles.balanceRow}>
          <Text style={styles.currency}>{currency}</Text>
          <Text style={styles.balance}>{balance}</Text>
        </View>
        {cardNumber && <Text style={styles.cardNumber}>{cardNumber}</Text>}
      </LinearGradient>
    </ClayView>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 25,
    overflow: 'hidden',
    marginBottom: 20,
  },
  container: {
    padding: 24,
    borderRadius: 25,
  },
  label: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.bold,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 8,
  },
  balanceRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 24,
  },
  currency: {
    color: colors.text.light,
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.medium,
    marginRight: 4,
  },
  balance: {
    color: colors.text.light,
    fontSize: 40,
    fontWeight: typography.fontWeight.black,
  },
  cardNumber: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: typography.fontSize.md,
    letterSpacing: 2,
    fontWeight: typography.fontWeight.medium,
  },
});
