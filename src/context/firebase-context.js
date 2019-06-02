import React from 'react'
import firebaseApp from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const FirebaseContext = React.createContext()

function FirebaseProvider(props) {
  const [config /*, setConfig */] = React.useState({
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
  })

  const value = React.useMemo(() => {
    console.count('########    memoizing firebase value')

    const firebase = firebaseApp.initializeApp(config)
    const firebaseAuth = firebaseApp.auth()
    const firestoreDB = firebaseApp.firestore()

    return {
      firebase,
      firebaseApp,
      firebaseAuth,
      firestoreDB,
    }
  }, [])

  return <FirebaseContext.Provider value={value} {...props} />
}

const useFirebase = () => React.useContext(FirebaseContext)

export { FirebaseProvider, useFirebase }
