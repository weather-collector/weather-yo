import styled from 'styled-components'
import {COLORS} from '../../../styles/theme'
import {MEDIA_QUERIES} from '../../../utils/mediaQueries'


export const TempsDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-grow: 1;
`

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 4px;
  border: 1px solid ${COLORS.elementBorder};
  padding: 15px;
`

export const TempBlock = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  ${MEDIA_QUERIES.lg} {
    flex-direction: column;
    overflow-x: auto;
  }
`

export const TempInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 420px;
  width: 100%;
`
