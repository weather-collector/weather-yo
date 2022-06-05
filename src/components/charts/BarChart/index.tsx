import * as am5 from "@amcharts/amcharts5"
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated"
import * as am5xy from "@amcharts/amcharts5/xy"
import React, {useEffect} from 'react'
import {IChart} from '../../../models/IChart'
import {IChartObject} from '../../../models/IChartObject'
import * as Styles from '../styles'


const BarChart = ({id, data, daysAmount}: IChart) => {

  useEffect(() => {
    let root = am5.Root.new(id)

    root.interfaceColors.set("grid", am5.color('#11181C'))
    root.interfaceColors.set("primaryButton", am5.color('#3E63DD'))
    root.interfaceColors.set("primaryButtonHover", am5.color('#8DA4EF'))
    root.interfaceColors.set("primaryButtonDown", am5.color('#3451B2'))
    root.interfaceColors.set("primaryButtonActive", am5.color('#3A5CCC'))

    root.dateFormatter.setAll({
      dateFormat: "dd-mm-yyyy",
      dateFields: ["dateTime"],
    })

    root.setThemes([
      am5themes_Animated.new(root),
    ])

    let chart = root.container.children.push(am5xy.XYChart.new(root, {
      panX: true,
      panY: false,
      wheelX: "panY",
      wheelY: "zoomX",
      pinchZoomX: true,
    }))

    let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
      behavior: "none",
    }))
    cursor.lineY.set("visible", false)

    let xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
      maxDeviation: 0,
      baseInterval: {timeUnit: "day", count: daysAmount},
      renderer: am5xy.AxisRendererX.new(root, {pan: "zoom"}),
      tooltip: am5.Tooltip.new(root, {}),
      // end: 0.5,
    }))

    let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      maxDeviation: 0,
      renderer: am5xy.AxisRendererY.new(root, {pan: "zoom"}),
    }))

    data.forEach((chartData: IChartObject) => {
      let series = chart.series.push(am5xy.ColumnSeries.new(root, {
        name: `series-${chartData.name}`,
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        valueXField: "dateTime",
        stroke: root.interfaceColors.get("primaryButton"),
        tooltip: am5.Tooltip.new(root, {
          labelText: `${chartData.label} {valueY}`,
        }),
      }))
      // series.set("fill", am5.color('#3E63DD'))
      series.data.processor = am5.DataProcessor.new(root, {
        dateFormat: "dd-mm-yyyy",
        dateFields: ["dateTime"],
      })
      series.data.setAll(chartData.chartData)
      series.appear(1000)
    })
    chart.appear(1000, 100)

    return () => root.dispose()
  }, [data])

  return (
    <Styles.ChartWrapper id={id} />
  )
}

export default BarChart
