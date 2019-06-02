import React from 'react'
import styled from 'styled-components/macro'

function AppLayout(props) {
  return <Main {...props} />
}

const Main = styled.main`
  min-width: 100vw;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
`

export default AppLayout
