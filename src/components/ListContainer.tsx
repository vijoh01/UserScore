import React, { useState } from 'react'
import { Box, List, ListItem } from '@chakra-ui/react'
import {
  Container,
  P,
  VStack,
  HStack,
  H1,
  H4,
} from '@northlight/ui'
import { useUserLogic } from '../context/UserLogicContext.js'
import ScoreList from './ScoreList.js'
import { color } from '../theme/colors.js'
import { User } from '../userLogic/types.js'

export default function ListContainer() {
  const [clickedUser, setClickedUser] = useState<User | null>(null);
  const userLogic = useUserLogic();
  if (!userLogic) return;

  const ListItemComponent = ({item}: { item: User }) => (
    <ListItem key={item._id} onClick={(value) => setClickedUser(item)} cursor={"pointer"}

      backgroundColor={clickedUser?._id === item._id ? "black" : color['background-100']}
      style={{
        padding: 10, borderRadius: 10,
      }}
      _hover={{ backgroundColor: color['primary-300'] }}>

      <P style={{ color: color['text-100'], fontSize: 12, marginLeft: 5 }}>{item.name} - {item.score}</P>

    </ListItem>
  )

  return (
    <Box w="65%" minW={300} maxW={480} backgroundColor={color['background-100']} marginTop={10} padding={2} alignSelf={"flex-end"}>
      <VStack w="100%" backgroundColor={color['background-200']} overflow={"scroll"} minW={300} borderRadius={30} >
        <H1 marginTop={5} style={{ color: color['text-100'], fontSize: 30 }}>Score</H1>

        <HStack w={"95%"} minH={"full"} maxH={"30rem"} overflow={"scroll"} alignItems={"flex-start"} paddingTop={5} marginTop={10} backgroundColor={color['background-300']} borderTopRadius={30}>

          <Container maxW="3xl" h={"100%"}>
            <VStack minH={"30rem"}>
              <H4 marginBottom="4" style={{ color: color['text-100'], fontSize: 18 }}>Users</H4>
              <List spacing={5} paddingBottom={59} width={"100%"} maxW={400}>

                {userLogic.data?.nameList.map((item: User) =>
                  <ListItemComponent item={item}/>
                )}
              </List>

            </VStack>
          </Container>
          {clickedUser &&
            <Container maxW="3xl" minH={"100%"}>
              <ScoreList user={clickedUser}></ScoreList>
            </Container>
          }
        </HStack>
      </VStack>
    </Box>
  )
}