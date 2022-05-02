import type {NextPage} from 'next'
import BaseLayout from '../src/components/Layouts/BaseLayout'
import BaseContainer from '../src/components/shared/BaseContainer'
import MetaHead from '../src/components/shared/MetaHead'
import Typography from '../src/components/shared/Typography'
import {COLORS} from '../src/styles/colors'


const Home: NextPage = () => {
  return (
    <>
      <MetaHead />

      <BaseLayout>
        <BaseContainer>
          <Typography textColor={COLORS.selection} textSize={3}>STARTER</Typography>
        </BaseContainer>
      </BaseLayout>
    </>
  )
}

export default Home
