import React, {useState} from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import {Cross2Icon} from '@radix-ui/react-icons'
import * as Styles from '../styles'


type DialogModalProps = {
  trigger: React.ReactNode
  children: React.ReactNode
  title: React.ReactNode
  description: React.ReactNode
}

const DialogModal = ({children, trigger, title, description}: DialogModalProps) => {
  // const [container, setContainer] = useState<HTMLDivElement | null>(null)

  return (
    <>
      <Styles.CustomRoot>
        <Styles.CustomTrigger>
          {trigger}
        </Styles.CustomTrigger>
        <Dialog.Portal>
          <Styles.CustomOverlay />
          <Styles.CustomContent>
            <Dialog.Title>{title}</Dialog.Title>
            <Styles.CustomDescription>{description}</Styles.CustomDescription>
            {children}
            <Dialog.Close asChild>
              <Styles.IconButton>
                <Cross2Icon />
              </Styles.IconButton>
            </Dialog.Close>
          </Styles.CustomContent>
        </Dialog.Portal>
      </Styles.CustomRoot>
      {/*<div ref={setContainer} />*/}
    </>
  )
}

export default DialogModal
