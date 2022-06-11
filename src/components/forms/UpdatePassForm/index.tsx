import {Formik, FormikProps} from 'formik'
import * as Yup from 'yup'
import React from 'react'
import {updatePassword} from '../../../store/reducers/ActionCreators/authActions'
import {COLORS} from '../../../styles/theme'
import Button from '../../shared/Button'
import Typography from '../../shared/Typography'
import * as Styles from '../styles'
import Input from '../../shared/Input'


interface RestorePassFormValues {
  currentPassword: string
  newPassword: string
  passwordConfirmation: string
}


const UpdatePassSchema = Yup.object().shape({
  currentPassword: Yup.string()
    .min(6, "Пароль повинен містити мінімум 6 знаків")
    .max(32, "Пароль може містити максимум 32 знаки")
    .required("*Обов'язкове поле"),
  newPassword: Yup.string()
    .notOneOf([Yup.ref('currentPassword'), null], 'Новий пароль не повинен повторювати поточний!')
    .min(6, "Пароль повинен містити мінімум 6 знаків")
    .max(32, "Пароль може містити максимум 32 знаки")
    .required("*Обов'язкове поле"),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], 'Пароль повинен бути однаковий в обох полях!')
    .required("*Обов'язкове поле"),
})

const UpdatePassForm = () => {
  const initialValues: RestorePassFormValues = {
    currentPassword: '',
    newPassword: '',
    passwordConfirmation: '',
  }

  const restorePassHandler = (values: RestorePassFormValues) => {
    updatePassword(values.newPassword, values.currentPassword)
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={UpdatePassSchema}
      onSubmit={(values: RestorePassFormValues) => restorePassHandler(values)}
    >
      {(formik: FormikProps<RestorePassFormValues>) => {
        return (
          <Styles.FormStyles>
            <Styles.FormWrapper>
              <Input
                label={'Поточний пароль'}
                name={'currentPassword'}
                type={'password'}
                error={!!formik.errors.currentPassword}
                caption={formik.errors.currentPassword}
                required
              />

              <Input
                label={'Новий пароль'}
                name={'newPassword'}
                type={'password'}
                error={!!formik.errors.newPassword}
                caption={formik.errors.newPassword}
                required
              />

              <Input
                label={'Повторіть новий пароль'}
                name={'passwordConfirmation'}
                type={'password'}
                error={!!formik.errors.passwordConfirmation}
                caption={formik.errors.passwordConfirmation}
                required
              />

              <Button type={'submit'}>
                <Typography textSize={1} textColor={COLORS.whiteText}>Оновити пароль</Typography>
              </Button>
            </Styles.FormWrapper>
          </Styles.FormStyles>
        )
      }}
    </Formik>
  )
}

export default UpdatePassForm
