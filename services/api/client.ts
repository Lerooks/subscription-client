import axios from 'axios'

const baseURL = process.env.NEXT_PUBLIC_API_URL

const client = axios.create({
  baseURL,
})

export default client
