import React, { ReactElement } from 'react'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { Subscription } from 'types/subscription'
import EditSubscription from 'components/edit-subscription-page'
import Favicon from 'components/favicon'
import api from 'services/api'

interface Props {
  subscription: Subscription
}

export default function EditSubscriptionPage({ subscription }: Props): ReactElement {
  return (
    <>
      <Head>
        <title> Edit Subscription | Pokémon Tournament </title>
        <Favicon></Favicon>
      </Head>
      <EditSubscription initalSubscription={subscription}></EditSubscription>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context): Promise<any> => {
  const id: string = context.params.id as string
  const data = await api.findSubscriptionById(parseInt(id))

  return {
    props: {
      subscription: data,
    },
  }
}
