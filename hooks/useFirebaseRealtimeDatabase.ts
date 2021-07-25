import { useEffect, useState } from 'react'
import firebase from 'firebase/app'
import 'firebase/database'
import firebaseConfig from '../firebaseConfig'
import AsyncStorage from '@react-native-async-storage/async-storage'

async function storeData(value: string) {
  try {
    await AsyncStorage.setItem('@chapters', value)
  } catch (error) {
    // TODO: Handle error
    console.log(error)
  }
}

async function loadChapters() {
  const ref = await firebase.database().ref('/')
  const chapterData = await (await ref.once('value')).val()
  const chapterDataString = JSON.stringify(chapterData)

  storeData(chapterDataString)
}

const initFirebase = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
  } else {
    firebase.app() // if already initialized, use that one
  }
}

export default function useFirebaseRealtimeDatabase() {
  const [isFirebaseIntialized, setFirebaseInitialized] = useState(false)

  useEffect(() => {
    async function initAndLoadFirebase() {
      try {
        await initFirebase()
        await loadChapters()
      } catch (error) {
        // TODO: Handle error
        console.log(error)
      } finally {
        setFirebaseInitialized(true)
      }
    }
    initAndLoadFirebase()
  }, [])

  return isFirebaseIntialized
}
