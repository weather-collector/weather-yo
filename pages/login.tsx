import {NextPage} from 'next'
import {useRouter} from 'next/router'
import React, {useEffect} from 'react'
import LoginForm from '../src/components/forms/LoginForm'
import AuthLayout from '../src/components/layouts/AuthLayout'
import GlobalLoader from '../src/components/shared/Loaders/GlobalLoader'
import MetaHead from '../src/components/shared/MetaHead'
import Typography from '../src/components/shared/Typography'
import {useAppSelector} from '../src/hooks/redux'
import {COLORS} from '../src/styles/theme'


const Login: NextPage = () => {
  const router = useRouter()
  const {isAuth, isLoading} = useAppSelector(state => state.authReducer)

  useEffect(() => {
    if (isAuth && !isLoading) {
      router.push('/')
    }
  }, [isAuth, router])

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
  ) : <GlobalLoader />
}


export default Login

