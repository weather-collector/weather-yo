import {Formik, FormikProps} from 'formik'
import Link from 'next/link'
import * as Yup from 'yup'
import React from 'react'
import {useGoogleAuth} from '../../../hooks/googleAuth'
import {useAppDispatch} from '../../../hooks/redux'
import {register} from '../../../store/reducers/ActionCreators/authActions'
import {COLORS} from '../../../styles/theme'
import Button from '../../shared/Button'
import CheckBox from '../../shared/Checkbox'
import Typography from '../../shared/Typography'
import * as Styles from './styles'
import Input from '../../shared/Input'


interface RegisterFormValues {
  email: string
  password: string
  agreement: boolean
}

const RegisterSchema = Yup.object().shape({
  email: Yup.string().email("Неправильний формат").required("*Обов'язкове поле"),
  password: Yup.string()
    .min(6, "Пароль повинен містити мінімум 6 знаків")
    .max(32, "Пароль може містити максимум 32 знаки")
    .required("*Обов'язкове поле"),
  agreement: Yup.boolean().oneOf([true], 'Message'),
})

const RegisterForm = () => {
  const dispatch = useAppDispatch()
  useGoogleAuth()

  const initialValues: RegisterFormValues = {
    email: '',
    password: '',
    agreement: false,
  }

  const registerHandler = (values: RegisterFormValues) => {
    dispatch(register(values.email, values.password))
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RegisterSchema}
      onSubmit={(values: RegisterFormValues) => registerHandler(values)}
    >
      {(formik: FormikProps<RegisterFormValues>) => {
        return (
          <Styles.RegisterForm>
            <Styles.FormWrapper>
              <Input
                label={'Email'}
                name={'email'}
                type={'email'}
                error={!!formik.errors.email}
                caption={formik.errors.email}
                required
              />

              <Input
                label={'Пароль'}
                name={'password'}
                type={'password'}
                error={!!formik.errors.password}
                caption={formik.errors.password}
                required
              />

              <CheckBox
                label={'Даю згоду на обробку особистих даних'}
                name={'agreement'}
                error={!!formik.errors.agreement}
                isChecked={formik.values.agreement}
              />

              <Button type={'submit'}>
                <Typography textSize={1} textColor={COLORS.whiteText}>Зареєструватися</Typography>
              </Button>
            </Styles.FormWrapper>
            <div id={'google-login'} style={{display: 'flex', justifyContent: 'center'}} />
            <Link href={'/login'}>
              <a>
                <Button
                  type={'button'}
                  bgColor={COLORS.successBg}
                  hoveredBgColor={COLORS.hoveredSuccessBg}
                  activeBgColor={COLORS.activeSuccessBg}
                >
                  <Typography textSize={'14px'} textColor={COLORS.successText}>
                    Вже маєте обліковий запис?
                  </Typography>
                  <Typography textSize={'14px'} textColor={COLORS.successTextBold} fontWeight={600}>
                    Увійти
                  </Typography>
                </Button>
              </a>
            </Link>
          </Styles.RegisterForm>
        )
      }}
    </Formik>
  )
}

export default RegisterForm
