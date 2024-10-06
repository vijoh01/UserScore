import React from 'react'
import { List, ListItem } from '@chakra-ui/react'
import {
  Container,
  P,
  VStack,
  H4,
} from '@northlight/ui'
import { palette } from '@northlight/tokens'
import { useUserLogic } from '../context/UserLogicContext';
import { color } from '../theme/colors';

export default function ScoreList({user}) {

  const userLogic = useUserLogic();


  
  return (
    <Container maxW="4xl" minH={"100%"} backgroundColor={color['background-100']} borderRadius={30} paddingTop={10} marginBottom={20} overflow={"scroll"}>
    <VStack>
      <H4 marginBottom="4" style={{color: color['text-100']}}>{user.name}</H4>
      <List spacing={1} marginBottom={30}>
      {userLogic?.instance?.getScoresForId(user._id)?.map((item: any) => 
        <ListItem key={item._id} style={{padding: 10}} width={"100%"} maxW={400}>
        <P style={{color: color['text-100'], fontSize: 12, width: "100%"}}>{item}</P>

        </ListItem>
      )}
      
      </List>
    </VStack>
    
    
  </Container>
  )
}