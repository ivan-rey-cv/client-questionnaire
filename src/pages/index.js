import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'gatsby'

import SEO from '../components/SEO'
import AppLayout from '../components/AppLayout'
import AppHeader from '../components/AppHeader'
import BaseButton from '../components/BaseButton'

const IndexPage = () => (
  <AppLayout>
    <SEO title="Home" />

    <AppHeader headerType="hero-banner" />

    <ButtonContainer>
      <BaseButton as={Link} to="/questionnaire">
        Start
      </BaseButton>
    </ButtonContainer>
  </AppLayout>
)

const ButtonContainer = styled.div`
  margin-top: 1rem;
  padding: 1.5rem;

  display: flex;
  justify-content: center;
`

export default IndexPage
