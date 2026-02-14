import { colors } from './colors';

export const shadows = {
  clay: {
    light: {
      shadowColor: colors.clay.shadowLight,
      shadowOffset: { width: -8, height: -8 },
      shadowOpacity: 1,
      shadowRadius: 16,
      elevation: 0,
    },
    dark: {
      shadowColor: colors.clay.shadowDark,
      shadowOffset: { width: 8, height: 8 },
      shadowOpacity: 1,
      shadowRadius: 16,
      elevation: 5,
    },
  },
  clayCard: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 10,
  },
};
