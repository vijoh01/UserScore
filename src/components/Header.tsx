import React, { ReactNode, useState } from 'react'
import { Input, Link, List, ListItem } from '@chakra-ui/react'
import {
    Container,
    Box,
    P,
    VStack,
    HStack,
    H1,
    H2,
    Button,
    H3,
    H6,
    H5,
    Form,
    TextField,
    IconButton,
} from '@northlight/ui'

import { PlusDuo } from '@northlight/icons'
import { palette } from '@northlight/tokens'
import { useUserLogic } from '../context/UserLogicContext';
import { color } from '../theme/colors';

export default function Header() {

    const [name, setName] = useState(null);
    const [score, setScore] = useState(null);
    const userLogic = useUserLogic();

    return (
        <Container maxW="full" h={"20vh"} backgroundColor={color['background-300']}>

            <HStack justifyContent={"center"} alignItems={"center"} h={"full"}>

                <Container maxW={"35em"} minW={"20em"} justifyContent={"center"} alignItems={"center"}>
                  
                    <H1 justifySelf={"center"} textAlign={"center"} marginBottom={10} style={{fontSize: 40, background: `linear-gradient(to right, ${color['accent-200']}, ${color['primary-100']})`, backgroundClip: "text", color: "transparent", WebkitBackgroundClip: "text"}}>Rank Time</H1>
                       
                    <Form initialValues={{ name: "test" }} onSubmit={() => { }}>
                        <HStack justifyContent={"center"} alignItems={"center"}>
                            <H1></H1>
                            <Input placeholder='test' name={"test"} onChange={(event: any) => setName(event.target.value)} />
                            <Box w={"10em"}>
                                <Input placeholder='test' name={"test"} onChange={(event: any) => setScore(event.target.value)} />
                            </Box>
                            <IconButton alignSelf={"flex-end"} justifyContent={"center"} backgroundColor={"black"} alignItems={"center"} aria-label='PlusDuo' onClick={() => {
                                if (!name || !score) {
                                    alert("You must fill in the fields.");
                                    return;
                                }
                                const scoreNumber = parseInt(score);
                                if (isNaN(scoreNumber)) {
                                    alert("Score must be a number");
                                    return;
                                }
                                userLogic?.insertUserScore(name, scoreNumber)
                            }
                            }>
                            <PlusDuo style={{color: "white"}}/>
                        </IconButton>
                    </HStack>
                </Form>
        </Container>
            </HStack >
        </Container >
    )
}