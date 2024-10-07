import React, { ReactNode, useEffect, useState } from 'react'
import { Stack } from '@chakra-ui/react'
import {
  Container,
  Box,
  P,
  VStack,
  H1,
} from '@northlight/ui'
import { ExcelDropzone, ExcelRow } from './../excel-dropzone.jsx'
import users from '../users.js'
import scores from '../scores.js'
import { useUserLogic } from '../context/UserLogicContext.js'
import { color } from '../theme/colors.js'
import { UserLogicContextProps } from '../context/types.js'

export default function MainSection() {


  const userLogic: UserLogicContextProps | undefined = useUserLogic();
  if (!userLogic) return;

  useEffect(() => {
    userLogic.instance.clear();
    userLogic.insertUserIdList(users);
    userLogic.insertUserIdScoreList(scores);
  }, []);

  function handleSheetData(data: ExcelRow[]) {
    if (!userLogic) return;
    userLogic.insertDataList(data);
  }

  return (
    <Stack backgroundColor={color['background-200']} w={"65%"} h={"37em"} alignSelf={"flex-end"} justifyContent={"center"} borderRadius={30} marginLeft={5}>
    <Container overflow={"scroll"}  w={"100%"}>
      <Container color={color['text-100']} >
        <H1 marginBottom="4" style={{ color: color['text-100'] }}>Try it out!</H1>
        <VStack spacing={10}>
              <P style={{ color: color['text-100'] }} w={"full"} textAlign={"left"}>
                Drop the excel file scores.xlsx here:
              </P>

          <Box w={"100%"}>
            <ExcelDropzone
              onSheetDrop={handleSheetData}
              label="Import excel file here"
            />
          </Box>

        </VStack>
      </Container>
    </Container>
    </Stack>
  )
}
