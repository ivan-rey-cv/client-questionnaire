import React from 'react'
import styled from 'styled-components/macro'

function BaseButton(props) {
  return <Button {...props} />
}

const Button = styled.button.attrs({
  tabIndex: 0,
})`
  font-family: inherit;
  font-size: inherit;
  letter-spacing: calc(1rem / 8);
  text-decoration: none;
  cursor: pointer;

  min-height: 2.5em;
  min-width: 6em;
  padding: calc((2.5 / 6) * 1.5em) 1.5em;

  border: none;
  border-radius: 0.25rem;
  color: white;
  background-color: #009975;

  display: flex;
  justify-content: center;
  align-items: center;
`

export default BaseButton
