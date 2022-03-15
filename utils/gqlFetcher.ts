import { GraphQLClient } from 'graphql-request'

const graphQLClient = new GraphQLClient(process.env.NEXT_PUBLIC_API_URL || '', {
  credentials: 'include',
  mode: 'cors'
})

const gqlFetcher = (query: string, variables?: Record<string, any>) => graphQLClient.request(query, variables)

export default gqlFetcher
