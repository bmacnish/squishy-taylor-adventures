import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'
import { colors } from '../constants/Colors'
import ChapterScreen from '../screens/ChapterScreen'
import ProjectScreen from '../screens/ProjectScreen'
import { HomeParamList } from '../types'

const HomeStack = createStackNavigator<HomeParamList>()

export default function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="ProjectScreen"
        component={ProjectScreen}
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
          headerTintColor: colors.orange,
        })}
      />
    </HomeStack.Navigator>
  )
}
