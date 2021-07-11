const tintColorLight = '#2f95dc'
const tintColorDark = '#fff'

export default {
  light: {
    text: '#333',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
}

export const appColors = {
  white: '#fff',
  black: '#000',
}

export const projectColors = {
  creamCan: '#f2c75c',
  brandyPunch: '#dc8633',
  halfBaked: '#86c8bc',
  orangeRoughy: '#be531c',
  cornflower: '#a7c6ed',
  vistaBlue: '#8fd6bd',
}

export const cardBackgroundColors = {
  0: projectColors.creamCan,
  1: projectColors.vistaBlue,
  2: projectColors.brandyPunch,
  3: projectColors.halfBaked,
  4: projectColors.cornflower,
  5: projectColors.orangeRoughy,
  6: projectColors.creamCan,
  7: projectColors.vistaBlue,
  8: projectColors.brandyPunch,
  9: projectColors.halfBaked,
  10: projectColors.cornflower,
}

export interface CardBackgroundColorsType {
  0: string
  1: string
  2: string
  3: string
  4: string
  5: string
  6: string
  7: string
  8: string
  9: string
  10: string
}
