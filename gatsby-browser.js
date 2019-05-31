// This component will be the parent component of every page components

import React from 'react'
import GlobalStyle from './src/GlobalStyle'
import AppProviders from './src/context'

export const wrapRootElement = ({ element }) => {
  console.count('Global Wrapper')

  return (
    <>
      <GlobalStyle />

      <AppProviders>{element}</AppProviders>
    </>
  )
}
