import styled from 'styled-components'


export const BaseContainer = styled.div<{fluid?: boolean}>`
  margin: 0 auto;
  max-width: ${props => props.fluid ? "100%" : "1410px"};
  padding: 0 15px;
`
