import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import { colors, typography } from '../../theme';
import { ClayView } from '../../components/ClayView';
import { ProfileAvatar } from '../../components/ProfileAvatar';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  useAnimatedGestureHandler,
} from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');

const DiscoverScreen = () => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const rotate = useSharedValue(0);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx: any) => {
      ctx.startX = translateX.value;
      ctx.startY = translateY.value;
    },
    onActive: (event, ctx) => {
      translateX.value = ctx.startX + event.translationX;
      translateY.value = ctx.startY + event.translationY;
      rotate.value = translateX.value / 20;
    },
    onEnd: (event) => {
      if (Math.abs(event.velocityX) > 500 || Math.abs(event.translationX) > width * 0.4) {
        translateX.value = withSpring(event.translationX > 0 ? width * 1.5 : -width * 1.5);
      } else {
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
        rotate.value = withSpring(0);
      }
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
        { rotate: `${rotate.value}deg` },
      ],
    };
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.navBtn}>
          <Icon name="arrow-back" size={24} color={colors.text.secondary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Discover Nearby</Text>
        <TouchableOpacity style={styles.navBtn}>
          <Icon name="tune" size={24} color={colors.text.secondary} />
        </TouchableOpacity>
      </View>

      <View style={styles.cardContainer}>
        {/* Next Card Background */}
        <View style={styles.nextCard} />

        {/* Active Card */}
        <PanGestureHandler onGestureEvent={gestureHandler}>
          <Animated.View style={[styles.cardWrapper, animatedStyle]}>
            <ClayView style={styles.card}>
              <View style={styles.imageSection}>
                 <View style={styles.placeholderImage} />
                 <View style={styles.urgencyBadge}>
                    <Icon name="timer" size={14} color="#92400e" />
                    <Text style={styles.urgencyText}>Starting in 20 min</Text>
                 </View>
              </View>
              <View style={styles.contentSection}>
                <Text style={styles.title}>Sunset Rooftop Yoga</Text>
                <View style={styles.hostRow}>
                  <ProfileAvatar size={32} />
                  <View style={styles.hostText}>
                    <Text style={styles.hostLabel}>HOST</Text>
                    <Text style={styles.hostName}>Sarah Jenkins</Text>
                  </View>
                  <View style={styles.ratingBadge}>
                    <Text style={styles.ratingText}>★ 4.9</Text>
                  </View>
                </View>
                <View style={styles.tagsRow}>
                  <View style={styles.tag}>
                    <Icon name="monetization-on" size={12} color={colors.primary} />
                    <Text style={[styles.tagText, { color: colors.primary }]}>Free</Text>
                  </View>
                  <View style={styles.tag}>
                    <Icon name="directions-walk" size={12} color={colors.text.secondary} />
                    <Text style={styles.tagText}>8 min walk</Text>
                  </View>
                  <View style={styles.tag}>
                    <Icon name="group" size={12} color={colors.text.secondary} />
                    <Text style={styles.tagText}>12/20</Text>
                  </View>
                </View>
                <Text style={styles.description} numberOfLines={2}>
                  Unwind with a flow session overlooking the city skyline. Mats provided, bring water!
                </Text>
              </View>
            </ClayView>
          </Animated.View>
        </PanGestureHandler>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={[styles.actionBtn, styles.rejectBtn]}>
           <Icon name="close" size={40} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionBtn, styles.infoBtn]}>
           <Icon name="info" size={24} color={colors.primary} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionBtn, styles.acceptBtn]}>
           <Icon name="check" size={40} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef0f4',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  navBtn: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  navIcon: {
    fontSize: 20,
    color: colors.text.secondary,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '900',
    color: colors.text.primary,
  },
  cardContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  nextCard: {
    position: 'absolute',
    width: width * 0.85,
    height: height * 0.6,
    backgroundColor: 'white',
    borderRadius: 40,
    opacity: 0.4,
    transform: [{ scale: 0.9 }, { translateY: 20 }],
  },
  cardWrapper: {
    width: '100%',
    height: height * 0.65,
  },
  card: {
    flex: 1,
    borderRadius: 40,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  imageSection: {
    height: '55%',
    backgroundColor: '#ddd',
  },
  placeholderImage: {
    flex: 1,
  },
  urgencyBadge: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: colors.accents.yellow,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    transform: [{ rotate: '-2deg' }],
    flexDirection: 'row',
    alignItems: 'center',
  },
  urgencyText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#92400e',
    marginLeft: 6,
  },
  contentSection: {
    flex: 1,
    padding: 24,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 28,
    fontWeight: '900',
    color: colors.text.primary,
    lineHeight: 32,
  },
  hostRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  hostText: {
    marginLeft: 10,
    flex: 1,
  },
  hostLabel: {
    fontSize: 8,
    fontWeight: 'bold',
    color: colors.text.secondary,
  },
  hostName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.text.primary,
  },
  ratingBadge: {
    backgroundColor: 'white',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#f1f5f9',
  },
  ratingText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: colors.text.primary,
  },
  tagsRow: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 15,
  },
  tag: {
    backgroundColor: '#f1f5f9',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tagText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: colors.text.secondary,
    marginLeft: 4,
  },
  description: {
    fontSize: 14,
    color: colors.text.secondary,
    lineHeight: 20,
    marginTop: 10,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 40,
    gap: 20,
  },
  actionBtn: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 5,
  },
  rejectBtn: {
    backgroundColor: colors.accents.coral,
  },
  infoBtn: {
    backgroundColor: 'white',
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  acceptBtn: {
    backgroundColor: colors.primary,
  },
  actionIcon: {
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default DiscoverScreen;
