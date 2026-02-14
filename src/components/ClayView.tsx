import React from 'react';
import { View, StyleSheet, ViewStyle, StyleProp, Platform } from 'react-native';
import { colors } from '../theme';

interface ClayViewProps {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  inset?: boolean;
  active?: boolean;
  color?: string;
  borderRadius?: number;
}

export const ClayView: React.FC<ClayViewProps> = ({
  children,
  style,
  inset,
  active,
  color,
  borderRadius = 24
}) => {
  const containerStyle = [
    styles.container,
    { borderRadius },
    color ? { backgroundColor: color } : null,
    style
  ];

  if (active || inset) {
    return (
      <View style={[containerStyle, styles.insetBase]}>
        <View style={[styles.insetShadowTop, { borderRadius }]}>
          <View style={[styles.insetShadowBottom, { borderRadius }]}>
            {children}
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.shadowOuterLight}>
      <View style={[styles.shadowOuterDark, { borderRadius }]}>
        <View style={[styles.innerContent, color ? { backgroundColor: color } : null, { borderRadius }, style]}>
          <View style={[styles.innerGlow, { borderRadius }]}>
             {children}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background.light,
  },
  shadowOuterLight: {
    shadowColor: '#ffffff',
    shadowOffset: { width: -6, height: -6 },
    shadowOpacity: 1,
    shadowRadius: 10,
    backgroundColor: 'transparent',
  },
  shadowOuterDark: {
    shadowColor: '#d1d9e6',
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 1,
    shadowRadius: 10,
    backgroundColor: colors.background.light,
  },
  innerContent: {
    backgroundColor: colors.background.light,
    overflow: 'hidden',
  },
  innerGlow: {
    // Optional: add a tiny white top-left border to enhance 3D effect
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderColor: 'rgba(255,255,255,0.4)',
  },
  insetBase: {
    backgroundColor: '#f0f2f5',
  },
  insetShadowTop: {
    borderTopWidth: 3,
    borderLeftWidth: 3,
    borderColor: '#d1d9e6',
  },
  insetShadowBottom: {
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: '#ffffff',
    padding: 2,
  },
});
