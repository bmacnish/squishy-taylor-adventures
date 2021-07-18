const tintColorLight = '#2f95dc'
const tintColorDark = '#fff'

export const appColors = {
  white: '#f7f7f7',
  black: '#444',
}

export const projectColors = {
  orange: '#f95b4e',
  magenta: '#bc3da9',
  blue: '#27568e',
  darkblue: '#043a75',
}

export const cardBackgroundColors = {
  0: projectColors.orange,
  1: projectColors.magenta,
  2: projectColors.blue,
  3: projectColors.orange,
  4: projectColors.magenta,
  5: projectColors.blue,
  6: projectColors.orange,
  7: projectColors.magenta,
  8: projectColors.blue,
  9: projectColors.orange,
  10: projectColors.magenta,
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

export default {
  light: {
    text: appColors.black,
    background: appColors.white,
    tint: projectColors.orange,
    tabIconDefault: projectColors.orange,
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
