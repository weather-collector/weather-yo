import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import highchartsMore from 'highcharts/highcharts-more'
import React from 'react'
import {useAppSelector} from '../../../hooks/redux'
import {calculateWindRoseData} from '../constants'


highchartsMore(Highcharts)

const PolarChart = () => {
  const {weatherData} = useAppSelector(state => state.reportReducer)

  const windDirection = weatherData.map(day => day.winddir).sort((a, b) => a - b)
  const windSpeed = weatherData.map(day => day.windspeed)
  const windSpeedSum = windSpeed.reduce((prevValue, currentValue) => prevValue + currentValue, 0)

  const windRoseData = calculateWindRoseData(windSpeed, windDirection, windSpeedSum)

  const options: Highcharts.Options = {
    // @ts-ignore
    series: windRoseData,
    chart: {
      polar: true,
      type: 'column',
      height: '500px',
    },
    legend: {
      align: 'right',
      verticalAlign: 'top',
      y: 100,
      layout: 'vertical',
    },
    pane: {
      size: '85%',
    },
    xAxis: {
      type: 'category',
      tickmarkPlacement: 'on',
    },
    yAxis: {
      min: 0,
      endOnTick: false,
      showLastLabel: true,
      labels: {
        formatter: function () {
          return this.value + '%'
        },
      },
      reversedStacks: false,
    },
    title: {
      text: '',
    },
    tooltip: {
      valueSuffix: '%',
    },
    plotOptions: {
      series: {
        stacking: 'normal',
        shadow: false,
        pointPlacement: 'on',
      },
    },
  }

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </div>
  )
}

export default PolarChart
