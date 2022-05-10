import {NextPage} from 'next'
import {useRouter} from 'next/router'
import React from 'react'
import RegisterForm from '../src/components/forms/RegisterForm'
import AuthLayout from '../src/components/Layouts/AuthLayout'
import MetaHead from '../src/components/shared/MetaHead'
import Typography from '../src/components/shared/Typography'
import {useAppSelector} from '../src/hooks/redux'
import {COLORS} from '../src/styles/theme'


const Register: NextPage = () => {
  const router = useRouter()
  const {isAuth} = useAppSelector(state => state.authReducer)

  if (isAuth) {
    router.push('/')
  }

  return !isAuth ? (
    <>
      <MetaHead
        title={'Реєстрація'}
      />
      <AuthLayout>
        <span style={{marginBottom: '20px'}}>
          <Typography textColor={COLORS.primary} textSize={3}>Реєстрація</Typography>
        </span>
        <RegisterForm />
      </AuthLayout>
    </>
  ) : null
}

export default Register
