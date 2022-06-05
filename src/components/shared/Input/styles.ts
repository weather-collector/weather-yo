import styled from 'styled-components'
import {Field} from 'formik'
import {COLORS} from '../../../styles/theme'


export const InputWrapper = styled.div<{isCaption: boolean, width?: string}>`
  padding-bottom: ${props => props.isCaption ? null : '18px'};
  max-width: ${props => props.width};
`

export const Label = styled.label`
  font-size: 14px;
  color: ${COLORS.labelText};
`

export const Input = styled(Field)`
  z-index: 1;
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


// date picker shorthands //
export const DateShorthands = styled.div`
  max-width: 220px;
  width: 100%;
  height: 38px;
  display: flex;
  border: 2px solid ${COLORS.accent};
  justify-content: space-between;
  border-radius: 4px;
  margin-top: 4px;
`

export const DateShorthandButton = styled.button`
  all: unset;
  flex-grow: 1;
  font-size: 14px;
  color: ${COLORS.black};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: transparent;
  transition: background-color 0.15s ease-in-out;
  &:hover {
    background-color: ${COLORS.hoveredBg};
  }
  &:active {
    background-color: ${COLORS.activeBg};
  }
`

export const Divider = styled.span`
  width: 2px;
  background-color: ${COLORS.accent};
`

export const DatePickerWrapper = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  flex-grow: 1;
`
