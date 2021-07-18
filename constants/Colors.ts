const tintColorLight = '#2f95dc'
const tintColorDark = '#fff'

export const appColors = {
  white: '#f7f7f7',
  black: '#222',
}

export const projectColors = {
  orange: '#f95b4e',
  magenta: '#bc3da9',
  blue: '#27568e',
  darkblue: '#043a75',
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
    text: appColors.white,
    background: appColors.black,
    tint: projectColors.orange,
    tabIconDefault: projectColors.orange,
    tabIconSelected: tintColorDark,
  },
}
