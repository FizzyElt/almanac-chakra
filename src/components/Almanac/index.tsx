import React, { useState } from 'react'
import { Box, Grid, GridItem, Text, Heading, Center } from '@chakra-ui/react'
import Month from './Month'
import format from 'date-fns/format'

export default function Almanac() {
  const [year, setYear] = useState<number>(new Date().getFullYear())

  const today = format(Date.now(), 'yyyy/MM/dd')

  return (
    <Grid
      gap={4}
      templateColumns='repeat(4,1fr)'
      borderRadius='lg'
      bgColor='gray.700'
      p='3'
    >
      <GridItem colSpan={4}>
        <Center>
          <Heading>{year}年</Heading>
        </Center>
      </GridItem>

      {Array.from({ length: 12 }, (_, index) => {
        return (
          <GridItem>
            <Month year={year} month={index} today={today} />
          </GridItem>
        )
      })}
    </Grid>
  )
}
