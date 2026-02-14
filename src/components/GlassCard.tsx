import React from 'react';
import { View, StyleSheet, ViewStyle, StyleProp, Platform } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import { colors } from '../theme';

interface GlassCardProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  blurAmount?: number;
  blurType?: 'light' | 'dark' | 'xlight' | 'extraDark' | 'regular' | 'prominent';
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  style,
  blurAmount = 10,
  blurType = 'light',
}) => {
  return (
    <View style={[styles.container, style]}>
      {Platform.OS === 'ios' ? (
        <BlurView
          style={StyleSheet.absoluteFill}
          blurType={blurType}
          blurAmount={blurAmount}
          reducedTransparencyFallbackColor="white"
        />
      ) : (
        <View style={[StyleSheet.absoluteFill, styles.androidFallback]} />
      )}
      <View style={styles.content}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.4)',
  },
  androidFallback: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  content: {
    padding: 20,
  },
});
