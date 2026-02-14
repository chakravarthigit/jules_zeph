import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => {};
  return Reanimated;
});

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});

jest.mock('react-native-vector-icons/MaterialIcons', () => 'Icon');
jest.mock('react-native-linear-gradient', () => 'LinearGradient');
jest.mock('react-native-svg', () => {
  const React = require('react');
  const Svg = (props) => React.createElement('Svg', props);
  const Circle = (props) => React.createElement('Circle', props);
  const Path = (props) => React.createElement('Path', props);
  return {
    __esModule: true,
    default: Svg,
    Circle,
    Path,
    Defs: (props) => React.createElement('Defs', props),
    Stop: (props) => React.createElement('Stop', props),
    LinearGradient: (props) => React.createElement('LinearGradient', props),
  };
});
