import * as am5 from '@amcharts/amcharts5'
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated'
import * as am5radar from '@amcharts/amcharts5/radar'
import * as am5xy from '@amcharts/amcharts5/xy'
import React, {useEffect} from 'react'
import {useAppSelector} from '../../../hooks/redux'
import {getWindDirection} from '../../../utils/weather'
import * as Styles from '../styles'


type PolarChartTypes = {
  id: string
}


const PolarChart = ({id}: PolarChartTypes) => {
  const {weatherData} = useAppSelector(state => state.reportReducer)

  const valuesArr = ['0-0.5', '0.5-2', '2-4', '4-6', '6-8', '8-10', '10-100']
  const categories = ['Пн', 'Пн-Сх', 'Сх', 'Пд-Сх', 'Пд', 'Пд-Зах', 'Зах', 'Пн-Зах']

  function generateData(value: string) {
    const values = value.split('-')

    return weatherData.map(day => {
      // if (day.windspeed >= parseInt(values[0]) && day.windspeed < parseInt(values[1])){
        return {
          category: getWindDirection(day.winddir),
          value: day.windspeed,
        }
      // }
    })
  }


  useEffect(() => {
    let root = am5.Root.new(id)

    // root.interfaceColors.set("grid", am5.color('#11181C'))
    // root.interfaceColors.set("primaryButton", am5.color('#3E63DD'))
    // root.interfaceColors.set("primaryButtonHover", am5.color('#8DA4EF'))
    // root.interfaceColors.set("primaryButtonDown", am5.color('#3451B2'))
    // root.interfaceColors.set("primaryButtonActive", am5.color('#3A5CCC'))

    root.setThemes([
      am5themes_Animated.new(root),
    ])

    let chart = root.container.children.push(am5radar.RadarChart.new(root, {
      panX: true,
      panY: false,
      wheelX: "panY",
      wheelY: "zoomX",
      pinchZoomX: true,
    }))

    let cursor = chart.set("cursor", am5radar.RadarCursor.new(root, {
      behavior: "none",
    }))
    cursor.lineY.set("visible", false)

    let xRenderer = am5radar.AxisRendererCircular.new(root, {})
    xRenderer.labels.template.setAll({
      radius: 10,
    })

    let xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
      maxDeviation: 0,
      categoryField: "category",
      renderer: xRenderer,
      tooltip: am5.Tooltip.new(root, {}),
    }))

    let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      renderer: am5radar.AxisRendererRadial.new(root, {}),
    }))

    valuesArr.forEach(range => {
      let series = chart.series.push(am5radar.RadarColumnSeries.new(root, {
        stacked: true,
        name: `${range}`,
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        categoryXField: "category",
        // stroke: root.interfaceColors.get("primaryButton"),
        // tooltip: am5.Tooltip.new(root, {
        //   labelText: `${chartData.label} {valueY}`,
        // }),
      }))

      series.set("stroke", root.interfaceColors.get("background"))
      series.columns.template.setAll({
        width: am5.p100,
        strokeOpacity: 0.1,
        tooltipText: "{name}: {valueY}",
      })

      console.log(generateData(range))
      series.data.setAll(generateData(range))
      series.appear(1000)
    })


    xAxis.data.setAll(generateData('0 - 100'))
    chart.appear(1000, 100)

    return () => root.dispose()
  }, [generateData, id])

  return (
    <Styles.ChartWrapper id={id} />
  )
}

export default PolarChart
