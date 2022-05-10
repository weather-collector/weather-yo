import {Form} from 'formik'
import styled from 'styled-components'


export const EmailForm = styled(Form)`
  max-width: 380px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;

  button {
    align-self: flex-end;
  }
`
