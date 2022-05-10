import * as Dialog from '@radix-ui/react-dialog'
import {Cross2Icon} from '@radix-ui/react-icons'
import React, {useState} from 'react'
import {COLORS} from '../../../../styles/theme'
import Button from '../../Button'
import Typography from '../../Typography'
import * as Styles from '../styles'


type ConfirmationDialogProps = {
  trigger: React.ReactNode
  onConfirmationCallback: () => void
}

const ConfirmationDialog = ({trigger, onConfirmationCallback}: ConfirmationDialogProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const getModalState = (open: boolean) => {
    setIsOpen(open)
  }

  const onCloseHandler = () => {
    setIsOpen(false)
  }

  return (
    <Dialog.Root
      open={isOpen}
      onOpenChange={(open) => getModalState(open)}
    >
      <Styles.CustomTrigger>
        {trigger}
      </Styles.CustomTrigger>
      <Dialog.Portal>
        <Styles.CustomOverlay />
        <Styles.CustomContent>
          <Dialog.Title>
            <Typography textSize={'18px'} textColor={COLORS.black}>Ви дійсно хочете виконати обрану дію?</Typography>
          </Dialog.Title>
          <Styles.CustomDescription>
            <Typography textSize={'12px'} textColor={COLORS.overlay}>
              Ви отримаєте інструкцію в якій буде описано, як ви можете відновити доступ до вашого облікового запису.
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
                Підтвердити
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
    </Dialog.Root>
  )
}

export default ConfirmationDialog
