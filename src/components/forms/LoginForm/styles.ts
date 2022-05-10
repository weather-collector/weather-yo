import {Form} from 'formik'
import styled from 'styled-components'


export const LoginForm = styled(Form)`
  max-width: 380px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const PasswordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  > * {
    &:nth-child(2){
      cursor: pointer;
      margin-left: auto;
      margin-right: 0;
      margin-top: -18px;
      > * {
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`
