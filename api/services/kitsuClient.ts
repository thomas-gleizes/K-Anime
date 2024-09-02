import createClient from 'openapi-fetch'
import { paths } from '@kanime/types'

export const kitsuClient = createClient<paths>({
  baseUrl: 'https://kitsu.io/api/edge',
})
