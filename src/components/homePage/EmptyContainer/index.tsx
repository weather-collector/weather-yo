import {useRouter} from 'next/router'
import React from 'react'
import * as Styles from './styles'
import {COLORS} from '../../../styles/theme'
import Button from '../../shared/Button'
import Typography from '../../shared/Typography'

import FileIcon from '../../../assets/images/File.svg'
import AnalyticsImage from '../../../assets/images/Analytics.svg'


const EmptyContainer = () => {
  const router = useRouter()
  return (
    <Styles.EmptyContentWrapper>
      <Button
        bgColor={COLORS.successBg}
        hoveredBgColor={COLORS.hoveredSuccessBg}
        activeBgColor={COLORS.activeSuccessBg}
        width={'280px'}
        onClick={() => router.push('/analyze')}
      >
        <FileIcon />
        <Typography textSize={2} textColor={COLORS.successText} fontWeight={400}>Зібрати дані</Typography>
      </Button>
      <AnalyticsImage />
    </Styles.EmptyContentWrapper>
  )
}

export default EmptyContainer
