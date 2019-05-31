import React from 'react'
import styled, { css } from 'styled-components/macro'
import { useStaticQuery, graphql } from 'gatsby'

function AppHeader({ headerType: type, hideDescription = false }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <header>
      <Nav type={type}>
        <CenteredDiv>
          <h1>{site.siteMetadata.title}</h1>
        </CenteredDiv>
      </Nav>

      <CenteredDiv>
        {hideDescription ? null : (
          <Description>
            Asking the necessary questions early in the process is important in
            setting up a successful client relationship.
          </Description>
        )}
      </CenteredDiv>
    </header>
  )
}

const Nav = styled.nav`
  ${props => {
    if (props.type === 'hero-banner') {
      return css`
        padding: 3rem 1rem;
        font-size: 2rem;
      `
    }

    if (props.type === 'normal') {
      return css`
        padding: 1rem;
        font-size: 1rem;
        background-color: lightgray;
      `
    }
  }}
`
const CenteredDiv = styled.div`
  margin: 0 auto;
  max-width: 600px;

  text-align: center;
`

const Description = styled.p`
  padding: 1.5rem;

  color: gray;
  font-size: 1.5rem;
`

export default AppHeader
