import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, typography } from '../theme';
import { ClayView } from './ClayView';

interface StatCardProps {
  label: string;
  value: string | number;
  icon?: string;
  color?: string;
}

export const StatCard: React.FC<StatCardProps> = ({ label, value, icon, color = colors.primary }) => {
  return (
    <ClayView style={styles.container}>
      {icon && <Text style={styles.icon}>{icon}</Text>}
      <Text style={[styles.value, { color }]}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </ClayView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 100,
    borderRadius: 20,
  },
  icon: {
    fontSize: 24,
    marginBottom: 8,
  },
  value: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.black,
    marginBottom: 4,
  },
  label: {
    fontSize: 10,
    fontWeight: typography.fontWeight.bold,
    color: colors.text.secondary,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});
