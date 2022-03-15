import { HStack, Button } from '@chakra-ui/react'
import useSWR from 'swr'
import QUERY_CATEGORIES from 'gql/QUERY_CATEGORIES.gql'
import gqlFetcher from 'utils/gqlFetcher'
import type { ApiTypes } from 'types'

const CategoriesBar = () => {
  const { data } = useSWR(QUERY_CATEGORIES, gqlFetcher)
  const categories: ApiTypes['Category'][] = data?.categories?.edges

  return (
    <HStack>
      {categories?.map((category) => (
        <Button key={category.id} variant="outline">
          {category.name}
        </Button>
      ))}
    </HStack>
  )
}

export default CategoriesBar
