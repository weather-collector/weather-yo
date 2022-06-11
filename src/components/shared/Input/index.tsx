import {useField} from 'formik'
import React, {InputHTMLAttributes} from 'react'
import * as Styles from './styles'

export interface IInput extends InputHTMLAttributes<HTMLInputElement>{
  component?: any
  label: string
  error: boolean
  name: string
  caption?: string
  placeholder?: string
  width?: string
}


const Input = ({component, label, error, name, placeholder, width, caption = '', ...rest}: IInput) => {
  const [field, meta] = useField(name);

  return (
    <Styles.InputWrapper isCaption={!!caption} width={width}>
      <Styles.Label htmlFor={name}>{label}</Styles.Label>
      <Styles.Input
        as={component}
        error={`${error}`}
        id={name}
        name={name}
        placeholder={placeholder}
        {...rest}
        onChange={field.onChange}
        value={meta.value}
      />
      <Styles.InputCaption>{caption}</Styles.InputCaption>
    </Styles.InputWrapper>
  )
}

export default Input
