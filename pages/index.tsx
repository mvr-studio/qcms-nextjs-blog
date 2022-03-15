import { Box, Stack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { CategoriesBar } from 'components'
import { Card } from '@mvr-studio/protochakra'
import QUERY_POSTS from 'gql/QUERY_POSTS.gql'
import gqlFetcher from 'utils/gqlFetcher'
import useSWR from 'swr'
import { ApiTypes } from 'types'

const Home: NextPage = () => {
  const { data } = useSWR(QUERY_POSTS, gqlFetcher)
  const posts: ApiTypes['Post'][] = data?.posts?.edges
  console.log(posts)

  return (
    <Box>
      <CategoriesBar />
      <Stack marginTop="1rem">
        {posts?.map((post) => (
          <Card key={post.id}>{post.name}</Card>
        ))}
      </Stack>
    </Box>
  )
}

export default Home
