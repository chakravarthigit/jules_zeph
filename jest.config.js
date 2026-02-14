module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@react-navigation|react-native-reanimated|react-native-linear-gradient|react-native-vector-icons)/)',
  ],
  setupFilesAfterEnv: ['./jest-setup.js'],
};
