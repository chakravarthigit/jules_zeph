import { colors } from './colors';

export const shadows = {
  clay: {
    light: {
      shadowColor: '#d1d5db',
      shadowOffset: { width: 8, height: 8 },
      shadowOpacity: 1,
      shadowRadius: 16,
    },
    lightUpper: {
      shadowColor: '#ffffff',
      shadowOffset: { width: -8, height: -8 },
      shadowOpacity: 1,
      shadowRadius: 16,
    },
    dark: {
      shadowColor: '#080b13',
      shadowOffset: { width: 8, height: 8 },
      shadowOpacity: 1,
      shadowRadius: 16,
    },
    darkUpper: {
      shadowColor: '#161f33',
      shadowOffset: { width: -8, height: -8 },
      shadowOpacity: 1,
      shadowRadius: 16,
    },
  },
  clayInset: {
    light: {
      borderColor: '#d1d5db',
      borderTopWidth: 2,
      borderLeftWidth: 2,
    },
    lightBottom: {
      borderColor: '#ffffff',
      borderBottomWidth: 2,
      borderRightWidth: 2,
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
