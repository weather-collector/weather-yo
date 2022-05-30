import styled from 'styled-components'
import {COLORS} from '../../../styles/theme'


export const HeaderWrapper = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ReportInfo = styled.div`
  display: flex;
  gap: 50px;
`

export const Location = styled.div`
  display: flex;
  flex-direction: column;
`

export const Coordinates = styled.div`
  display: flex;
  flex-direction: column;
`

export const DateRange = styled.div`
  display: flex;
  flex-direction: column;
`

export const DownloadButton = styled.button`
  all: unset;
  cursor: pointer;
  padding: 4px;
  border: 2px solid ${COLORS.primary};
  border-radius: 4px;
  transition: all 0.15s ease-in-out;
  &:hover {
    background-color: ${COLORS.lightBg};
  }
  &:active {
    background-color: ${COLORS.lightBg};
    transform: translateY(2px);
  }
`
