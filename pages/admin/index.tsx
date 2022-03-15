import { AdminLayout } from 'components'
import useSWR from 'swr'
import QUERY_POSTS from 'gql/QUERY_POSTS.gql'
import gqlFetcher from 'utils/gqlFetcher'
import { Button, Stack } from '@chakra-ui/react'
import { ApiTypes } from 'types'
import { FiPlus } from 'react-icons/fi'
import NextLink from 'next/link'

const AdminDashboard = () => {
  const { data } = useSWR(QUERY_POSTS, gqlFetcher)
  const posts = data?.posts?.edges
  console.log(posts)

  return (
    <AdminLayout>
      <NextLink href="/admin/posts/new" passHref>
        <Button colorScheme="teal" leftIcon={<FiPlus />}>
          Create Post
        </Button>
      </NextLink>
      <Stack marginTop="1rem">
        {posts?.map((post: ApiTypes['Post']) => (
          <Button
            key={post.id}
            variant="ghost"
            justifyContent="flex-start"
            borderBottom="1px solid"
            borderRadius={0}
            borderColor="gray.200"
          >
            {post.name}
          </Button>
        ))}
      </Stack>
    </AdminLayout>
  )
}

export default AdminDashboard
