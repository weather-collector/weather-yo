import {Field, Form, Formik, FormikProps} from 'formik'
import React, {useState} from 'react'
import {COLORS} from '../../../styles/theme'
import CheckBox from '../../shared/Checkbox'
import Typography from '../../shared/Typography'
import * as Styles from './styles'


import Icon from '../../../assets/images/File.svg'

interface ValuePickerForm {
  checkedValues: string[]
}

const ValuePicker = () => {
  const [checkedElements, setCheckedElements] = useState<string[]>()
  const initialValues: ValuePickerForm = {
    checkedValues: [],
  }

  console.log(checkedElements)
  const checkBoxesHandler = (values: ValuePickerForm) => {
    // console.log(values)
  }

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values: ValuePickerForm) => checkBoxesHandler(values)}
      >
        {(formik: FormikProps<ValuePickerForm>) => {
          console.log(formik.values.checkedValues)
          return (
            <Form
              onClick={() => setCheckedElements(formik.values.checkedValues)}
              // onChange={() => setCheckedElements(formik.values.checkedValues)}
            >
              <div id="checkbox-group">Показники</div>
              <div role="group" aria-labelledby="checkbox-group">
                {/*<CheckBox*/}
                {/*  label={'Атмосферний тиск'}*/}
                {/*  error={false}*/}
                {/*  name={'checkedValues'}*/}
                {/*  value={'pressure'}*/}
                {/*  // isChecked={formik.values.checkedValues.includes('pressure')}*/}
                {/*/>*/}
                {/*<CheckBox*/}
                {/*  label={'Вологість'}*/}
                {/*  error={false}*/}
                {/*  name={'checkedValues'}*/}
                {/*  value={'humidity'}*/}
                {/*  // isChecked={formik.values.checkedValues.includes('humidity')}*/}
                {/*/>*/}
                <label>
                  <Field type="checkbox" name="checkedValues" value="temp" />
                  t Повітря
                </label>
                <label>
                  <Field type="checkbox" name="checkedValues" value="pressure" />
                  Атмосферний тиск
                </label>
                <label>
                  <Field type="checkbox" name="checkedValues" value="humidity" />
                  Вологість
                </label>
              </div>
            </Form>

          )
        }}
      </Formik>


      {/*<Styles.Value>*/}
      {/*  <Styles.Icon><Icon /></Styles.Icon>*/}
      {/*  <Typography textSize={1} textColor={COLORS.black}>t° Повітря</Typography>*/}
      {/*</Styles.Value>*/}
    </>
  )
}

export default ValuePicker
