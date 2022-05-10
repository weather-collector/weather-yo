import {Field} from 'formik'
import styled from 'styled-components'
import {COLORS} from '../../../styles/theme'


export const CheckboxWrapper = styled.div`
  display: flex;
`

export const CustomCheckbox = styled(Field)<{error: boolean}>`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

export const Indicator = styled.span<{isChecked: boolean, error: boolean}>`
  height: 20px;
  width: 20px;
  background-color: ${props => props.isChecked ? COLORS.hoveredBg : COLORS.elementBg};
  border: 1px solid ${props => props.error ? COLORS.error : COLORS.elementBorder};
  border-radius: 4px;
  transition: all .1s;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Label = styled.label<{error: boolean}>`
  font-size: 14px;
  color: ${props => props.error ? COLORS.error : COLORS.primary};
  user-select: none;
  display: flex;
  gap: 8px;
`
