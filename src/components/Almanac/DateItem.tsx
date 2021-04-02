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
      <Center h='full' color={'transparent'}>
        {day}
      </Center>
    )
  }

  const hoverStyled = {
    bgColor: 'teal.400',
  }

  return (
    <Center
      h='full'
      cursor='pointer'
      borderRadius='lg'
      color={'white'}
      bgColor={isToday ? 'red.500' : 'transparent'}
      transition='0.3s'
      _hover={hoverStyled}
    >
      {day}
    </Center>
  )
}
