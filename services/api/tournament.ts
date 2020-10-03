import client from './client'
import { Subscription } from 'types/subscription'

const findAllSubscriptions = async (): Promise<Subscription[]> => {
  const { data }: { data: Subscription[] } = await client.get('/api/v1/subscriptions')

  return data
}

export default { findAllSubscriptions }
