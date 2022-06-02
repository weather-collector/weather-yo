import {Form} from 'formik'
import styled from 'styled-components'
import {COLORS} from '../../../styles/theme'


export const ValuePickerForm = styled(Form)`
  display: flex;
  flex-direction: column;
  max-width: 260px;
  width: 100%;
  flex-shrink: 0;
  > * {
    padding: 10px 10px;
    transition: all 0.15s ease-in-out;
    border-radius: 4px;
    &:hover {
      background-color: ${COLORS.hoveredBg};
    }
    &:active {
      background-color: ${COLORS.activeBg};
      transform: translateX(2px);
    }
  }
`
