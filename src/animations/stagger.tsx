import React from 'react';
import Animated, {
  useAnimatedStyle,
  withDelay,
  withTiming,
  useSharedValue,
  useEffect
} from 'react-native-reanimated';

interface StaggerProps {
  children: React.ReactNode;
  index: number;
  delay?: number;
}

export const Stagger: React.FC<StaggerProps> = ({ children, index, delay = 100 }) => {
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(20);

  useEffect(() => {
    opacity.value = withDelay(index * delay, withTiming(1, { duration: 500 }));
    translateY.value = withDelay(index * delay, withTiming(0, { duration: 500 }));
  }, [index, delay]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }],
  }));

  return <Animated.View style={animatedStyle}>{children}</Animated.View>;
};
