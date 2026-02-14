import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  interpolate,
} from 'react-native-reanimated';
import { colors } from '../theme';

interface ProfileAvatarProps {
  uri?: string;
  size?: number;
  showPulse?: boolean;
}

export const ProfileAvatar: React.FC<ProfileAvatarProps> = ({
  uri,
  size = 60,
  showPulse = false,
}) => {
  const pulseValue = useSharedValue(0);

  useEffect(() => {
    if (showPulse) {
      pulseValue.value = withRepeat(withTiming(1, { duration: 2000 }), -1, false);
    } else {
      pulseValue.value = 0;
    }
  }, [showPulse]);

  const pulseStyle = useAnimatedStyle(() => {
    const scale = interpolate(pulseValue.value, [0, 1], [1, 1.5]);
    const opacity = interpolate(pulseValue.value, [0, 0.8, 1], [0.6, 0.3, 0]);
    return {
      transform: [{ scale }],
      opacity,
    };
  });

  return (
    <View style={[styles.container, { width: size, height: size }]}>
      {showPulse && (
        <Animated.View
          style={[
            styles.pulseRing,
            { width: size, height: size, borderRadius: size / 2 },
            pulseStyle,
          ]}
        />
      )}
      <View style={[styles.imageWrapper, { borderRadius: size / 2 }]}>
        {uri ? (
          <Image source={{ uri }} style={styles.image} />
        ) : (
          <View style={[styles.image, styles.placeholder]} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  pulseRing: {
    position: 'absolute',
    backgroundColor: colors.primary,
  },
  imageWrapper: {
    width: '100%',
    height: '100%',
    padding: 2,
    backgroundColor: colors.background.light,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },
  placeholder: {
    backgroundColor: colors.background.pebble,
  },
});
