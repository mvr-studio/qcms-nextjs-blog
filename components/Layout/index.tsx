import { Box, Container } from '@chakra-ui/react'
import Footer from '../Footer'
import Navbar from '../Navbar'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Container display="flex" flexDirection="column" minHeight="100vh" maxWidth="container.md">
      <Navbar />
      <Box flex={1}>{children}</Box>
      <Footer />
    </Container>
  )
}

export default Layout
