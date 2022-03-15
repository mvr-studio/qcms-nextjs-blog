import { GraphQLClient } from 'graphql-request'

const graphQLClient = new GraphQLClient('http://localhost:3050/graphql', {
  credentials: 'include',
  mode: 'cors'
})

const gqlFetcher = (query: string, variables?: Record<string, any>) => graphQLClient.request(query, variables)

export default gqlFetcher
