import React from 'react'
import styled from 'styled-components/macro'

import SEO from '../../components/SEO'
import AppLayout from '../../components/AppLayout'
import AppHeader from '../../components/AppHeader'
import BaseButton from '../../components/BaseButton'
import FieldInput from '../../components/FieldInput'
import questions from './questions'

const QuestionnairePage = () => {
  const handleSubmit = event => {
    event.preventDefault()

    const elements = event.target.elements
    console.log(elements.namedItem('question-1'))
  }

  return (
    <AppLayout>
      <SEO title="questionnaire" />

      <AppHeader headerType="normal" />

      <Body>
        <Form onSubmit={handleSubmit}>
          <header>
            <h2>Welcome!</h2>
          </header>

          <ul>
            {questions.map((question, index) => {
              const key = `question-${index}`

              return <FieldInput key={key} label={question.label} name={key} />
            })}
          </ul>

          <FormFooter>
            <BaseButton>Save</BaseButton>
          </FormFooter>
        </Form>
      </Body>
    </AppLayout>
  )
}

const Body = styled.section`
  width: 100%;
  padding: 1.5rem;
  margin-top: 1rem;

  display: flex;
  justify-content: center;
`

const Form = styled.form`
  width: 100%;
  max-width: 40rem;
  padding: 1.5rem;

  border-radius: 0.25rem;
  border: 1px solid lightgray;
  border-top: 0.25rem solid indigo;
`

const FormFooter = styled.footer`
  margin-top: 1rem;
  padding: 1rem 1rem 0.25rem 1rem;

  display: flex;
  justify-content: center;
`

export default QuestionnairePage
