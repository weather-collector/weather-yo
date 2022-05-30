import type {NextPage} from 'next'
import {useRouter} from 'next/router'
import styled from 'styled-components'
import BaseLayout from '../src/components/layouts/BaseLayout'
import Typography from '../src/components/shared/Typography'
import {withProtected} from '../src/routesProtection'


const StyledMainContentWrapper = styled.div`

`

const Settings: NextPage = () => {
  return (
    <BaseLayout>
      <StyledMainContentWrapper>
        <Typography textSize={3} textColor={'#000'}>SETTINGS</Typography>
      </StyledMainContentWrapper>
    </BaseLayout>
  )
}


export default withProtected(Settings)
