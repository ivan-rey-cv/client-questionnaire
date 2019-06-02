import React from 'react'

import { AuthProvider } from './auth-context'
import { FirebaseProvider } from './firebase-context'

function AppProviders({ children }) {
  return (
    <FirebaseProvider>
      <AuthProvider>{children}</AuthProvider>
    </FirebaseProvider>
  )
}

export default AppProviders
