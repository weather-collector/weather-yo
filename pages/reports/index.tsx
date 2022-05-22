import type {NextPage} from 'next'
import styled from 'styled-components'
import BaseLayout from '../../src/components/layouts/BaseLayout'
import Typography from '../../src/components/shared/Typography'
import {useAppSelector} from '../../src/hooks/redux'


const StyledMainContentWrapper = styled.div`

`

const Reports: NextPage = () => {
  const {isAuth} = useAppSelector(state => state.authReducer)


  return isAuth ? (
    <BaseLayout>
      <StyledMainContentWrapper>
        <Typography textSize={3} textColor={'#000'}>REPORTS PAGE</Typography>
      </StyledMainContentWrapper>
    </BaseLayout>
  ) : null
}


export default Reports
