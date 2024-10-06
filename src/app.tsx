import React, { ReactNode } from 'react'
import { Link } from '@chakra-ui/react'
import {
  Container,
  Box,
  P,
  VStack,
  HStack,
  H1,
  H2,
} from '@northlight/ui'
import { palette } from '@northlight/tokens'
import { UserLogicProvider } from './context/UserLogicContext.js'
import MainSection from './components/MainSection.js'
import ListContainer from './components/ListContainer.js'
import Header from './components/Header.js'
import { color } from './theme/colors.js'
import Footer from './components/Footer.js'


export default function App() {

  return (
    <UserLogicProvider>
      <Container h={"100vh"} maxW={"full"} backgroundColor={color['background-100']} padding={0} margin={0} outline={"none"} flexWrap={"wrap"}>
      <Header />

      <HStack flex={"flex"} h={"78%"} minW={400}>
        <ListContainer />
        <MainSection />
        
      </HStack>
      
      </Container>
      <Footer />

    </UserLogicProvider>
  ) 
}
