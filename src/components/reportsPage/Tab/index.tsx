import dynamic from 'next/dynamic'
import React from 'react'
import {Tabs} from 'antd'
import ValuePicker from '../ValuePicker'
import WeatherTable from '../WeatherTable'
import * as Styles from './styles'


const WeatherChart = dynamic(() => import('../../charts/WeatherChart'), {ssr: false})
const {TabPane} = Tabs


const ReportTab = () => {
  const onChange = (key: string) => {
    // console.log(key)
  }

  return (
    <Tabs
      defaultActiveKey={'1'}
      onChange={onChange}
      type="card"
      size={'large'}
    >
      <TabPane tab="Загальні показники" key="1">
        <Styles.GeneralData>
          <ValuePicker />
          <div style={{width: '100%'}}>
            <Tabs
              defaultActiveKey={'1'}
              type={'card'}
              size={'large'}
            >
              <TabPane tab="Таблиця" key="1">
                <WeatherTable />
              </TabPane>
              <TabPane tab="Графік" key="2">
                <WeatherChart />
              </TabPane>
            </Tabs>
          </div>

        </Styles.GeneralData>
      </TabPane>

      <TabPane tab="Аналітика" key="2">
        Content of Tab Pane 2
      </TabPane>
    </Tabs>
  )
}

export default ReportTab
