import React, { useState } from 'react'
import { List, ListItem } from '@chakra-ui/react'
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

export default function ListContainer() {
  const [counter, setCounter] = useState(989);
  const [clickedUser, setClickedUser] = useState(null);
  const userLogic = useUserLogic();

  return (
    <VStack w="30%" h={"full"} backgroundColor={color['background-200']} overflow={"scroll"} minW={300}>
      <H1 marginTop={10} style={{ color: color['text-100'], fontSize: 30 }}>Score</H1>
      <HStack w={"full"} h={"full"} alignItems={"flex-start"} marginTop={10}>
        <Container maxW="3xl" h={"100%"}>
          <VStack h={"full"}>
            <H4 marginBottom="4" style={{ color: color['text-100'], fontSize: 18 }}>Users</H4>
            <List spacing={5} paddingBottom={59} width={"100%"} maxW={400}>

              {userLogic?.data?.nameList.map((item: any) =>
                <ListItem key={item._id} onClick={(value) => { setClickedUser(item) }} cursor={"pointer"} background={color['background-100']} style={{ padding: 10, borderRadius: 10, backgroundColor: clickedUser?._id === item._id && "black" }} _hover={{ backgroundColor: color['primary-300'] }}>
                  <P style={{ color: color['text-100'], fontSize: 12, marginLeft: 5 }}>{item.name} - {item.score}</P>

                </ListItem>
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
  )
}