export function convertDateToString(date: Date) {
  if (date) {
    let year = date.getFullYear()
    let day: number | string = date.getDate()
    if (day < 10) day = `0${day}`
    let month: number | string = date.getMonth() + 1
    if (month < 10) month = `0${month}`

    return `${day}.${month}.${year}`
  }
  return ''
}


export function getDateXDaysAgo(numOfDays: number, date = new Date()) {
  const daysAgo = new Date(date.getTime())
  daysAgo.setDate(date.getDate() - numOfDays)
  return daysAgo
}
