import React, {InputHTMLAttributes} from 'react'
import * as Styles from './styles'

export interface IInput extends InputHTMLAttributes<HTMLInputElement>{
  label: string
  error: boolean
  name: string
  caption?: string
  placeholder?: string
}


const Input = ({label, error, name, placeholder, caption = '', ...rest}: IInput) => {
  return (
    <Styles.InputWrapper isCaption={!!caption}>
      <Styles.Label htmlFor={name}>{label}</Styles.Label>
      <Styles.Input error={`${error}`} id={name} name={name} placeholder={placeholder} {...rest} />
      <Styles.InputCaption>{caption}</Styles.InputCaption>
    </Styles.InputWrapper>
  )
}

export default Input
