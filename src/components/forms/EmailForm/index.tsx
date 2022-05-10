import {Formik, FormikProps} from 'formik'
import * as Yup from 'yup'
import React from 'react'
import {sendResetPasswordMail} from '../../../store/reducers/ActionCreators/authActions'
import {COLORS} from '../../../styles/theme'
import Button from '../../shared/Button'
import Typography from '../../shared/Typography'
import * as Styles from './styles'
import Input from '../../shared/Input'


interface EmailFormValues {
  email: string
}

const EmailSchema = Yup.object().shape({
  email: Yup.string().email("Неправильний формат").required("*Обов'язкове поле"),
})

const EmailForm = () => {
  const initialValues: EmailFormValues = {
    email: '',
  }

  const sendEmailHandler = (values: EmailFormValues) => {
    sendResetPasswordMail(values.email)
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={EmailSchema}
      onSubmit={(values: EmailFormValues)=> sendEmailHandler(values)}
    >
      {(formik: FormikProps<EmailFormValues>) => {
        return (
          <Styles.EmailForm>
              <Input
                label={'Email'}
                name={'email'}
                type={'email'}
                error={!!formik.errors.email}
                caption={formik.errors.email}
                required
              />

              <Button
                type={'submit'}
                bgColor={COLORS.successBg}
                hoveredBgColor={COLORS.hoveredSuccessBg}
                activeBgColor={COLORS.activeSuccessBg}
                width={'50%'}
              >
                <Typography
                  textSize={'14px'}
                  textColor={COLORS.successText}
                  fontWeight={600}>
                  Відправити інструкцію
                </Typography>
              </Button>
          </Styles.EmailForm>
        )
      }}
    </Formik>
  )
}

export default EmailForm
