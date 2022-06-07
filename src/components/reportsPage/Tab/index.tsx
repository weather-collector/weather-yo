import dynamic from 'next/dynamic'
import React, {useState} from 'react'
import {Tabs} from 'antd'
import {useAppSelector} from '../../../hooks/redux'
import {useChartData} from '../../../hooks/reports/chartData'
import Analytics from '../Analytics'
import ValuePicker from '../ValuePicker'
import WeatherTable from '../WeatherTable'
import * as Styles from './styles'


const LineChart = dynamic(() => import('../../charts/LineChart'), {ssr: false})
const BarChart = dynamic(() => import('../../charts/BarChart'), {ssr: false})
const PolarChart = dynamic(() => import('../../charts/PolarChart'), {ssr: false})
const {TabPane} = Tabs

const DisplayCorrectChart = () => {
  const {averagingAmount, selectedIndicators} = useAppSelector(state => state.reportReducer)
  const {resultChartData} = useChartData(averagingAmount)

  if (selectedIndicators[0].name === 'precip') {
    return <BarChart id={'precipBarChart'} data={resultChartData} daysAmount={averagingAmount} />
  }
  if (selectedIndicators[0].name === 'winddir') {
    return <PolarChart id={'windDirRoseChart'} />
  }
  return <LineChart id={'weatherIndicatorsChart'} data={resultChartData} daysAmount={averagingAmount} />
}


const ReportTab = () => {
  const [activeTab, setActiveTab] = useState<string>('1')

  const onChangeTab = (key: string) => {
    setActiveTab(key)
  }

  return (
    <Tabs
      defaultActiveKey={'1'}
      type="card"
      size={'large'}
    >
      <TabPane tab="Загальні показники" key="1">
        <Styles.GeneralData>
          <ValuePicker activeTab={activeTab} />
          <div style={{width: '100%'}}>
            <Tabs
              defaultActiveKey={'1'}
              onChange={onChangeTab}
              type={'card'}
              size={'large'}
            >
              <TabPane tab="Таблиця" key="1">
                <WeatherTable />
              </TabPane>
              <TabPane tab="Графік" key="2">
                <DisplayCorrectChart />
              </TabPane>
            </Tabs>
          </div>

        </Styles.GeneralData>
      </TabPane>

      <TabPane tab="Аналітика" key="2">
        <Styles.GeneralData>
          <Analytics />
        </Styles.GeneralData>
      </TabPane>
    </Tabs>
  )
}

export default ReportTab
