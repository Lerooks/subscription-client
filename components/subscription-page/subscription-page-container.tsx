import React, { ReactElement } from 'react'
import BaseLayout from 'layouts/base-layout'
import SubscriptionPage from './subscription-page'
import { Subscription } from 'types/subscription'

interface Props {
  subscriptions: Subscription[]
}

export default function SubscriptionPageContainer({ subscriptions }: Props): ReactElement {
  return (
    <BaseLayout>
      <SubscriptionPage subscriptions={subscriptions}></SubscriptionPage>
    </BaseLayout>
  )
}
