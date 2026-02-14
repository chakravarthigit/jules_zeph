import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { ClayView } from '../../components/ClayView';
import { colors } from '../../theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring, interpolate, Extrapolate } from 'react-native-reanimated';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const SWIPE_THRESHOLD = SCREEN_WIDTH * 0.25;

const CARDS = [
  {
    id: '1',
    title: 'Rooftop Yoga',
    location: 'Skyline Terrace',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800',
    tags: ['Fitness', 'Social'],
    dist: '0.8 mi'
  },
  {
    id: '2',
    title: 'Urban Garden Workshop',
    location: 'Community Hub',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800',
    tags: ['Learning', 'Nature'],
    dist: '1.2 mi'
  }
];

const SwipeCard = ({ item }: { item: typeof CARDS[0] }) => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx: any) => {
      ctx.startX = translateX.value;
      ctx.startY = translateY.value;
    },
    onActive: (event, ctx) => {
      translateX.value = ctx.startX + event.translationX;
      translateY.value = ctx.startY + event.translationY;
    },
    onEnd: (event) => {
      if (Math.abs(event.translationX) > SWIPE_THRESHOLD) {
        translateX.value = withSpring(event.translationX > 0 ? SCREEN_WIDTH * 1.5 : -SCREEN_WIDTH * 1.5);
      } else {
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
      }
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    const rotate = interpolate(
      translateX.value,
      [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      [-10, 0, 10],
      Extrapolate.CLAMP
    );

    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
        { rotate: `${rotate}deg` },
      ],
    };
  });

  const likeOpacity = useAnimatedStyle(() => ({
    opacity: interpolate(translateX.value, [0, SCREEN_WIDTH / 4], [0, 1], Extrapolate.CLAMP),
  }));

  const nopeOpacity = useAnimatedStyle(() => ({
    opacity: interpolate(translateX.value, [-SCREEN_WIDTH / 4, 0], [1, 0], Extrapolate.CLAMP),
  }));

  return (
    <View style={styles.cardWrapper}>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={[styles.cardContainer, animatedStyle]}>
          <ClayView style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />

            <Animated.View style={[styles.badge, styles.likeBadge, likeOpacity]}>
              <Text style={styles.badgeText}>INTERESTED</Text>
            </Animated.View>

            <Animated.View style={[styles.badge, styles.nopeBadge, nopeOpacity]}>
              <Text style={styles.badgeText}>PASS</Text>
            </Animated.View>

            <View style={styles.info}>
              <View style={styles.tags}>
                {item.tags.map(t => (
                  <View key={t} style={styles.tag}>
                    <Text style={styles.tagText}>{t}</Text>
                  </View>
                ))}
              </View>
              <Text style={styles.title}>{item.title}</Text>
              <View style={styles.locationRow}>
                <Icon name="location-on" size={16} color="white" />
                <Text style={styles.locationText}>{item.location} • {item.dist}</Text>
              </View>
            </View>
          </ClayView>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

const SwipeDiscoveryModeScreen = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.iconBtn}>
            <Icon name="tune" size={24} color={colors.text.primary} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Discovery Mode</Text>
          <TouchableOpacity style={styles.iconBtn}>
            <Icon name="history" size={24} color={colors.text.primary} />
          </TouchableOpacity>
        </View>

        <View style={styles.cardsStack}>
          {CARDS.slice().reverse().map((item) => (
            <SwipeCard key={item.id} item={item} />
          ))}
        </View>

        <View style={styles.actions}>
          <ClayView style={styles.actionBtn}>
             <Icon name="close" size={32} color={colors.accents.coralPunch} />
          </ClayView>
          <ClayView style={styles.actionBtnLarge}>
             <Icon name="star" size={32} color="#FFB800" />
          </ClayView>
          <ClayView style={styles.actionBtn}>
             <Icon name="favorite" size={32} color="#10B981" />
          </ClayView>
        </View>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.light,
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  iconBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.text.primary,
  },
  cardsStack: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    position: 'relative',
  },
  cardWrapper: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  cardContainer: {
    width: '100%',
    height: '100%',
  },
  card: {
    flex: 1,
    borderRadius: 35,
    backgroundColor: 'white',
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  info: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 30,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  tags: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 10,
  },
  tag: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  tagText: {
    color: 'white',
    fontSize: 10,
    fontWeight: '900',
  },
  title: {
    fontSize: 32,
    fontWeight: '900',
    color: 'white',
    marginBottom: 8,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  locationText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '700',
  },
  badge: {
    position: 'absolute',
    top: 50,
    borderWidth: 4,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    zIndex: 10,
  },
  likeBadge: {
    left: 30,
    borderColor: '#10B981',
    transform: [{ rotate: '-20deg' }],
  },
  nopeBadge: {
    right: 30,
    borderColor: colors.accents.coralPunch,
    transform: [{ rotate: '20deg' }],
  },
  badgeText: {
    fontSize: 32,
    fontWeight: '900',
    color: 'white',
    textAlign: 'center',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 25,
    paddingBottom: 40,
    paddingTop: 20,
  },
  actionBtn: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionBtnLarge: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default SwipeDiscoveryModeScreen;
