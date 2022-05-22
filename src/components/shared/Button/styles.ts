import styled from 'styled-components'


type ButtonProps = {
  bgColor?: string
  hoveredBgColor?: string
  activeBgColor?: string
  width: string
}

export const Button = styled.button<ButtonProps>`
  cursor: pointer;
  padding: 8px 12px;
  max-width: ${props => props.width};
  width: 100%;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 1px solid ${props => props.bgColor};
  background-color: ${props => props.bgColor};
  transition: all 0.15s;
  text-align: center;
  &:hover {
    border: 1px solid ${props => props.hoveredBgColor};
    background-color: ${props => props.hoveredBgColor};
  }
  &:active {
    border: 1px solid ${props => props.activeBgColor};
    background-color: ${props => props.activeBgColor};
    transform: translateY(2px);
  }
`
