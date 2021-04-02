import addDays from 'date-fns/addDays'
import format from 'date-fns/format'
import startOfWeek from 'date-fns/startOfWeek'

export default function getMonthDayList(
  year: number,
  month: number
): {
  date: string
  day: number
  isCurrentMonth: boolean
}[] {
  const startDate = startOfWeek(new Date(year, month, 1))

  return Array.from({ length: 42 }, (_, index) => {
    const currentDate = addDays(startDate, index)
    return {
      date: format(currentDate, 'yyyy/MM/dd'),
      day: currentDate.getDate(),
      isCurrentMonth: currentDate.getMonth() === month,
    }
  })
}
