import { SimpleForm } from '@mvr-studio/protochakra'
import { AdminLayout } from 'components'
import MUTATION_CREATE_POST from 'gql/MUTATION_CREATE_POST.gql'
import QUERY_CATEGORIES from 'gql/QUERY_CATEGORIES.gql'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import { ApiTypes } from 'types'
import gqlFetcher from 'utils/gqlFetcher'

const NewPost = () => {
  const router = useRouter()
  const { data: categoriesData } = useSWR(QUERY_CATEGORIES, gqlFetcher)
  const categories = categoriesData?.categories?.edges
  const categoriesOptions = categories?.map((category: ApiTypes['Category']) => ({
    label: category.name,
    value: category.id
  }))

  const NEW_POST_FORM = [
    { label: 'Title', name: 'name', isRequired: true },
    { label: 'Image URL', name: 'imageUrl' },
    { label: 'Content', name: 'content', type: 'textarea' },
    { label: 'Category', name: 'categoryId', type: 'select', selectOptions: categoriesOptions }
  ]

  const onSubmit = async (data: Record<string, string>) => {
    const categories = {
      connect: [{ id: data.categoryId }]
    }
    await gqlFetcher(MUTATION_CREATE_POST, {
      data: {
        ...data,
        categories
      }
    })
    router.push('/admin')
  }

  return (
    <AdminLayout>
      <SimpleForm fields={NEW_POST_FORM} onSubmit={onSubmit} />
    </AdminLayout>
  )
}

export default NewPost
