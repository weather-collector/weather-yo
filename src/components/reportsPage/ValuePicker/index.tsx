import {Formik, FormikProps, useField, useFormik} from 'formik'
import React, {useEffect, useMemo, useState} from 'react'
import {useAppDispatch, useAppSelector} from '../../../hooks/redux'
import {reportSlice} from '../../../store/reducers/ReportSlice'
import CheckBox from '../../shared/Checkbox'
import {weatherIndicators} from './constants'
import * as Styles from './styles'


interface ValuePickerForm {
  checkedValues: string[] | string
}

type ValuePickerProps = {
  activeTab: string
}

const ValuePicker = ({activeTab}: ValuePickerProps) => {
  const {selectedIndicators} = useAppSelector(state => state.reportReducer)
  const dispatch = useAppDispatch()

  const initialValues: ValuePickerForm = {
    checkedValues: selectedIndicators.map(el => el.name),
  }

  const checkBoxesHandler = (values: ValuePickerForm) => {
    if (typeof values.checkedValues === 'string'){
      values.checkedValues = [values.checkedValues]
    }
    const activeWeatherIndicators = weatherIndicators.filter((el) => values.checkedValues.includes(el.name))
    dispatch(reportSlice.actions.setSelectedIndicators(activeWeatherIndicators))
  }

  useEffect(() => {
    if (activeTab === '2') {
      dispatch(reportSlice.actions.setSelectedIndicators([weatherIndicators[0]]))
    } else {
      dispatch(reportSlice.actions.setSelectedIndicators(weatherIndicators))
    }
  }, [activeTab])

  return (
    <>
      <Formik
        enableReinitialize={true}
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
                  type={activeTab === '2' ? 'radio' : 'checkbox'}
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
