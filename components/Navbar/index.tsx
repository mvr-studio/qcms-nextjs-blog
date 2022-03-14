import { Flex, Heading, Input } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <Flex justify="space-between" align="center" paddingY="0.5rem">
      <Heading size="md">Sample Blog</Heading>
      <Input maxWidth="20rem" />
    </Flex>
  )
}

export default Navbar
