import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'
import { appColors, projectColors } from '../constants/Colors'
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
          chapterId: route.params.chapterId,
          title: route.params.name,
          headerBackTitle: '',
          headerBackTitleVisible: false,
          headerTintColor: projectColors.orange,
        })}
      />
    </HomeStack.Navigator>
  )
}
