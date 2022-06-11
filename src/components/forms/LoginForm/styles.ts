import styled from 'styled-components'


export const PasswordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  > * {
    &:nth-child(2){
      cursor: pointer;
      margin-left: auto;
      margin-right: 0;
      margin-top: -18px;
      > * {
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`
