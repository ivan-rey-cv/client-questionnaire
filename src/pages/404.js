import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'gatsby'

import SEO from '../components/SEO'
import AppLayout from '../components/AppLayout'
import AppHeader from '../components/AppHeader'

const NotFoundPage = () => {
  return (
    <AppLayout>
      <SEO title="404: Not found" />

      <AppHeader headerType="normal" hideDescription={true} />

      <Body>
        <ErrorBanner>
          <h1>404</h1>
          <h4>NOT FOUND</h4>
        </ErrorBanner>

        <MarginedDiv>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </MarginedDiv>

        <MarginedDiv>
          <Link to="/">Go to Home page instead!</Link>
        </MarginedDiv>
      </Body>
    </AppLayout>
  )
}

const Body = styled.section`
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ErrorBanner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 20rem;
  height: 20rem;
  font-size: 3.5rem;
  text-align: center;

  background: linear-gradient(45deg, #553c8b, #9ea9f0 50%, #9ea9f0);
  border-radius: 37% 63% 53% 47% / 45% 32% 68% 55%;
`

const MarginedDiv = styled.div`
  margin: 2rem 1rem;
  text-align: center;
`

export default NotFoundPage
