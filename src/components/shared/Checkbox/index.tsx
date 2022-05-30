import { CheckIcon } from '@radix-ui/react-icons'
import React, {useId} from 'react'
import {COLORS} from '../../../styles/theme'
import {CustomCheckbox} from './styles'
import * as Styles from './styles'


type CheckBoxProps = {
  label: string
  error: boolean
  name: string
  isChecked: boolean
  value?: string
}

const CheckBox = ({label, error, name, isChecked, value}: CheckBoxProps) => {
  const id = useId()

  return (
    <Styles.CheckboxWrapper>
      <CustomCheckbox type={'checkbox'} name={name} value={value} required />
      <Styles.Label htmlFor={name} error={error}>
        <Styles.Indicator aria-hidden={'true'} isChecked={isChecked} error={error}>
          {isChecked && <CheckIcon color={COLORS.accent} width={20} height={20}/>}
        </Styles.Indicator>
        {label}
      </Styles.Label>
    </Styles.CheckboxWrapper>
  )
}

export default CheckBox
