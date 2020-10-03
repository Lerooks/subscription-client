import React, { ChangeEvent, FormEvent, ReactElement, useState } from 'react'
import { Subscription } from 'types/subscription'
import SubscriptionForm from 'components/subscription-form'

interface Props {
  initalSubscription: Subscription
}

export default function EditSubscriptionFormContainer({ initalSubscription }: Props): ReactElement {
  const [subscription, setSubscription] = useState<Subscription>(initalSubscription)

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
