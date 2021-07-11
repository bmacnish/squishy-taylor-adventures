import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'
import ChapterScreen from '../screens/ChapterScreen'
import HomeScreen from '../screens/HomeScreen'
import { HomeParamList } from '../types'

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<HomeParamList>()

export default function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="ChapterScreen"
        component={ChapterScreen}
        options={({ route }) => ({
          headerStyle: route.params.headerStyle,
          chapterId: route.params.chapterId,
          title: route.params.name,
          headerBackTitle: '',
          headerTitleStyle: { fontFamily: 'Mako' },
        })}
      />
    </HomeStack.Navigator>
  )
}
