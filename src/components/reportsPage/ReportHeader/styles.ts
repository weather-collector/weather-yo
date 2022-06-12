import styled from 'styled-components'
import {COLORS} from '../../../styles/theme'
import {MEDIA_QUERIES} from '../../../utils/mediaQueries'


export const HeaderWrapper = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  ${MEDIA_QUERIES.md} {
    flex-direction: column;
    align-items: unset;
  }
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

export const AveragingButtonsWrapper = styled.div`
  max-width: 220px;
  width: 100%;
  height: 38px;
  display: flex;
  border: 2px solid ${COLORS.accent};
  justify-content: space-between;
  border-radius: 4px;
  margin-top: 4px;
`

export const AveragingButton = styled.button`
  all: unset;
  flex-grow: 1;
  font-size: 14px;
  color: ${COLORS.black};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: transparent;
  transition: background-color 0.15s ease-in-out;

  &:hover {
    background-color: ${COLORS.hoveredBg};
  }

  &:active {
    background-color: ${COLORS.activeBg};
  }
`

export const Divider = styled.span`
  width: 2px;
  background-color: ${COLORS.accent};
`

export const SettingsSection = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-grow: 1;
`
