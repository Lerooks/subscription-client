import React, { ReactElement, useState } from 'react'
import BaseLayout from 'layouts/base-layout'
import EditSubscriptionPage from './edit-subscription-page'
import { Subscription } from 'types/subscription'

interface Props {
  initalSubscription: Subscription
}

export default function EditSubscriptionPageContainer({ initalSubscription }: Props): ReactElement {
  return (
    <BaseLayout>
      <EditSubscriptionPage initalSubscription={initalSubscription}></EditSubscriptionPage>
    </BaseLayout>
  )
}
