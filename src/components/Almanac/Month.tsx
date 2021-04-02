import React from 'react'
import {
  Grid,
  GridItem,
  Text,
  Center,
  HStack,
  IconButton,
} from '@chakra-ui/react'
import WeekBar from './WeekBar'
import DateItem from './DateItem'
import getMonthDayList from './getMonthDayList'

type MonthProps = {
  year: number
  month: number
  today: string
}

export default function Month({ year, month, today }: MonthProps) {
  const monthDayList = getMonthDayList(year, month)

  return (
    <Grid
      p='3'
      gap={4}
      templateColumns='repeat(7,1fr)'
      borderRadius='lg'
      bgColor='gray.600'
      boxShadow='lg'
    >
      <GridItem colSpan={7}>
        <Center>
          <Text color='white' fontWeight='bold'>
            {month + 1}月
          </Text>
        </Center>
      </GridItem>

      <WeekBar />
      <GridItem colSpan={7}>
        <Grid
          gap={4}
          templateColumns='repeat(7,1fr)'
          templateRows='repeat(6,1fr)'
        >
          {monthDayList.map((item) => {
            return (
              <GridItem h='8' colSpan={1} rowSpan={1} key={item.date}>
                <DateItem {...item} isToday={today === item.date} />
              </GridItem>
            )
          })}
        </Grid>
      </GridItem>
    </Grid>
  )
}
