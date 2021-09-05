export const colors = {
  light: '#fff',
  dark: '#222',
  offWhite: '#fafafa',
  orange: '#f95b4e',
  magenta: '#bc3da9',
  blue: '#27568e',
  darkblue: '#043a75',
  grey: '#ddd',
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
