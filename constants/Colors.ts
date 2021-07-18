export const colors = {
  light: '#f7f7f7',
  dark: '#222',
  orange: '#f95b4e',
  magenta: '#bc3da9',
  blue: '#27568e',
  darkblue: '#043a75',
}

export default {
  light: {
    text: colors.dark,
    background: colors.light,
    tint: colors.orange,
    tabIconDefault: colors.orange,
    tabIconSelected: colors.dark,
  },
  dark: {
    text: colors.light,
    background: colors.dark,
    tint: colors.orange,
    tabIconDefault: colors.orange,
    tabIconSelected: colors.light,
  },
}
