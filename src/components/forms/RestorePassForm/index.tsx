import {Formik, FormikProps} from 'formik'
import Link from 'next/link'
import * as Yup from 'yup'
import React from 'react'
import {changePassword} from '../../../store/reducers/ActionCreators/authActions'
import {COLORS} from '../../../styles/theme'
import Button from '../../shared/Button'
import Typography from '../../shared/Typography'
import * as Styles from '../styles'
import Input from '../../shared/Input'


interface RestorePassFormValues {
  password: string
  passwordConfirmation: string
}

type RestorePassFormProps = {
  token: string
}

const RestorePassSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Пароль повинен містити мінімум 6 знаків")
    .max(32, "Пароль може містити максимум 32 знаки")
    .required("*Обов'язкове поле"),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Пароль повинен бути однаковий в обох полях!')
    .required("*Обов'язкове поле"),
})

const RestorePassForm = ({token}: RestorePassFormProps) => {
  const initialValues: RestorePassFormValues = {
    password: '',
    passwordConfirmation: '',
  }

  const restorePassHandler = (values: RestorePassFormValues) => {
    changePassword(values.password, token)
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RestorePassSchema}
      onSubmit={(values: RestorePassFormValues) => restorePassHandler(values)}
    >
      {(formik: FormikProps<RestorePassFormValues>) => {
        return (
          <Styles.FormStyles>
            <Styles.FormWrapper>
              <Input
                label={'Новий пароль'}
                name={'password'}
                type={'password'}
                error={!!formik.errors.password}
                caption={formik.errors.password}
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
          </Styles.FormStyles>
        )
      }}
    </Formik>
  )
}

export default RestorePassForm
