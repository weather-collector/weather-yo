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
const {TabPane} = Tabs


const ReportTab = () => {
  const {averagingAmount} = useAppSelector(state => state.reportReducer)
  const {resultChartData} = useChartData(averagingAmount)
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
                <LineChart id={'weatherIndicatorsChart'} data={resultChartData} daysAmount={averagingAmount}/>
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
