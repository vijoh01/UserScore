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

export default function Footer() {

    return (
        <Container maxW="full" h={10} backgroundColor={color['background-300']} position={"absolute"} bottom={0}>
            <HStack justifyContent={"flex-end"} justifyItems={"flex-end"} justifySelf={"flex-end"} alignItems={"center"} h={"full"}>
                    <P textAlign={"right"} style={{color: color['text-100'], fontSize: 12}}>Made by Viktor Johansson for Mediatool</P>
            </HStack >
        </Container >
    )
}