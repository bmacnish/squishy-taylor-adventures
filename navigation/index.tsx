/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import * as React from 'react'
import { ColorSchemeName } from 'react-native'
import { colors } from '../constants/Colors'
import HomeNavigator from './HomeNavigator'

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName
}) {
  const customDarkTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colors.dark,
      card: colors.dark,
      border: colors.dark,
    },
  }
  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? customDarkTheme : DefaultTheme}
    >
      <HomeNavigator />
    </NavigationContainer>
  )
}
