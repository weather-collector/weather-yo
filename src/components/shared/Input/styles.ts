import styled, {css} from 'styled-components'
import {Field} from 'formik'
import {COLORS} from '../../../styles/theme'
import { MEDIA_QUERIES } from '../../../utils/mediaQueries'


export const InputWrapper = styled.div<{isCaption: boolean, width?: string}>`
  padding-bottom: ${props => props.isCaption ? null : '18px'};
  max-width: ${props => props.width};
`

export const Label = styled.label`
  font-size: 14px;
  color: ${COLORS.labelText};
`

const textArea = css`
  resize: none;
  height: 190px;
`

export const Input = styled(Field)<{as: any}>`
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
  ${props => props.as === 'textarea' ? textArea : null}
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
  ${MEDIA_QUERIES.lg} {
    margin-top: 23px;
    max-width: unset;
  }
  ${MEDIA_QUERIES.xs} {
    margin-top: 0;
  }
  ${MEDIA_QUERIES.xs} {
    margin-bottom: 18px;
  }
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
  column-gap: 15px;
  align-items: center;
  flex-grow: 1;

  ${MEDIA_QUERIES.lg} {
    flex-direction: column;
    max-width: 300px;
    align-items: flex-start;
  }
  ${MEDIA_QUERIES.sm} {
    flex-direction: row;
    max-width: unset;
    width: 100%;
    > * {
      width: 100%;
      flex-grow: 1;
      flex-basis: 0;
    }
  }
  ${MEDIA_QUERIES.xs} {
    flex-direction: column;
    > * {
      flex-basis: unset;
    }
  }
`
