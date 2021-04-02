import React, { useState } from 'react'
import {
  Grid,
  GridItem,
  Heading,
  Center,
  IconButton,
  HStack,
} from '@chakra-ui/react'
import Month from './Month'
import format from 'date-fns/format'
import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons'

export default function Almanac() {
  const [year, setYear] = useState<number>(new Date().getFullYear())

  const handleIncrement = () => {
    setYear((prev) => prev + 1)
  }

  const handleDecrement = () => {
    setYear((prev) => prev - 1)
  }

  const today = format(Date.now(), 'yyyy/MM/dd')

  const iconBtnStyle = {
    bgColor: 'teal.500',
    _hover: {
      bgColor: 'teal.300',
    },
  }

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
          <HStack align='center' spacing={6}>
            <IconButton
              {...iconBtnStyle}
              aria-label='decrement'
              icon={<ChevronLeftIcon color='white' />}
              onClick={handleDecrement}
            />
            <Heading color='white' lineHeight='1.5'>
              {year}年
            </Heading>
            <IconButton
              {...iconBtnStyle}
              aria-label='increment'
              icon={<ChevronRightIcon color='white' />}
              onClick={handleIncrement}
            />
          </HStack>
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
