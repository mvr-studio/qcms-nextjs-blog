import { useEffect } from 'react'
import { Avatar, Box, Button, HStack, Spinner, Stack, Text } from '@chakra-ui/react'
import useSWR from 'swr'
import QUERY_ME from 'gql/QUERY_ME.gql'
import gqlFetcher from 'utils/gqlFetcher'
import { useRouter } from 'next/router'
import { FiFile, FiList } from 'react-icons/fi'

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
        <Button leftIcon={<FiFile />}>Posts</Button>
        <Button leftIcon={<FiList />}>Categories</Button>
      </HStack>
      <Box>{children}</Box>
    </Stack>
  )
}

export default AdminLayout
