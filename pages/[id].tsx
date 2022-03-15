import { Box, Heading, Text } from '@chakra-ui/react'
import { NextPage } from 'next'
import gqlFetcher from 'utils/gqlFetcher'
import QUERY_POSTS from 'gql/QUERY_POSTS.gql'
import QUERY_POST from 'gql/QUERY_POST.gql'
import { ApiTypes } from 'types'

interface ReadPostProps {
  post: ApiTypes['Post']
}

const ReadPost: NextPage<ReadPostProps> = ({ post }) => {
  console.log(post)

  return (
    <Box>
      <Heading size="md">{post.name}</Heading>
      <Text marginTop="1rem">{post.content}</Text>
    </Box>
  )
}

export async function getStaticProps({ params }: any) {
  const response = await gqlFetcher(QUERY_POST, { id: params.id })
  return {
    props: {
      post: response.postById
    }
  }
}

export async function getStaticPaths() {
  const response = await gqlFetcher(QUERY_POSTS)
  const posts = response?.posts?.edges?.map((post: ApiTypes['Post']) => ({ params: { id: post.id } }))

  return {
    paths: posts,
    fallback: true
  }
}

export default ReadPost
