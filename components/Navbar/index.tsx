import { Flex, Link, Input, IconButton, Avatar, Button } from '@chakra-ui/react'
import NextLink from 'next/link'
import { FiUser } from 'react-icons/fi'
import useSWR from 'swr'
import QUERY_ME from 'gql/QUERY_ME.gql'
import gqlFetcher from 'utils/gqlFetcher'

const Navbar = () => {
  const { data } = useSWR(QUERY_ME, gqlFetcher)
  const user = data?.me

  return (
    <Flex justify="space-between" align="center" paddingY="0.5rem">
      <NextLink href="/" passHref>
        <Link fontSize="1.25rem" fontWeight={500}>
          Blog Sample
        </Link>
      </NextLink>
      {data ? (
        <NextLink href="/admin" passHref>
          <Button variant="ghost" leftIcon={<Avatar name={user?.name} size="xs" />} size="sm">
            {user?.name}
          </Button>
        </NextLink>
      ) : (
        <NextLink href="/admin" passHref>
          <IconButton variant="ghost" icon={<FiUser />} aria-label={''} />
        </NextLink>
      )}
    </Flex>
  )
}

export default Navbar
