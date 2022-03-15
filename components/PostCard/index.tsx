import { AspectRatio, Box, Flex, Heading, Image, Link, Text } from '@chakra-ui/react'
import { Card } from '@mvr-studio/protochakra'
import NextLink from 'next/link'

interface PostCardProps {
  id: string
  title: string
  imageUrl: string
  children: React.ReactNode
}

const PostCard = ({ id, title, children, imageUrl }: PostCardProps) => {
  return (
    <Card>
      <Flex>
        <NextLink href={`/${id}`} passHref>
          <AspectRatio flex={1} ratio={1.75} cursor="pointer">
            <Image src={imageUrl} alt={`${title} cover`} borderRadius="0.25rem" />
          </AspectRatio>
        </NextLink>
        <Box flex={2} marginLeft="1.5rem">
          <NextLink href={`/${id}`} passHref>
            <Link fontSize="1.25rem" fontWeight={500}>
              {title}
            </Link>
          </NextLink>
          <Text marginTop="1rem" fontSize="14px">
            {children}
          </Text>
        </Box>
      </Flex>
    </Card>
  )
}

export default PostCard
