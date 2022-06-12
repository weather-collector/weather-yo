import {Form} from 'formik'
import styled from 'styled-components'
import {COLORS} from '../../../styles/theme'
import {MEDIA_QUERIES} from '../../../utils/mediaQueries'


export const ValuePickerForm = styled(Form)`
  display: flex;
  flex-direction: column;
  max-width: 260px;
  width: 100%;
  flex-shrink: 0;
  > * {
    padding: 10px 10px;
    transition: all 0.15s ease-in-out;
    border-radius: 4px;
    &:hover {
      background-color: ${COLORS.hoveredBg};
    }
    &:active {
      background-color: ${COLORS.activeBg};
      transform: translateX(2px);
    }
  }
  ${MEDIA_QUERIES.lg} {
    flex-direction: row;
    max-width: unset;
    column-gap: 20px;
    > * {
      min-width: 260px;
      flex-grow: 1;
      flex-basis: 0;
    }
    flex-wrap: wrap;
  }
`
