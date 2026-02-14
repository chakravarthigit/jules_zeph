import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { colors, typography } from '../../theme';
import { ClayView } from '../../components/ClayView';
import { GradientButton } from '../../components/GradientButton';
import Icon from 'react-native-vector-icons/MaterialIcons';

const PostSuccessScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundMap}>
         {/* Simple abstract map background */}
         <View style={styles.mapCircle} />
      </View>

      <View style={styles.content}>
        <ClayView style={styles.successCard}>
          <View style={styles.iconContainer}>
            <View style={styles.successCircle}>
              <Icon name="check-circle" size={80} color="white" />
            </View>
            <View style={[styles.dot, styles.dot1]} />
            <View style={[styles.dot, styles.dot2]} />
          </View>

          <Text style={styles.title}>Post is Live!</Text>
          <Text style={styles.message}>
            Your update has been pinned to the map. Neighbors nearby will be notified shortly.
          </Text>

          <View style={styles.divider} />

          <Text style={styles.shareLabel}>SHARE WITH FRIENDS</Text>
          <View style={styles.shareRow}>
            {['𝕏', 'Ig', 'Wa', '📋'].map((item, i) => (
              <TouchableOpacity key={i} style={styles.shareBtn}>
                <Text style={styles.shareText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity
            style={styles.primaryAction}
            onPress={() => navigation.navigate('Home')}
          >
             <Text style={styles.actionText}>View Post</Text>
             <Icon name="arrow-forward" size={20} color="white" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={styles.backLink}>Back to Map</Text>
          </TouchableOpacity>
        </ClayView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.pebble,
  },
  backgroundMap: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.1,
  },
  mapCircle: {
    width: 600,
    height: 600,
    borderRadius: 300,
    borderWidth: 20,
    borderColor: colors.primary,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  successCard: {
    width: '100%',
    padding: 32,
    borderRadius: 40,
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
  },
  iconContainer: {
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  successCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 10,
  },
  dot: {
    position: 'absolute',
    borderRadius: 10,
  },
  dot1: {
    width: 12,
    height: 12,
    backgroundColor: '#fbbf24',
    top: 0,
    right: 10,
  },
  dot2: {
    width: 10,
    height: 10,
    backgroundColor: colors.accents.coral,
    bottom: 10,
    left: 0,
  },
  title: {
    fontSize: 32,
    fontWeight: '900',
    color: colors.text.primary,
    marginBottom: 12,
  },
  message: {
    fontSize: 14,
    color: colors.text.secondary,
    textAlign: 'center',
    lineHeight: 22,
    paddingHorizontal: 10,
  },
  divider: {
    width: 60,
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 32,
  },
  shareLabel: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#cbd5e1',
    letterSpacing: 2,
    marginBottom: 16,
  },
  shareRow: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 32,
  },
  shareBtn: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#f1f5f9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shareText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  primaryAction: {
    width: '100%',
    backgroundColor: colors.primary,
    height: 56,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  actionText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  backLink: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.text.secondary,
  },
});

export default PostSuccessScreen;
