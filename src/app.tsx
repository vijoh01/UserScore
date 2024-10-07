import React, { ReactNode } from 'react'
import { Link, Stack } from '@chakra-ui/react'
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
      <Container minH={"100vh"} minW={"100vw"} backgroundColor={color['background-100']} padding={0} margin={0} outline={"none"} flexWrap={"wrap"}>
      <Header />

      <HStack flex={"flex"} minH={"70vh"} justifyContent={"center"}>
        <ListContainer />
        <MainSection />
        
      </HStack>
      <Footer />
      
      </Container>

    </UserLogicProvider>
  ) 
}
