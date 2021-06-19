import { useTheme } from '@react-navigation/native'
import * as React from 'react'
import { StyleProp, Text, TextProps, TextStyle, StyleSheet } from 'react-native'

interface AppTextProps {
  color?: string
  children?: React.ReactNode
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 40,
    lineHeight: 44,
    fontFamily: 'BungeeShade',
  },
  h2: {
    fontSize: 34,
    lineHeight: 38,
    fontFamily: 'Mako',
  },
  h3: {
    fontSize: 24,
    lineHeight: 28,
    fontFamily: 'Mako',
  },
  h4: {
    fontSize: 18,
    lineHeight: 22,
    fontFamily: 'Mako',
  },
  body1: {
    fontSize: 18,
    lineHeight: 24,
    fontFamily: 'Mako',
  },
  label: {
    fontSize: 10,
    letterSpacing: 0.5,
    lineHeight: 14,
    textTransform: 'uppercase',
  },
})

const createTextComponent =
  (styles: StyleProp<TextStyle>) => (props: AppTextProps & TextProps) => {
    const { colors } = useTheme()

    const { style: textStyle, ...textProps } = props

    return (
      <Text
        style={[{ color: colors.text }, styles, textStyle]}
        {...textProps}
      />
    )
  }

export const H1Text = createTextComponent(styles.h1)
export const H2Text = createTextComponent(styles.h2)
export const H3Text = createTextComponent(styles.h3)
export const H4Text = createTextComponent(styles.h4)
export const Body1 = createTextComponent(styles.body1)
export const LabelText = createTextComponent(styles.label)
