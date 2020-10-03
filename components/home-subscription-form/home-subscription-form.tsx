import React, { FormEvent, ReactElement } from 'react'
import TextInput from 'components/text-input'
import Button from 'components/button'
import * as S from './home-subscription-form-styles'

interface Props {
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void
}

export default function HomeSubscriptionForm({ handleSubmit }: Props): ReactElement {
  return (
    <S.Form onSubmit={handleSubmit}>
      <S.FormGroup>
        <S.InputGroup>
          <TextInput label="Name" name="name"></TextInput>
        </S.InputGroup>
        <S.InputGroup>
          <TextInput label="CPF" name="cpf" mask="999.999.999/99"></TextInput>
        </S.InputGroup>
        <S.InputGroup>
          <TextInput label="Phone" name="phone" mask="(99) 99999-9999"></TextInput>
        </S.InputGroup>
        <S.InputGroup>
          <TextInput label="E-mail" name="email"></TextInput>
        </S.InputGroup>
        <S.InputGroup>
          <TextInput label="Which is your favorite pokemon?" name="favoritePokemon"></TextInput>
        </S.InputGroup>
        <S.InputGroup>
          <TextInput label="Additional info" name="note"></TextInput>
        </S.InputGroup>
      </S.FormGroup>
      <S.FormActions>
        <Button type="submit"> Submit </Button>
      </S.FormActions>
    </S.Form>
  )
}
