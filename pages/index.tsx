import { Box, Skeleton, Stack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { CategoriesBar, PostCard } from 'components'
import QUERY_POSTS from 'gql/QUERY_POSTS.gql'
import gqlFetcher from 'utils/gqlFetcher'
import useSWR from 'swr'
import { ApiTypes } from 'types'

const Home: NextPage = () => {
  const { data, error } = useSWR(QUERY_POSTS, gqlFetcher)
  const isLoading = !data && !error
  const posts: ApiTypes['Post'][] = data?.posts?.edges

  return (
    <Box>
      <CategoriesBar />
      {isLoading ? (
        <Stack marginTop="1rem" gap="1rem">
          <Skeleton height="4rem" />
          <Skeleton height="4rem" />
          <Skeleton height="4rem" />
        </Stack>
      ) : (
        <Stack marginTop="1rem" gap="1rem">
          {posts?.map((post) => (
            <PostCard key={post.id} id={post.id} title={post.name || ''} imageUrl={post.imageUrl || ''}>
              {post.content}
            </PostCard>
          ))}
        </Stack>
      )}
    </Box>
  )
}

export default Home
