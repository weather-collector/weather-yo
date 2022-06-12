import type {NextPage} from 'next'
import styled from 'styled-components'
import ContentContainer from '../src/components/homePage/ContentContainer'
import BaseLayout from '../src/components/Layouts/BaseLayout'
import MetaHead from '../src/components/shared/MetaHead'
import Typography from '../src/components/shared/Typography'
import {COLORS} from '../src/styles/theme'


const StyledMainContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  position: relative;

  > * {
    padding: 10px;
  }
`

const Home: NextPage = () => {
  return (
    <>
      <MetaHead />
      <BaseLayout>
        <StyledMainContentWrapper>
          <Typography textSize={3} textColor={COLORS.black} fontWeight={600}>Головна панель</Typography>
          <ContentContainer />
        </StyledMainContentWrapper>
      </BaseLayout>
    </>
  )
}


export default Home
