import React, { ReactElement } from 'react'
import EditSubscriptionForm from 'components/edit-subscription-form'
import * as S from './edit-subscription-page-styles'
import { Subscription } from 'types/subscription'

interface Props {
  initalSubscription: Subscription
}

export default function EditSubscriptionPage({ initalSubscription }: Props): ReactElement {
  return (
    <S.Wrapper>
      <EditSubscriptionForm initalSubscription={initalSubscription}></EditSubscriptionForm>
    </S.Wrapper>
  )
}
