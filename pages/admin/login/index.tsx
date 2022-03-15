import { Center, Heading } from '@chakra-ui/react'
import { Card, SimpleForm } from '@mvr-studio/protochakra'
import gqlFetcher from 'utils/gqlFetcher'
import MUTATION_LOG_IN from 'gql/MUTATION_LOG_IN.gql'

const LOGIN_FORM_FIELDS = [
  { name: 'email', label: 'Email', type: 'email', isRequired: true },
  { name: 'password', label: 'Password', type: 'password', isRequired: true }
]

const Login = () => {
  const onSubmit = async (data: Record<string, string>) => {
    await gqlFetcher(MUTATION_LOG_IN, data)
  }

  return (
    <Center minHeight="80vh">
      <Card maxWidth="32rem" width="100%">
        <Heading size="md" marginBottom="1rem">
          Sign In
        </Heading>
        <SimpleForm fields={LOGIN_FORM_FIELDS} onSubmit={onSubmit} />
      </Card>
    </Center>
  )
}

export default Login
