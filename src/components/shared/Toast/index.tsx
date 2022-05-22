import React, {useEffect, useState} from 'react'
import {useAppDispatch, useAppSelector} from '../../../hooks/redux'
import {interfaceSlice} from '../../../store/reducers/InterfaceSlice'
import {COLORS} from '../../../styles/theme'
import Button from '../Button'
import Typography from '../Typography'
import * as Styles from './styles'


type ToastComponentProps = {
  title?: string,
  content?: string,
  children?: React.ReactNode
}

const ToastComponent = ({
                          title = 'Помилка',
                          content = 'Щось пішло не так, спробуйте ще раз',
                          children,
                          ...rest
                        }: ToastComponentProps,
) => {
  const dispatch = useAppDispatch()
  const {isToastActive} = useAppSelector(state => state.interfaceReducer)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Styles.CustomToast onOpenChange={setIsOpen} open={isOpen} {...rest}>
        <Styles.CustomTitle>{title}</Styles.CustomTitle>
        <Styles.CustomDescription>{content}</Styles.CustomDescription>
          {children && (
            <Styles.CustomAction altText={'some alt text'} asChild>
              {children}
              {/*<Button><Typography textSize={1} textColor={COLORS.whiteText}>undo</Typography></Button>*/}
            </Styles.CustomAction>
          )}
      </Styles.CustomToast>

      <Styles.CustomViewport />
    </>
  )
}

export default ToastComponent
