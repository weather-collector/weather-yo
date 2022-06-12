import {Formik, FormikProps} from 'formik'
import * as Yup from 'yup'
import React from 'react'
import {sendNotificationEmail} from '../../../store/reducers/ActionCreators/authActions'
import {COLORS} from '../../../styles/theme'
import Button from '../../shared/Button'
import Typography from '../../shared/Typography'
import * as Styles from '../styles'
import Input from '../../shared/Input'


interface ContactFormValues {
  theme: string
  message: string
}


const ContactSchema = Yup.object().shape({
  theme: Yup.string().min(6, "Пароль повинен містити мінімум 6 знаків").required("*Обов'язкове поле"),
  message: Yup.string().min(6, "Пароль повинен містити мінімум 6 знаків").required("*Обов'язкове поле")
})

const ContactForm = () => {
  const initialValues: ContactFormValues = {
    theme: '',
    message: '',
  }

  const restorePassHandler = (values: ContactFormValues) => {
    sendNotificationEmail(values.theme, values.message)
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ContactSchema}
      onSubmit={(values: ContactFormValues) => restorePassHandler(values)}
    >
      {(formik: FormikProps<ContactFormValues>) => {
        return (
          <Styles.FormStyles>
            <Styles.FormWrapper>
              <Input
                label={'Тема повідомлення'}
                name={'theme'}
                error={!!formik.errors.theme}
                caption={formik.errors.theme}
                required
              />
              <Input
                label={'Ваше повідомлення'}
                name={'message'}
                component={'textarea'}
                error={!!formik.errors.message}
                caption={formik.errors.message}
                required
              />
              <Button type={'submit'}>
                <Typography textSize={1} textColor={COLORS.whiteText}>Відправити листа</Typography>
              </Button>
            </Styles.FormWrapper>
          </Styles.FormStyles>
        )
      }}
    </Formik>
  )
}

export default ContactForm
