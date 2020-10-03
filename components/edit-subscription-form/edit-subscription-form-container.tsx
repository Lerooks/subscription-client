import React, { ChangeEvent, FormEvent, ReactElement, useState } from 'react'
import { Subscription } from 'types/subscription'
import SubscriptionForm from 'components/subscription-form'

const initialSubscription: Subscription = {
  id: null,
  name: null,
  cpf: null,
  email: null,
  phone: null,
  favoritePokemon: null,
  note: '',
}

export default function EditSubscriptionFormContainer(): ReactElement {
  const [subscription, setSubscription] = useState<Subscription>(initialSubscription)

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target

    setSubscription({
      ...subscription,
      [name]: value,
    })
  }

  return (
    <SubscriptionForm
      subscription={subscription}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    ></SubscriptionForm>
  )
}
