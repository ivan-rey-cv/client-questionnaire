import React from 'react'
import { useFirebase } from './firebase-context'

const AuthContext = React.createContext()

function AuthProvider(props) {
  const { firebaseAuth } = useFirebase()
  const [auth, setAuth] = React.useState({
    user: null,
    isReady: false,
  })

  console.count('auth-context')

  React.useEffect(() => {
    console.count('auth provider use effect')

    // firebaseAuth is an initialized auth: firebaseApp.auth()
    firebaseAuth.onAuthStateChanged(function(user) {
      setAuth({
        user: user,
        isReady: true,
      })
    })
  }, [])

  return <AuthContext.Provider value={auth} {...props} />
}

const useAuth = () => React.useContext(AuthContext)

export { AuthProvider, useAuth }
