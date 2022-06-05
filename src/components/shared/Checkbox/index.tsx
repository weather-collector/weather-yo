import {CheckIcon} from '@radix-ui/react-icons'
import Image from 'next/image'
import React, {useId} from 'react'
import {COLORS} from '../../../styles/theme'
import {CustomCheckbox} from './styles'
import * as Styles from './styles'


type CheckBoxProps = {
  label: string
  error?: boolean
  name: string
  isChecked: boolean
  value?: string
  iconSrc?: string
  type?: 'checkbox' | 'radio'
}

const CheckBox = ({label, error = false, name, isChecked, value, iconSrc, type = 'checkbox'}: CheckBoxProps) => {
  const id = useId()

  return (
    <>
      <CustomCheckbox type={type} name={name} id={`${name}-${id}`} value={value} required />
      <Styles.Label htmlFor={`${name}-${id}`} error={error}>
        <Styles.Indicator aria-hidden={'true'} isChecked={isChecked} error={error}>
          {isChecked && <CheckIcon color={COLORS.accent} width={20} height={20} />}
        </Styles.Indicator>
        {label}
        {iconSrc && <Styles.Icon><Image src={iconSrc} alt={label} width={32} height={32} /></Styles.Icon>}
      </Styles.Label>
    </>
  )
}

export default CheckBox
