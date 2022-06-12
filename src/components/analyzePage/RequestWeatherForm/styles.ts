import {Form} from 'formik'
import styled from 'styled-components'
import {MEDIA_QUERIES} from '../../../utils/mediaQueries'


export const RequestWeatherForm = styled(Form)`
  display: flex;
  column-gap: 30px;
  align-items: center;
  justify-content: space-between;
  padding: 5px 15px;

  > * {
    &:nth-child(3) {
      margin-top: 2px;
      max-width: 128px;
    }
  }

  ${MEDIA_QUERIES.lg} {
    align-items: flex-start;

    > * {
      &:nth-child(3) {
        align-self: flex-end;
        margin-bottom: 18px;
      }
    }
  }

  ${MEDIA_QUERIES.sm} {
    flex-direction: column;

    > * {
      &:nth-child(3) {
        max-width: unset;
      }
    }
  }
`

export const PlaceWrapper = styled.div`
  display: flex;
  column-gap: 15px;
  flex-grow: 1;

  > * {
    max-width: 220px;
  }

  ${MEDIA_QUERIES.lg} {
    flex-direction: column;
    max-width: 300px;
  }

  ${MEDIA_QUERIES.sm} {
    max-width: unset;

    > * {
      max-width: unset;
    }
  }
`

export const Coordinates = styled.div`
  display: flex;
  column-gap: 15px;
`
