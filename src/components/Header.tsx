import React, { useState } from 'react'
import { Input } from '@chakra-ui/react'
import {
    Container,
    Box,
    HStack,
    H1,
    Form,
    IconButton,
} from '@northlight/ui'

import { PlusDuo } from '@northlight/icons'
import { useUserLogic } from '../context/UserLogicContext';
import { color } from '../theme/colors';
import { UserLogicContextProps } from '../context/types';

export default function Header() {

    const [name, setName] = useState('');
    const [score, setScore] = useState('');
    const userLogic: UserLogicContextProps | undefined = useUserLogic();
    if (!userLogic) return;

    const handleClick = () => {
        if (!name || !score) {
            alert("You must fill in the fields.");
            return;
        }
      
        const scoreInt = parseInt(score);
        if (isNaN(scoreInt)) {
            alert("Score must be a number");
            return;
        }
        userLogic.insertUserScore(name, scoreInt);
    }
    

    return (
        <Container maxW="95%" h={"20vh"} minH={200} backgroundColor={color['background-300']} borderBottomRadius={30}>

            <HStack justifyContent={"center"} alignItems={"center"} h={"full"}>

                <Container maxW={"35em"} minW={"20em"} justifyContent={"center"} alignItems={"center"}>

                    <H1 justifySelf={"center"} textAlign={"center"} marginBottom={10} style={{
                        fontSize: 40,
                        background: `linear-gradient(to right, ${color['accent-200']}, ${color['primary-100']})`,
                        backgroundClip: "text", color: "transparent", WebkitBackgroundClip: "text"
                    }}>Rank Time</H1>

                    <Form initialValues={{ name: "test" }} onSubmit={handleClick}>
                        <HStack justifyContent={"center"} alignItems={"center"}>

                            <Input placeholder='Name' name={"name"} onChange={(event: any) => setName(event.target.value)} />
                            <Box w={"10em"}>
                                <Input placeholder='Score' name={"score"} onChange={(event: any) => setScore(event.target.value)} />
                            </Box>

                            <IconButton alignSelf={"flex-end"} justifyContent={"center"} backgroundColor={"black"}
                                alignItems={"center"} aria-label='Add User Score' onClick={handleClick}>
                                <PlusDuo style={{ color: "white" }} />
                            </IconButton>
                        </HStack>
                    </Form>
                </Container>
            </HStack >
        </Container >
    )
}