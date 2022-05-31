import {NextPage} from 'next'
import React from 'react'
import LoginForm from '../src/components/forms/LoginForm'
import AuthLayout from '../src/components/layouts/AuthLayout'
import MetaHead from '../src/components/shared/MetaHead'
import Typography from '../src/components/shared/Typography'
import {COLORS} from '../src/styles/theme'


const Login: NextPage = () => {
  return (
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
  )
}


export default Login

