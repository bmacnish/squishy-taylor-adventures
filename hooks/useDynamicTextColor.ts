import { useColorScheme } from 'react-native'
import { colors } from '../constants/Colors'

export default function useDynamicTextColor() {
  const colorScheme = useColorScheme()
  return colorScheme === 'light' ? colors.dark : colors.light
}
