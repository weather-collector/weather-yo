import {addDays} from 'date-fns'
import React, {InputHTMLAttributes, useState} from "react"
import {useField, useFormikContext} from "formik"
import DatePicker, {registerLocale} from "react-datepicker"
import uk from 'date-fns/locale/uk'
import "react-datepicker/dist/react-datepicker.css"
import {convertDateToString, getDateXDaysAgo} from '../../../utils/dateConverters'
import * as Styles from './styles'


registerLocale('uk', uk)


interface DatepickerProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  error: boolean
  caption?: string
  placeholder?: string
  width?: string
}

const DatePickerField = ({name, label, error, caption = '', width, placeholder, ...rest}: DatepickerProps) => {
  const {setFieldValue} = useFormikContext()
  const [field] = useField(name)

  const [startDate, setStartDate] = useState<Date | null>(new Date())
  const [endDate, setEndDate] = useState<Date | null>(null)

  const onChangeHandler = (dates: Array<Date>) => {
    const [from, to] = dates.map(date => convertDateToString(date))
    setFieldValue(field.name, `${from} - ${to}`)

    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)
  }

  return (
    <Styles.DatePickerWrapper>
      <Styles.InputWrapper isCaption={!!caption} width={width}>
        <Styles.Label htmlFor={name}>{label}</Styles.Label>
        <Styles.Input
          component={DatePicker}
          dateFormat={'dd.MM.yyyy'}
          selectsRange
          startDate={startDate}
          endDate={endDate}
          maxDate={new Date()}
          locale={'uk'}
          error={`${error}`}
          id={name}
          placeholder={placeholder}
          {...field}
          {...rest}
          onChange={onChangeHandler}
        />
        <Styles.InputCaption>{caption}</Styles.InputCaption>
      </Styles.InputWrapper>

      <DatepickerShorthands
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        setFieldValue={setFieldValue}
        fieldName={name}
      />
    </Styles.DatePickerWrapper>
  )
}

type DatepickerShorthandsPorps = {
  setStartDate: (date: Date) => void
  setEndDate: (date: Date) => void
  setFieldValue: (name: string, datesValue: string) => void
  fieldName: string
}

export const DatepickerShorthands = ({setStartDate, setEndDate, setFieldValue, fieldName}: DatepickerShorthandsPorps) => {

  const setDatesHandler = (period: number) => {
    setStartDate(getDateXDaysAgo(period))
    setEndDate(new Date())
    setFieldValue(fieldName, `${convertDateToString(getDateXDaysAgo(period))} - ${convertDateToString(new Date())}`)
  }

  return (
    <Styles.DateShorthands>
      <Styles.DateShorthandButton type={'button'} onClick={() => setDatesHandler(10)}>
        Декада
      </Styles.DateShorthandButton>
      <Styles.Divider />
      <Styles.DateShorthandButton type={'button'} onClick={() => setDatesHandler(30)}>
        Місяць
      </Styles.DateShorthandButton>
      <Styles.Divider />
      <Styles.DateShorthandButton type={'button'} onClick={() => setDatesHandler(90)}>
        Квартал
      </Styles.DateShorthandButton>
    </Styles.DateShorthands>
  )
}

export default DatePickerField
