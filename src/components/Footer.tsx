import React from 'react'
import {
    Container,
    P,
    HStack,
} from '@northlight/ui'

import { color } from '../theme/colors';

export default function Footer() {

    return (
        <Container maxW="full" h={10} backgroundColor={color['background-300']} position={"absolute"} bottom={0}>

            <HStack justifyContent={"flex-end"} justifyItems={"flex-end"} justifySelf={"flex-end"} alignItems={"center"} h={"full"}>
                <P textAlign={"right"} style={{ color: color['text-100'], fontSize: 12 }}>Made by Viktor Johansson for Mediatool</P>
            </HStack >
            
        </Container >
    )
}