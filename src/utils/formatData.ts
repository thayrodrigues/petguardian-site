import dayjs from 'dayjs'

export const formatData = {
  inputDate: (date: string): string => {
    return dayjs(date).format('YYYY-MM-DD')
  },
}
