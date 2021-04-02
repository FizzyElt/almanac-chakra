import React from 'react'
import { Center } from '@chakra-ui/react'

type DateItem = {
  date: string
  day: number
  isCurrentMonth: boolean
  isToday: boolean
}

export default function DateItem({
  date,
  day,
  isCurrentMonth,
  isToday,
}: DateItem) {
  if (!isCurrentMonth) {
    return (
      <Center h='10' w='10' color={'transparent'}>
        {day}
      </Center>
    )
  }

  const hoverStyled = {
    bgColor: 'teal.400',
  }

  return (
    <Center
      cursor='pointer'
      h='10'
      w='10'
      borderRadius='full'
      color={'white'}
      bgColor={isToday ? 'red.500' : 'transparent'}
      transition='0.3s'
      _hover={hoverStyled}
    >
      {day}
    </Center>
  )
}
