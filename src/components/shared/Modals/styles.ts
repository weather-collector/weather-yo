import {Content, Description, Dialog, Overlay, Trigger} from '@radix-ui/react-dialog'
import styled, {keyframes} from 'styled-components'
import {COLORS} from '../../../styles/theme'


const overlayShow = keyframes`
  0% {
    opacity: 0
  }
  100% {
    opacity: 0.5
  }
`

const contentShow = keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%, -48%) scale(.96);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`

export const CustomOverlay = styled(Overlay)`
  background-color: ${COLORS.black};
  position: fixed;
  inset: 0;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
  };
`

export const CustomContent = styled(Content)`
  background-color: ${COLORS.lightBg};
  border-radius: 4px;
  box-shadow: hsl(206 22% 7% / 35%) 0 10px 38px -10px, hsl(206 22% 7% / 20%) 0 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 430px;
  max-height: 85vh;
  padding: 25px;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${contentShow} 150ms ease-in-out;
  };

  &:focus {
    outline: none;
  }
`

export const CustomTrigger = styled(Trigger)`
  all: unset;
`

export const CustomDescription = styled(Description)`
  line-height: 1;
  margin-bottom: 20px;
`

export const IconButton = styled.button`
  all: unset;
  font-family: inherit;
  border-radius: 100%;
  height: 25px;
  width: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${COLORS.accent};
  position: absolute;
  top: 10px;
  right: 10px;

  &:hover {
    background-color: ${COLORS.hoveredBg};
  }

  &:focus {
    box-shadow: 0 0 0 1px ${COLORS.elementBorder};
  }
`

export const ConfirmationDialogButtonsWrapper = styled.div`
  display: flex;
  gap: 20px;
`
