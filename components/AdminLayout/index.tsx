import { useEffect } from 'react'
import { Avatar, Box, Button, HStack, Spinner, Stack, Text } from '@chakra-ui/react'
import useSWR from 'swr'
import QUERY_ME from 'gql/QUERY_ME.gql'
import gqlFetcher from 'utils/gqlFetcher'
import { useRouter } from 'next/router'

interface AdminLayoutProps {
  children: React.ReactNode
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const router = useRouter()
  const { data, error } = useSWR(QUERY_ME, gqlFetcher)
  const isLoading = !data && !error
  const user = data?.me

  useEffect(() => {
    if (!isLoading && user?.role !== 'ADMIN') router.replace('/admin/login')
  }, [isLoading, user, router])

  if (isLoading) return <Spinner boxSize="3rem" />

  return (
    <Stack>
      <HStack>
        <Button>Posts</Button>
        <Button>Categories</Button>
        <Box flex={1} />
        <Button variant="ghost" leftIcon={<Avatar name={user?.name} size="sm" />} size="sm">
          {user?.name}
        </Button>
      </HStack>
      <Box>{children}</Box>
    </Stack>
  )
}

export default AdminLayout
