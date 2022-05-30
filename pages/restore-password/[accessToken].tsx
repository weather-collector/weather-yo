import {NextPage} from 'next'
import {useRouter} from 'next/router'
import React from 'react'
import RestorePassForm from '../../src/components/forms/RestorePassForm'
import AuthLayout from '../../src/components/layouts/AuthLayout'
import MetaHead from '../../src/components/shared/MetaHead'
import Typography from '../../src/components/shared/Typography'
import {withPublic} from '../../src/routesProtection'
import {COLORS} from '../../src/styles/theme'


const RestorePassword: NextPage = () => {
  const router = useRouter()
  const token: string | undefined = router.query.accessToken as string

  return (
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
  )
}

export default withPublic(RestorePassword)
