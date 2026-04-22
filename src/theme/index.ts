// src/theme/index.ts
export const Colors = {
  primary: '#2D6A4F',
  primaryLight: '#40916C',
  primaryDark: '#1B4332',
  accent: '#52B788',
  accentLight: '#B7E4C7',
  accentLighter: '#D8F3DC',

  background: '#F8F9F0',
  cardBg: '#FFFFFF',
  surfaceGreen: '#EAF4ED',

  text: '#1A2E1A',
  textSecondary: '#4A6741',
  textMuted: '#7A9B76',
  textLight: '#A8C5A0',

  border: '#D8EAD3',
  borderLight: '#EDF5EB',

  orange: '#E76F51',
  orangeLight: '#FAD7C8',
  yellow: '#F4A261',
  yellowLight: '#FDECD6',
  blue: '#2196F3',
  blueLight: '#BBDEFB',
  purple: '#9C27B0',
  purpleLight: '#E1BEE7',

  white: '#FFFFFF',
  black: '#000000',
  overlay: 'rgba(0,0,0,0.5)',

  progressBg: '#E8F4E8',
  progressFill: '#2D6A4F',

  splashBg: '#1B4332',
};

export const Typography = {
  fontSizes: {
    xs: 10,
    sm: 12,
    md: 14,
    base: 15,
    lg: 16,
    xl: 18,
    xxl: 20,
    xxxl: 24,
    huge: 32,
  },
  fontWeights: {
    regular: '400' as const,
    medium: '500' as const,
    semiBold: '600' as const,
    bold: '700' as const,
    extraBold: '800' as const,
  },
};

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  base: 16,
  lg: 20,
  xl: 24,
  xxl: 32,
  xxxl: 40,
};

export const BorderRadius = {
  sm: 6,
  md: 10,
  lg: 14,
  xl: 18,
  xxl: 24,
  round: 50,
};

export const Shadows = {
  card: {
    shadowColor: '#2D6A4F',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  button: {
    shadowColor: '#2D6A4F',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 6,
  },
};
