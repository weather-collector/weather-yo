import {NextPage} from 'next'
import React from 'react'
import RegisterForm from '../src/components/forms/RegisterForm'
import AuthLayout from '../src/components/layouts/AuthLayout'
import MetaHead from '../src/components/shared/MetaHead'
import Typography from '../src/components/shared/Typography'
import {COLORS} from '../src/styles/theme'


const Register: NextPage = () => {
  return (
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
  )
}

export default Register
