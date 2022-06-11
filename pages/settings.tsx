import type {NextPage} from 'next'
import React from 'react'
import styled from 'styled-components'
import UpdatePassForm from '../src/components/forms/UpdatePassForm'
import ContactForm from '../src/components/forms/СontactForm'
import BaseLayout from '../src/components/layouts/BaseLayout'
import Typography from '../src/components/shared/Typography'
import {COLORS} from '../src/styles/theme'


const StyledMainContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 40px;
  > * {
    padding: 10px;
    &:nth-child(2) {
      display: flex;
      gap: 50px;
      justify-content: space-around;
    }
  }
`

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 380px;
  gap: 20px;
`

const Settings: NextPage = () => {
  return (
    <BaseLayout>
      <StyledMainContentWrapper>
        <Typography textSize={3} textColor={COLORS.black} fontWeight={600}>Налаштування</Typography>
        <div>
          <FormWrapper>
            <Typography textSize={2} textColor={COLORS.primary} fontWeight={500}>Зміна пароля</Typography>
            <UpdatePassForm />
          </FormWrapper>
          <FormWrapper>
            <Typography textSize={2} textColor={COLORS.primary} fontWeight={500}>Зворотній зв&apos;язок</Typography>
            <ContactForm />
          </FormWrapper>
        </div>
      </StyledMainContentWrapper>
    </BaseLayout>
  )
}


export default Settings
