import type {NextPage} from 'next'
import styled from 'styled-components'
import EmptyContainer from '../src/components/homePage/EmptyContainer'
import BaseLayout from '../src/components/layouts/BaseLayout'
import MetaHead from '../src/components/shared/MetaHead'
import Typography from '../src/components/shared/Typography'
import {useAppSelector} from '../src/hooks/redux'
import {COLORS} from '../src/styles/theme'



const StyledMainContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  > * {
    &:nth-child(1) {
      padding: 10px;
    }
  }
`

const Home: NextPage = () => {
  const {isAuth} = useAppSelector(state => state.authReducer)

  return (
    <>
      <MetaHead />

      {isAuth ? (
        <BaseLayout>
          <StyledMainContentWrapper>
            <Typography textSize={3} textColor={COLORS.black} fontWeight={600}>Моя Панель</Typography>
            <EmptyContainer />
          </StyledMainContentWrapper>
        </BaseLayout>
      ) : (
        <Typography textSize={3} textColor={COLORS.accent}>LANDING PAGE</Typography>
      )}
    </>
  )
}


export default Home
