import {Action, Description, Root, Title, Viewport} from '@radix-ui/react-toast'
import styled, {keyframes} from 'styled-components'
import {COLORS} from '../../../styles/theme'


export const ToastWrapper = styled.div`

`

const VIEWPORT_PADDING = '25px'

const hide = keyframes`
  0% {
    opacity: 1
  }
  100% {
    opacity: 0
  }
`

const slideIn = keyframes`
  from {
    transform: translateX(calc(100% + ${VIEWPORT_PADDING}px))
  }
  to {
    transform: translateX(0)
  }
`

const swipeOut = keyframes`
  from {
    transform: translateX(var(--radix-toast-swipe-end-x))
  }
  to {
    transform: translateX(calc(100% + ${VIEWPORT_PADDING}px))
  }
`

export const CustomViewport = styled(Viewport)`
  position: fixed;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  padding: ${VIEWPORT_PADDING};
  gap: 10px;
  width: 390px;
  max-width: 100vw;
  margin: 0;
  list-style: none;
  z-index: 2147483647;
  outline: none;
`

export const CustomToast = styled(Root)`
  background-color: white;
  border-radius: 4px;
  box-shadow: hsl(206 22% 7% / 35%) 0 10px 38px -10px, hsl(206 22% 7% / 20%) 0 10px 20px -15px;
  padding: 15px;
  display: grid;
  grid-template-areas: "title action" "description action";
  grid-template-columns: auto max-content;
  column-gap: 15px;
  align-items: center;

  @media (prefers-reduced-motion: no-preference) {
    &[data-state="open"] {
      animation: ${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1);
    }
    &[data-state="closed"] {
      animation: ${hide} 100ms ease-in forwards;
    }
    &[data-swipe="move"] {
      transform: translateX(var(--radix-toast-swipe-move-x));
    }
    &[data-swipe="cancel"] {
      transform: translateX(0);
      transition: transform 200ms ease-out;
    }
    &[data-swipe="end"] {
      animation: ${swipeOut} 100ms ease-out forwards;
    }
  }
`

export const CustomTitle = styled(Title)`
  grid-area: title;
  margin-bottom: 5px;
  font-weight: 500;
  color: ${COLORS.primary};
  font-size: 15px;
`

export const CustomDescription = styled(Description)`
  grid-area: description;
  margin: 0;
  color: ${COLORS.overlay};
  font-size: 12px;
`

export const CustomAction = styled(Action)`
  all: unset;
  grid-area: action;
`
