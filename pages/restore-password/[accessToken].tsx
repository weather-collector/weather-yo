import {NextPage} from 'next'
import {useRouter} from 'next/router'
import React from 'react'
import RestorePassForm from '../../src/components/forms/RestorePassForm'
import AuthLayout from '../../src/components/Layouts/AuthLayout'
import MetaHead from '../../src/components/shared/MetaHead'
import Typography from '../../src/components/shared/Typography'
import {useAppSelector} from '../../src/hooks/redux'
import {COLORS} from '../../src/styles/theme'


const RestorePassword: NextPage = () => {
  const router = useRouter()
  const {isAuth} = useAppSelector(state => state.authReducer)

  const token: string | undefined = router.query.accessToken as string

  if (isAuth) {
    router.push('/')
  }

  return !isAuth ? (
    <>
      <MetaHead
        title={'Відновлення доступу'}
      />
      <AuthLayout>
        <span style={{marginBottom: '20px'}}>
          <Typography textColor={COLORS.primary} textSize={3}>Відновлення доступу</Typography>
        </span>
        <RestorePassForm token={token} />
      </AuthLayout>
    </>
  ) : null
}

export default RestorePassword
