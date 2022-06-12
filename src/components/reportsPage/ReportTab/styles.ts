import styled from 'styled-components'
import {MEDIA_QUERIES} from '../../../utils/mediaQueries'


export const GeneralData = styled.div`
  display: flex;
  padding: 10px;
  gap: 40px;
  ${MEDIA_QUERIES.lg} {
    flex-direction: column;
  }
`
