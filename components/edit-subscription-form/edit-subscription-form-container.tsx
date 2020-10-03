import React, { ChangeEvent, FormEvent, ReactElement, useState } from 'react'
import { Subscription } from 'types/subscription'
import SubscriptionForm from 'components/subscription-form'
import api from 'services/api'

interface Props {
  initalSubscription: Subscription
}

export default function EditSubscriptionFormContainer({ initalSubscription }: Props): ReactElement {
  const [subscription, setSubscription] = useState<Subscription>(initalSubscription)
  const [isLoading, setLoading] = useState(false)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<any> => {
    event.preventDefault()
    setLoading(true)

    try {
      await api.updateSubscription(subscription)
      alert('Saved!')
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
