import { Flex, Link, Input, IconButton } from '@chakra-ui/react'
import NextLink from 'next/link'
import { FiUser } from 'react-icons/fi'

const Navbar = () => {
  return (
    <Flex justify="space-between" align="center" paddingY="0.5rem">
      <NextLink href="/" passHref>
        <Link fontSize="1.25rem" fontWeight={500}>
          Blog Sample
        </Link>
      </NextLink>
      <NextLink href="/admin" passHref>
        <IconButton variant="ghost" icon={<FiUser />} aria-label={''} />
      </NextLink>
    </Flex>
  )
}

export default Navbar
