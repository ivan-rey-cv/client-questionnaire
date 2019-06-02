import React from 'react'
import styled from 'styled-components/macro'
import FieldInput from '../../components/FieldInput'
import BaseButton from '../../components/BaseButton'

function LoginForm(props) {
  const { loginStatus } = props

  return (
    <Form {...props}>
      <FormHeader>
        <h1>Login as admin</h1>
      </FormHeader>

      <div>
        <FieldInput label="email" id="login-email" type="email" />
        <FieldInput label="password" id="login-password" type="password" />
      </div>

      <MsgDiv success={loginStatus.success}>
        <p>{loginStatus.msg}</p>
      </MsgDiv>

      <FormFooter>
        <BaseButton>Log in</BaseButton>
      </FormFooter>
    </Form>
  )
}

const Form = styled.form`
  margin-top: 4rem;
  padding: 2rem;
  width: 22rem;

  border-radius: 0.25rem;
  border: 1px solid lightgray;
`

const FormHeader = styled.header`
  display: flex;
  justify-content: center;
`

const FormFooter = styled.footer`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`
const MsgDiv = styled.div`
  margin-top: 1rem;
  font-size: 0.9rem;
  text-align: center;
  letter-spacing: calc(1rem / 20);

  color: ${props => (props.success ? 'green' : 'red')};
`

export default LoginForm
