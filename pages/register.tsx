import {NextPage} from 'next'
import {useRouter} from 'next/router'
import React, {useEffect} from 'react'
import RegisterForm from '../src/components/forms/RegisterForm'
import AuthLayout from '../src/components/layouts/AuthLayout'
import GlobalLoader from '../src/components/shared/Loaders/GlobalLoader'
import MetaHead from '../src/components/shared/MetaHead'
import Typography from '../src/components/shared/Typography'
import {useAppSelector} from '../src/hooks/redux'
import {COLORS} from '../src/styles/theme'


const Register: NextPage = () => {
  const router = useRouter()
  const {isAuth} = useAppSelector(state => state.authReducer)

  useEffect(() => {
    if (isAuth) {
      router.push('/')
    }
  }, [isAuth, router])


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
  ) : <GlobalLoader />
}

export default Register
