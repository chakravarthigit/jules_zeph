// import { TransitionPresets } from '@react-navigation/stack';

export const fadeTransition = {
  gestureEnabled: true,
  // ...TransitionPresets.FadeFromBottomAndroid,
};

export const springTransition = {
  gestureEnabled: true,
  transitionSpec: {
    open: { animation: 'spring', config: { stiffness: 1000, damping: 500, mass: 3, overshootClamping: true, restDisplacementThreshold: 0.01, restSpeedThreshold: 0.01 } },
    close: { animation: 'spring', config: { stiffness: 1000, damping: 500, mass: 3, overshootClamping: true, restDisplacementThreshold: 0.01, restSpeedThreshold: 0.01 } },
  },
};
