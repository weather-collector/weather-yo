import {Formik, FormikProps} from 'formik'
import Link from 'next/link'
import * as Yup from 'yup'
import React from 'react'
import {useGoogleAuth} from '../../../hooks/googleAuth'
import {useAppDispatch} from '../../../hooks/redux'
import {login} from '../../../store/reducers/ActionCreators/authActions'
import {COLORS} from '../../../styles/theme'
import Button from '../../shared/Button'
import DialogModal from '../../shared/Modals/DialogModal'
import Typography from '../../shared/Typography'
import EmailForm from '../EmailForm'
import Input from '../../shared/Input'
import * as Styles from './styles'
import * as FormStyles from '../styles'


interface LoginFormValues {
  email: string
  password: string
}

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Неправильний формат").required("*Обов'язкове поле"),
  password: Yup.string()
    .min(6, "Пароль повинен містити мінімум 6 знаків")
    .max(32, "Пароль може містити максимум 32 знаки")
    .required("*Обов'язкове поле"),
})

const LoginForm = () => {
  const dispatch = useAppDispatch()
  useGoogleAuth()

  const initialValues: LoginFormValues = {
    email: '',
    password: '',
  }

  const loginHandler = (values: LoginFormValues) => {
    dispatch(login(values.email, values.password))
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={LoginSchema}
      onSubmit={(values: LoginFormValues) => loginHandler(values)}
    >
      {(formik: FormikProps<LoginFormValues>) => {
        return (
          <FormStyles.FormStyles>
            <FormStyles.FormWrapper>
              <Input
                label={'Email'}
                name={'email'}
                type={'email'}
                error={!!formik.errors.email}
                caption={formik.errors.email}
                autoComplete={'username'}
                required
              />

              <Styles.PasswordWrapper>
                <Input
                  label={'Пароль'}
                  name={'password'}
                  type={'password'}
                  error={!!formik.errors.password}
                  caption={formik.errors.password}
                  autoComplete={"current-password"}
                  required
                />
                <DialogModal
                  trigger={<Typography textSize={'12px'} textColor={COLORS.infoText}>Забули пароль?</Typography>}
                  title={<Typography textSize={'18px'} textColor={COLORS.black}>Введіть ваш email</Typography>}
                  description={
                    <Typography textSize={'12px'} textColor={COLORS.overlay}>
                      Ви отримаєте інструкцію в якій буде описано, як ви можете відновити доступ до вашого облікового запису.
                    </Typography>
                  }
                >
                  <EmailForm />
                </DialogModal>
              </Styles.PasswordWrapper>

              <Button type={'submit'}>
                <Typography textSize={1} textColor={COLORS.whiteText}>Увійти</Typography>
              </Button>
            </FormStyles.FormWrapper>
            <div id={'google-login'} style={{display: 'flex', justifyContent: 'center'}} />
            <Link href={'/register'}>
              <a>
                <Button
                  type={'button'}
                  bgColor={COLORS.successBg}
                  hoveredBgColor={COLORS.hoveredSuccessBg}
                  activeBgColor={COLORS.activeSuccessBg}
                >
                  <Typography textSize={'14px'} textColor={COLORS.successText}>
                    Немає облікового запису?
                  </Typography>
                  <Typography textSize={'14px'} textColor={COLORS.successTextBold} fontWeight={600}>
                    Створити
                  </Typography>
                </Button>
              </a>
            </Link>
          </FormStyles.FormStyles>
        )
      }}
    </Formik>
  )
}

export default LoginForm
