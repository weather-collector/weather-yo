import styled from 'styled-components'
import {MEDIA_QUERIES} from '../../../utils/mediaQueries'


export const EmptyContentWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

export const CollectDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  > svg {
    width: 360px;
  }
  ${MEDIA_QUERIES.sm} {
    > svg {
      width: 200px;
    }
  }
`

export const LatestReports = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  overflow-x: auto;
`
