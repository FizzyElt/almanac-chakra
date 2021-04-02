import React from 'react'
import { GridItem, Center } from '@chakra-ui/react'

export default function WeekBar() {
  const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  return (
    <>
      {week.map((day) => {
        return (
          <GridItem colSpan={1} key={day}>
            <Center color='green.300'>{day}</Center>
          </GridItem>
        )
      })}
    </>
  )
}
