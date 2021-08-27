import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'
import { colors } from '../constants/Colors'
import ChapterScreen from '../screens/ChapterScreen'
import HomeScreen from '../screens/HomeScreen'
import ProjectScreen from '../screens/ProjectScreen'
import { HomeParamList } from '../types'
import { useColorScheme } from 'react-native'
import ProjectInfoModal from '../screens/ProjectInfoModalScreen'
import ProjectInfoModalScreen from '../screens/ProjectInfoModalScreen'

const HomeStack = createStackNavigator<HomeParamList>()

export default function HomeNavigator() {
  const colorScheme = useColorScheme()

  return (
    <HomeStack.Navigator>
      <HomeStack.Group>
        <HomeStack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="ProjectScreen"
          component={ProjectScreen}
          options={({ route }) => ({
            headerShown: true,
            title: route.params.name,
            headerBackTitle: '',
            headerBackTitleVisible: false,
            headerTintColor: colors.orange,
            headerStyle: {
              backgroundColor:
                colorScheme === 'light' ? colors.offWhite : colors.dark,
            },
          })}
        />
        <HomeStack.Screen
          name="ChapterScreen"
          component={ChapterScreen}
          options={({ route }) => ({
            chapterId: route.params.chapterId,
            title: route.params.name ? route.params.name : '',
            headerBackTitle: '',
            headerBackTitleVisible: false,
            headerTintColor: colors.orange,
            headerStyle: {
              backgroundColor:
                colorScheme === 'light' ? colors.offWhite : colors.dark,
            },
          })}
        />
      </HomeStack.Group>
      <HomeStack.Group screenOptions={{ presentation: 'modal' }}>
        <HomeStack.Screen
          name="ProjectInfoModalScreen"
          component={ProjectInfoModalScreen}
          options={({ route }) => ({
            projectId: route.params?.projectId ? route.params?.projectId : '',
            headerBackTitleVisible: false,
          })}
        />
      </HomeStack.Group>
    </HomeStack.Navigator>
  )
}
