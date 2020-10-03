import React, { ReactElement } from 'react'
import { GetServerSideProps } from 'next'
import SubscriptionPage from 'components/subscription-page'
import api from 'services/api'
import { Subscription } from 'types/subscription'

type PageProps = {
  subscriptions: Subscription[]
}

export default function SubscriptionsPage({ subscriptions }: PageProps): ReactElement {
  return <SubscriptionPage subscriptions={subscriptions}></SubscriptionPage>
}

export const getServerSideProps: GetServerSideProps = async (context): Promise<any> => {
  const data = await api.findAllSubscriptions()

  return {
    props: {
      subscriptions: data,
    },
  }
}
