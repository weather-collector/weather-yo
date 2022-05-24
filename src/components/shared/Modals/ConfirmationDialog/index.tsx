import * as Dialog from '@radix-ui/react-dialog'
import {Cross2Icon} from '@radix-ui/react-icons'
import React, {useEffect, useState} from 'react'
import {COLORS} from '../../../../styles/theme'
import Button from '../../Button'
import Typography from '../../Typography'
import * as Styles from '../styles'


type ConfirmationDialogProps = {
  trigger?: React.ReactNode
  onConfirmationCallback: () => void
  title?: string
  description?: string
  counter?: number
}

const ConfirmationDialog = ({trigger, onConfirmationCallback, title = '', description = '', counter = 0}: ConfirmationDialogProps) => {
  const [isOpen, setIsOpen] = useState(false)

  // rework later
  useEffect(() => {
    if (counter > 0) {
      setIsOpen(true)
    }
  }, [counter])

  const onCloseHandler = () => {
    setIsOpen(false)
  }

  return (
    <>
      <Styles.CustomRoot
        open={isOpen}
        onOpenChange={setIsOpen}
      >
        {trigger && (
          <Styles.CustomTrigger>
            {trigger}
          </Styles.CustomTrigger>
        )}
        <Dialog.Portal>
          <Styles.CustomOverlay />
          <Styles.CustomContent>
            <Dialog.Title>
              <Typography textSize={'18px'} textColor={COLORS.black}>
                {title === '' ? 'Ви дійсно хочете виконати дану дію?' : title}
              </Typography>
            </Dialog.Title>
            <Styles.CustomDescription>
              <Typography textSize={'12px'} textColor={COLORS.overlay}>
                {description === '' ? 'Обрана дія не може бути відмінена.' : description}
              </Typography>
            </Styles.CustomDescription>
            <Styles.ConfirmationDialogButtonsWrapper>
              <Button
                type={'submit'}
                bgColor={COLORS.elementBg}
                hoveredBgColor={COLORS.hoveredBg}
                activeBgColor={COLORS.activeBg}
                width={'50%'}
                onClick={onCloseHandler}
              >
                <Typography
                  textSize={'14px'}
                  textColor={COLORS.primary}
                  fontWeight={600}>
                  Скасувати
                </Typography>
              </Button>
              <Button
                type={'submit'}
                bgColor={COLORS.successBg}
                hoveredBgColor={COLORS.hoveredSuccessBg}
                activeBgColor={COLORS.activeSuccessBg}
                width={'50%'}
                onClick={onConfirmationCallback}
              >
                <Typography
                  textSize={'14px'}
                  textColor={COLORS.successText}
                  fontWeight={600}>
                  Ок
                </Typography>
              </Button>
            </Styles.ConfirmationDialogButtonsWrapper>
            <Dialog.Close asChild>
              <Styles.IconButton>
                <Cross2Icon />
              </Styles.IconButton>
            </Dialog.Close>
          </Styles.CustomContent>
        </Dialog.Portal>
      </Styles.CustomRoot>
    </>
  )
}

export default ConfirmationDialog
