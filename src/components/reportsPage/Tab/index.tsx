import React from 'react'
import {Tabs} from 'antd'
import ValuePicker from '../ValuePicker'


const {TabPane} = Tabs


const ReportTab = () => {
  const onChange = (key: string) => {
    // console.log(key)
  }

  return (
    <Tabs defaultActiveKey="1" onChange={onChange} type="card">
      <TabPane tab="Загальні показники" key="1">
        <ValuePicker />
      </TabPane>
      <TabPane tab="Аналітика" key="2">
        Content of Tab Pane 2
      </TabPane>
    </Tabs>
  )
}

export default ReportTab
