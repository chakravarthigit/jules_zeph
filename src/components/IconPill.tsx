import React from 'react';
import { View, Text, StyleSheet, ViewStyle, StyleProp } from 'react-native';
import { colors, typography } from '../theme';
import { ClayView } from './ClayView';

interface IconPillProps {
  label: string;
  icon?: string; // Emoji or Icon name
  style?: StyleProp<ViewStyle>;
  active?: boolean;
}

export const IconPill: React.FC<IconPillProps> = ({ label, icon, style, active }) => {
  return (
    <ClayView inset={!active} style={[styles.container, active && styles.activeContainer, style]}>
      <View style={styles.content}>
        {icon && <Text style={styles.icon}>{icon}</Text>}
        <Text style={[styles.label, active && styles.activeLabel]}>{label}</Text>
      </View>
    </ClayView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 10,
  },
  activeContainer: {
    backgroundColor: colors.primary,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: 18,
    marginRight: 6,
  },
  label: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.bold,
    color: colors.text.secondary,
  },
  activeLabel: {
    color: colors.text.light,
  },
});
