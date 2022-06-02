import {Formik, FormikProps} from 'formik'
import React, {useState} from 'react'
import {useAppDispatch} from '../../../hooks/redux'
import {reportSlice} from '../../../store/reducers/ReportSlice'
import CheckBox from '../../shared/Checkbox'
import {weatherIndicators} from './constants'
import * as Styles from './styles'


interface ValuePickerForm {
  checkedValues: string[]
}

const ValuePicker = () => {
  const dispatch = useAppDispatch()
  const initialValues: ValuePickerForm = {
    checkedValues: weatherIndicators.map(el => el.name),
  }

  const checkBoxesHandler = (values: ValuePickerForm) => {
    const activeWeatherIndicators = weatherIndicators.filter((el) => values.checkedValues.includes(el.name))
    dispatch(reportSlice.actions.setSelectedIndicators(activeWeatherIndicators))
  }

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values: ValuePickerForm) => checkBoxesHandler(values)}
      >
        {(formik: FormikProps<ValuePickerForm>) => {
          return (
            <Styles.ValuePickerForm
              onChange={() => formik.handleSubmit()}
            >
              {weatherIndicators.map((el, index) => (
                <CheckBox
                  key={index}
                  label={el.label}
                  name={'checkedValues'}
                  value={el.name}
                  isChecked={formik.values.checkedValues.includes(el.name)}
                  iconSrc={el.iconSrc}
                />
              ))}
            </Styles.ValuePickerForm>
          )
        }}
      </Formik>
    </>
  )
}

export default ValuePicker
