import client from './client'
import { Subscription } from 'types/subscription'

const findAllSubscriptions = async (): Promise<Subscription[]> => {
  const { data }: { data: Subscription[] } = await client.get('/api/v1/subscriptions')

  return data
}

const findSubscriptionById = async (id: number): Promise<Subscription> => {
  const { data }: { data: Subscription } = await client.get(`/api/v1/subscriptions/${id}`)

  return data
}

export default { findAllSubscriptions, findSubscriptionById }
