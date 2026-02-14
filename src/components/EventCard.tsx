import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { colors, typography } from '../theme';
import { ClayView } from './ClayView';

interface EventCardProps {
  title: string;
  host: string;
  time: string;
  distance: string;
  image?: string;
  category: string;
  onPress?: () => void;
}

export const EventCard: React.FC<EventCardProps> = ({
  title,
  host,
  time,
  distance,
  image,
  category,
  onPress,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
      <ClayView style={styles.container}>
        <View style={styles.imageContainer}>
          {image ? (
            <Image source={{ uri: image }} style={styles.image} />
          ) : (
            <View style={styles.placeholderImage} />
          )}
          <View style={styles.categoryBadge}>
            <Text style={styles.categoryText}>{category}</Text>
          </View>
        </View>
        <View style={styles.details}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.infoRow}>
            <Text style={styles.infoText}>{distance} • {time}</Text>
          </View>
          <View style={styles.hostRow}>
            <Text style={styles.hostLabel}>HOSTED BY</Text>
            <Text style={styles.hostName}>{host}</Text>
          </View>
        </View>
      </ClayView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    borderRadius: 25,
  },
  imageContainer: {
    height: 150,
    width: '100%',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  placeholderImage: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.background.pebble,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  categoryBadge: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: colors.accents.coral,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
  },
  categoryText: {
    color: colors.text.light,
    fontSize: 10,
    fontWeight: typography.fontWeight.bold,
  },
  details: {
    padding: 16,
  },
  title: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
    marginBottom: 4,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  infoText: {
    fontSize: typography.fontSize.xs,
    color: colors.text.secondary,
    fontWeight: typography.fontWeight.medium,
  },
  hostRow: {
    marginTop: 4,
  },
  hostLabel: {
    fontSize: 8,
    color: colors.text.secondary,
    fontWeight: typography.fontWeight.bold,
    letterSpacing: 1,
  },
  hostName: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
  },
});
