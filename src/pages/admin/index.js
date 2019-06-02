import React from 'react'
import styled from 'styled-components/macro'
import { useAuth } from '../../context/auth-context'
import { useFirebase } from '../../context/firebase-context'

import AppLayout from '../../components/AppLayout'
import AppHeader from '../../components/AppHeader'
import AdminBody from './AdminBody'
import LoginForm from './LoginForm'

function admin() {
  const auth = useAuth()
  const { firebaseApp, firebaseAuth, firestoreDB } = useFirebase()
  const [loginStatus, setLoginStatus] = React.useState({
    msg: '',
    success: null,
  })

  const handleLogin = async event => {
    event.preventDefault()
    const elements = event.target.elements

    const emailInput = elements.namedItem('login-email')
    const passwordInput = elements.namedItem('login-password')

    try {
      await firebaseAuth.setPersistence(
        firebaseApp.auth.Auth.Persistence.SESSION
      )

      await firebaseAuth.signInWithEmailAndPassword(
        emailInput.value,
        passwordInput.value
      )

      setLoginStatus({
        success: true,
        msg: 'Successfully logged in!',
      })
    } catch (error) {
      console.log(error.code)
      setLoginStatus({
        success: false,
        msg: error.message,
      })
    }
  }

  const handleLogout = async event => {
    event.preventDefault()

    try {
      await firebaseAuth.signOut()
    } catch (error) {
      console.log('logout failed', error, auth.user)
    }
  }

  let adminBody = null

  if (auth.isReady) {
    if (auth.user) {
      adminBody = (
        <AdminBody firestoreDB={firestoreDB} handleLogout={handleLogout} />
      )
    } else {
      adminBody = (
        <FormContainer>
          <LoginForm onSubmit={handleLogin} loginStatus={loginStatus} />
        </FormContainer>
      )
    }
  }

  return (
    <AppLayout>
      <AppHeader headerType="normal" hideDescription={true} />

      {adminBody}
    </AppLayout>
  )
}

const FormContainer = styled.ul`
  padding: 1.5rem;

  display: flex;
  justify-content: center;
`

export default admin
