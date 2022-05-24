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
