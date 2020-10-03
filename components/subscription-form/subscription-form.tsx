import React, { ChangeEvent, FormEvent, ReactElement } from 'react'
import { Subscription } from 'types/subscription'
import TextInput from 'components/text-input'
import Button from 'components/button'
import * as S from './subscription-form-styles'

interface Props {
  subscription: Subscription
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void
}

export default function SubscriptionForm({ subscription, handleChange, handleSubmit }: Props): ReactElement {
  const nameIsValid = subscription.name === null ? true : subscription.name.length > 0
  const cpfIsValid = subscription.cpf === null ? true : /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/.test(subscription.cpf)
  const phoneIsValid = subscription.phone === null ? true : /\(\d{2,}\) \d{4,}\-\d{4}$/.test(subscription.phone)
  const favoritePokemonIsValid = subscription.favoritePokemon === null ? true : subscription.favoritePokemon.length > 0

  const isAbleToSubmit =
    nameIsValid &&
    cpfIsValid &&
    phoneIsValid &&
    favoritePokemonIsValid &&
    subscription.name !== null &&
    subscription.cpf !== null &&
    subscription.email !== null &&
    subscription.phone !== null &&
    subscription.favoritePokemon !== null

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.FormGroup>
        <S.InputGroup>
          <TextInput
            label="Name *"
            name="name"
            value={subscription.name}
            onChange={handleChange}
            maxLength={255}
            error={!nameIsValid}
            helper={!nameIsValid && 'Name is required'}
          ></TextInput>
        </S.InputGroup>
        <S.InputGroup>
          <TextInput
            label="CPF *"
            name="cpf"
            value={subscription.cpf}
            onChange={handleChange}
            mask="999.999.999-99"
            error={!cpfIsValid}
            helper={!cpfIsValid && 'Invalid CPF'}
          ></TextInput>
        </S.InputGroup>
        <S.InputGroup>
          <TextInput
            label="Phone *"
            name="phone"
            value={subscription.phone}
            onChange={handleChange}
            mask="(99) 99999-9999"
            error={!phoneIsValid}
            helper={!phoneIsValid && 'Invalid Phone'}
            type="phone"
          ></TextInput>
        </S.InputGroup>
        <S.InputGroup>
          <TextInput
            label="E-mail *"
            name="email"
            value={subscription.email}
            onChange={handleChange}
            type="email"
          ></TextInput>
        </S.InputGroup>
        <S.InputGroup>
          <TextInput
            label="Which is your favorite pokemon? *"
            name="favoritePokemon"
            value={subscription.favoritePokemon}
            onChange={handleChange}
            maxLength={255}
            error={!favoritePokemonIsValid}
            helper={!favoritePokemonIsValid && 'Favorite pokemon is required'}
          ></TextInput>
        </S.InputGroup>
        <S.InputGroup>
          <TextInput
            label="Note"
            name="note"
            value={subscription.note}
            onChange={handleChange}
            maxLength={255}
          ></TextInput>
        </S.InputGroup>
      </S.FormGroup>
      <S.FormActions>
        <Button type="submit" disabled={!isAbleToSubmit}>
          Submit
        </Button>
      </S.FormActions>
    </S.Form>
  )
}
