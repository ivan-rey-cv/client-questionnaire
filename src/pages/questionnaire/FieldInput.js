import React from 'react'
import styled from 'styled-components/macro'

function FieldInput({ label, name }) {
  return (
    <List>
      <Label>{label}</Label>
      <Input name={name} />
    </List>
  )
}

const List = styled.li`
  margin: 0;
  margin-top: 1.5rem;

  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  padding: 0.25rem 0.5rem;

  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1rem;
  letter-spacing: calc(1rem / 16);

  color: #666666;
`

const Input = styled.input`
  padding: 0 0.5rem;
  border-radius: 0.125rem;
  border: 1px solid darkgray;

  font-size: 1rem;
  line-height: 1.75rem;
  letter-spacing: calc(1rem / 16);
`

export default FieldInput
