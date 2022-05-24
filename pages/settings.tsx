import type {NextPage} from 'next'
import {useRouter} from 'next/router'
import {useEffect} from 'react'
import styled from 'styled-components'
import BaseLayout from '../src/components/layouts/BaseLayout'
import GlobalLoader from '../src/components/shared/Loaders/GlobalLoader'
import Typography from '../src/components/shared/Typography'
import {useAppSelector} from '../src/hooks/redux'


const StyledMainContentWrapper = styled.div`

`

const Settings: NextPage = () => {
  const router = useRouter()
  const {isAuth, isLoading} = useAppSelector(state => state.authReducer)

  useEffect(() => {
    if (!isAuth && !isLoading) {
      router.push('/login')
    }
  }, [isAuth, router, isLoading])


  return isAuth ? (
    <BaseLayout>
      <StyledMainContentWrapper>
        <Typography textSize={3} textColor={'#000'}>SETTINGS</Typography>
      </StyledMainContentWrapper>
    </BaseLayout>
  ) : <GlobalLoader />
}


export default Settings
