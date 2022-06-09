import * as am5 from "@amcharts/amcharts5"
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated"
import * as am5xy from "@amcharts/amcharts5/xy"
import React, {useEffect} from 'react'
import {IChart} from '../../../models/IChart'
import {IChartObject} from '../../../models/IChartObject'
import * as Styles from '../styles'


const LineChart = ({id, data, daysAmount}: IChart) => {

  useEffect(() => {
    let root = am5.Root.new(id)

    root.interfaceColors.set("grid", am5.color('#11181C'))
    root.interfaceColors.set("primaryButton", am5.color('#3E63DD'))
    root.interfaceColors.set("primaryButtonHover", am5.color('#8DA4EF'))
    root.interfaceColors.set("primaryButtonDown", am5.color('#3451B2'))
    root.interfaceColors.set("primaryButtonActive", am5.color('#3A5CCC'))

    root.dateFormatter.setAll({
      dateFormat: "dd-mm-yyyy",
      dateFields: ["dateOfTime"],
    })

    root.setThemes([
      am5themes_Animated.new(root),
    ])

    let chart = root.container.children.push(am5xy.XYChart.new(root, {
      panX: false,
      panY: false,
      wheelX: "panY",
      wheelY: "zoomX",
      pinchZoomX: true,
    }))

    let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
      behavior: "none",
    }))
    cursor.lineY.set("visible", false)

    let xAxis = chart.xAxes.push(am5xy.GaplessDateAxis.new(root, {
      maxDeviation: 0,
      baseInterval: {timeUnit: "day", count: daysAmount},
      gridIntervals: [
        {timeUnit: "day", count: 1},
        {timeUnit: "month", count: 1},
      ],
      renderer: am5xy.AxisRendererX.new(root, {pan: "zoom"}),
      tooltip: am5.Tooltip.new(root, {}),
      extraMax: 0.01,
    }))

    let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      maxDeviation: 0,
      extraMax: 0.1,
      renderer: am5xy.AxisRendererY.new(root, {pan: "zoom"}),
    }))

    data.forEach((chartData: IChartObject) => {
      let series = chart.series.push(am5xy.SmoothedXLineSeries.new(root, {
        name: `series-${chartData.name}`,
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        valueXField: "dateOfTime",
        stroke: root.interfaceColors.get("primaryButton"),
        tooltip: am5.Tooltip.new(root, {
          labelText: `${chartData.label} {valueY}`,
        }),
      }))

      if (daysAmount >= 10) {
        series.bullets.push(() => {
          return am5.Bullet.new(root, {
            locationY: 1,
            sprite: am5.Label.new(root, {
              text: "{valueY}",
              centerY: am5.p100,
              centerX: am5.p50,
              populateText: true,
              fontSize: '14px',
            }),
          })
        })
      }

      series.strokes.template.setAll({
        strokeWidth: 2,
      })
      series.fills.template.setAll({
        fillOpacity: 0.2,
        visible: true,
      })
      series.bullets.push(() => {
        return am5.Bullet.new(root, {
          locationY: 0,
          sprite: am5.Circle.new(root, {
            radius: 2,
            stroke: root.interfaceColors.get("primaryButton"),
            strokeWidth: 2,
            fill: series.get("fill"),
          }),
        })
      })

      series.set("fill", am5.color('#3E63DD'))

      series.data.processor = am5.DataProcessor.new(root, {
        dateFormat: "dd-mm-yyyy",
        dateFields: ["dateOfTime"],
      })

      series.data.setAll(chartData.chartData)

      series.appear(1000)
    })
    chart.appear(1000, 100)

    return () => root.dispose()
  }, [data, daysAmount, id])

  return (
    <Styles.ChartWrapper id={id} />
  )
}

export default LineChart
