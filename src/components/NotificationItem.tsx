import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, typography } from '../theme';
import { ClayView } from './ClayView';

interface NotificationItemProps {
  title: string;
  message: string;
  time: string;
  unread?: boolean;
  type?: 'event' | 'system' | 'message';
}

export const NotificationItem: React.FC<NotificationItemProps> = ({
  title,
  message,
  time,
  unread,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <ClayView inset={!unread} style={styles.container}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
            {unread && <View style={styles.unreadDot} />}
          </View>
          <Text style={styles.message} numberOfLines={2}>
            {message}
          </Text>
          <Text style={styles.time}>{time}</Text>
        </View>
      </ClayView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
    borderRadius: 20,
  },
  content: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  title: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.primary,
  },
  message: {
    fontSize: typography.fontSize.xs,
    color: colors.text.secondary,
    lineHeight: 18,
    marginBottom: 8,
  },
  time: {
    fontSize: 10,
    color: colors.clay.gray,
    fontWeight: typography.fontWeight.medium,
  },
});
