import React from 'react'
import BaseLayout from '../src/components/Layouts/BaseLayout'
import BaseContainer from '../src/components/shared/BaseContainer'
import MetaHead from '../src/components/shared/MetaHead'
import Typography from '../src/components/shared/Typography'
import {COLORS} from '../src/styles/colors'


const Registration = () => {
  return (
    <>
      <MetaHead />

      <BaseLayout>
        <BaseContainer>
          <Typography textColor={COLORS.selection} textSize={3}>REGISTRATION</Typography>
        </BaseContainer>
      </BaseLayout>
    </>
  )
}

export default Registration
