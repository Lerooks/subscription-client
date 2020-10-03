import React, { ReactElement } from 'react'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { Subscription } from 'types/subscription'
import SubscriptionPage from 'components/subscription-page'
import api from 'services/api'

type PageProps = {
  subscriptions: Subscription[]
}

export default function SubscriptionsPage({ subscriptions }: PageProps): ReactElement {
  return (
    <>
      <Head>
        <title> Subscriptions | Pokémon Tournament </title>
      </Head>
      <SubscriptionPage subscriptions={subscriptions}></SubscriptionPage>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context): Promise<any> => {
  const data = await api.findAllSubscriptions()

  return {
    props: {
      subscriptions: data,
    },
  }
}
