import {NextPage} from 'next'
import {useRouter} from 'next/router'
import React from 'react'
import LoginForm from '../src/components/forms/LoginForm'
import AuthLayout from '../src/components/layouts/AuthLayout'
import MetaHead from '../src/components/shared/MetaHead'
import Typography from '../src/components/shared/Typography'
import {useAppSelector} from '../src/hooks/redux'
import {COLORS} from '../src/styles/theme'


const Login: NextPage = () => {
  const router = useRouter()
  const {isAuth} = useAppSelector(state => state.authReducer)

  if (isAuth) {
    router.push('/')
  }

  return !isAuth ? (
    <>
      <MetaHead
        title={'Вхід'}
      />
      <AuthLayout>
        <span style={{marginBottom: '20px'}}>
          <Typography textColor={COLORS.primary} textSize={3}>Авторизація</Typography>
        </span>
        <LoginForm />
      </AuthLayout>
    </>
  ) : null
}


export default Login

