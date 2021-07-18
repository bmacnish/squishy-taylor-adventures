import * as React from 'react'
import { StyleProp, TextProps, TextStyle, StyleSheet } from 'react-native'
import { Text } from '../components/Themed'

interface AppTextProps {
  color?: string
  align?: 'left' | 'center' | 'right'
  children?: React.ReactNode
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 40,
    lineHeight: 44,
    fontWeight: '700',
  },
  h2: {
    fontSize: 34,
    lineHeight: 38,
  },
  h3: {
    fontSize: 24,
    lineHeight: 28,
  },
  h4: {
    fontSize: 18,
    lineHeight: 22,
  },
  body1: {
    fontSize: 18,
    lineHeight: 24,
  },
  label: {
    fontSize: 12,
    letterSpacing: 0.5,
    lineHeight: 14,
    textTransform: 'uppercase',
  },
})

const createTextComponent =
  (styles: StyleProp<TextStyle>) => (props: AppTextProps & TextProps) => {
    const { color, align, style: textStyle, ...textProps } = props

    return (
      <Text
        style={[styles, { color: color, textAlign: align }, textStyle]}
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
