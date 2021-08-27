import { useEffect, useState } from 'react'
import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'
import firebaseConfig from '../firebaseConfig'
import AsyncStorage from '@react-native-async-storage/async-storage'

const initFirebase = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
  } else {
    firebase.app()
  }
}

async function storeData(value: string) {
  try {
    await AsyncStorage.setItem('@projects', value)
  } catch (error) {
    // TODO: Handle error
    console.log(error)
  }
}

async function loadProjects() {
  const ref = await firebase.database().ref('/')
  const projectData = await (await ref.once('value')).val()
  const projectDataString = JSON.stringify(projectData)

  storeData(projectDataString)
}

async function createOrLoginAnonymousUser() {
  return firebase
    .auth()
    .signInAnonymously()
    .catch((error) => {
      // TODO: Error handling
      console.log(error)
    })
}

export default function useFirebase() {
  const [isFirebaseIntialized, setFirebaseInitialized] = useState(false)

  useEffect(() => {
    async function initAndLoadFirebase() {
      try {
        await initFirebase()
        await createOrLoginAnonymousUser()
        await loadProjects()
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
