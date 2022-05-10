import styled from 'styled-components'
import {Field} from 'formik'
import {COLORS} from '../../../styles/theme'


export const InputWrapper = styled.div<{isCaption: boolean}>`
  padding-bottom: ${props => props.isCaption ? null : '18px'}
`

export const Label = styled.label`
  font-size: 14px;
  color: ${COLORS.labelText};
`

export const Input = styled(Field)`
  width: 100%;
  border: unset;
  background-color: ${COLORS.elementBg};
  font-size: 14px;
  color: ${COLORS.primary};
  padding: 8px 12px;
  border-radius: 4px;
  outline: none;
  box-shadow: ${props => props.error === 'true' ? `0 0 0 1px ${COLORS.error}`: `0 0 0 1px ${COLORS.elementBorder}`};
  transition: all 0.2s;
  &::placeholder {
    color: ${COLORS.accent};
  }
  &:focus {
    background-color: ${COLORS.hoveredBg};
    box-shadow: ${props => props.error === 'true' ? `0 0 0 1px ${COLORS.error}`: `0 0 0 1px ${COLORS.accent}`};
  }
`

export const InputCaption = styled.div`
  font-size: 12px;
  color: ${COLORS.error};
`
