import React, { ReactNode, useEffect, useState } from 'react'
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
import { ExcelDropzone, ExcelRow } from './../excel-dropzone.jsx'
import users from '../users.js'
import scores from '../scores.js'
import { useUserLogic } from '../context/UserLogicContext.js'
import { color } from '../theme/colors.js'

export default function MainSection() {


  const userLogic = useUserLogic();

  useEffect(() => {
    userLogic?.instance.clear();
    userLogic?.insertUserIdList(users);
    userLogic?.insertUserIdScoreList(scores);
  }, []);




  function handleSheetData(data: ExcelRow[]) {
    userLogic?.insertDataList(data);


  }

  return (
    <Container flex={"flex"} h={"full"} w={"full"} alignContent={"center"} overflow={"scroll"}>
    <Container color={color['text-100']} >
      <H1 marginBottom="4" style={{color: color['text-100']}}>Try it out!</H1>
      <VStack spacing={10}>
        <VStack w={"full"}>
          <Box w={"full"}>
            <P style={{color: color['text-100']}}>
              Drop the excel file scores.xlsx here:
            </P>
          </Box>

        </VStack>
        <Box w={"100%"}>
        <ExcelDropzone
          onSheetDrop={handleSheetData}
          label="Import excel file here"
          
        />
        </Box>

      </VStack>
    </Container>
    </Container>
  )
}
