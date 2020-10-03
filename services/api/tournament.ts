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

const saveSubscription = async (subscription: Subscription): Promise<Subscription> => {
  const { data }: { data: Subscription } = await client.post(`/api/v1/subscriptions`, subscription)

  return data
}

const updateSubscription = async (subscription: Subscription): Promise<Subscription> => {
  const { data }: { data: Subscription } = await client.put(`/api/v1/subscriptions/${subscription.id}`, subscription)

  return data
}

const deleteSubscription = async (id: number): Promise<any> => {
  const { data }: { data: Subscription } = await client.delete(`/api/v1/subscriptions/${id}`)
}

export default { findAllSubscriptions, findSubscriptionById, saveSubscription, updateSubscription, deleteSubscription }
