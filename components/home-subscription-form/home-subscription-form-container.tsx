import React, { ChangeEvent, FormEvent, ReactElement, useState } from 'react'
import { Subscription } from 'types/subscription'
import SubscriptionForm from 'components/subscription-form'
import api from 'services/api'

const initialSubscription: Subscription = {
  id: null,
  name: null,
  cpf: null,
  email: null,
  phone: null,
  favoritePokemon: null,
  note: '',
}

export default function HomeSubscriptionFormContainer(): ReactElement {
  const [subscription, setSubscription] = useState<Subscription>(initialSubscription)
  const [isLoading, setLoading] = useState(false)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<any> => {
    event.preventDefault()
    setLoading(true)

    try {
      await api.saveSubscription(subscription)
      alert('Saved!')
      document.location.reload()
    } catch (error) {
      alert('There was an error.')
    } finally {
      setLoading(false)
    }
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
      isLoading={isLoading}
      subscription={subscription}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    ></SubscriptionForm>
  )
}
