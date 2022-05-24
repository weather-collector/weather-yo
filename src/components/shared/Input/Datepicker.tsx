import {subDays} from 'date-fns'
import React, {InputHTMLAttributes, useState} from "react"
import {useField, useFormikContext} from "formik"
import DatePicker, {registerLocale} from "react-datepicker"
import uk from 'date-fns/locale/uk'
import "react-datepicker/dist/react-datepicker.css"
import {convertDateToString} from '../../../utils/dateConverters'
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

  const [startDate, setStartDate] = useState<Date | null>(subDays(new Date(), 14))
  const [endDate, setEndDate] = useState<Date | null>(subDays(new Date(), 5))

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
          maxDate={subDays(new Date(), 5)}
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

type datepickerShorthandsProps = {
  setStartDate: (date: Date) => void
  setEndDate: (date: Date) => void
  setFieldValue: (name: string, datesValue: string) => void
  fieldName: string
}

const DatepickerShorthands = ({setStartDate, setEndDate, setFieldValue, fieldName}: datepickerShorthandsProps) => {

  const setDatesHandler = (period: number) => {
    setStartDate(subDays(new Date(), period + 4))
    setEndDate(subDays(new Date(), 4))
    setFieldValue(fieldName, `${convertDateToString(subDays(new Date(), period + 4))} - ${convertDateToString(subDays(new Date(), 4))}`)
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
