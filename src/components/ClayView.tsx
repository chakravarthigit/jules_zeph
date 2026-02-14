import React from 'react';
import { View, StyleSheet, ViewStyle, StyleProp } from 'react-native';
import { colors } from '../theme';

interface ClayViewProps {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  inset?: boolean;
}

export const ClayView: React.FC<ClayViewProps> = ({ children, style, inset }) => {
  if (inset) {
    return (
      <View style={[styles.container, styles.insetBase, style]}>
        <View style={styles.insetShadowTop}>
          <View style={styles.insetShadowBottom}>
            {children}
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={[styles.container, styles.raisedBase, style]}>
      <View style={styles.shadowLight}>
        <View style={styles.shadowDark}>
          <View style={styles.content}>
            {children}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    backgroundColor: colors.background.light,
  },
  raisedBase: {
    // Base style for raised clay
  },
  shadowLight: {
    shadowColor: '#ffffff',
    shadowOffset: { width: -6, height: -6 },
    shadowOpacity: 1,
    shadowRadius: 10,
    // elevation: 0,
  },
  shadowDark: {
    shadowColor: '#d1d9e6',
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 1,
    shadowRadius: 10,
    // elevation: 5,
  },
  content: {
    backgroundColor: colors.background.light,
    borderRadius: 20,
    overflow: 'hidden',
  },
  insetBase: {
    backgroundColor: '#e6e9ef',
  },
  insetShadowTop: {
    // In React Native, inner shadows are hard.
    // Usually achieved with a dark border or specialized library.
    // For now, we'll use a subtle border.
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderColor: '#d1d9e6',
    borderRadius: 20,
  },
  insetShadowBottom: {
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderColor: '#ffffff',
    borderRadius: 20,
    padding: 10,
  },
});
