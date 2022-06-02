import * as am5 from "@amcharts/amcharts5"
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated"
import * as am5xy from "@amcharts/amcharts5/xy"
import React, {useEffect} from 'react'
import {useAppSelector} from '../../../hooks/redux'
import {IWeatherData} from '../../../models/IWeatherData'
import * as Styles from './styles'


const WeatherChart = () => {
  const {weatherData, selectedIndicators} = useAppSelector(state => state.reportReducer)

  function generateChartSeries(name: keyof IWeatherData) {
    return weatherData.map(day => ({
      dateTime: day.datetime,
      value: day[name],
    }))
  }

  useEffect(() => {
    let root = am5.Root.new("chartDiv")

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

    let xAxis = chart.xAxes.push(am5xy.GaplessDateAxis.new(root, {
      maxDeviation: 0,
      baseInterval: {timeUnit: "day", count: 1},
      renderer: am5xy.AxisRendererX.new(root, {pan: "zoom"}),
      tooltip: am5.Tooltip.new(root, {}),
      minZoomCount: 4,
      maxZoomCount: 30,
    }))

    let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      maxDeviation: 0.1,
      renderer: am5xy.AxisRendererY.new(root, {pan: "zoom"}),
      // treatZeroAs: 0.01,
      // logarithmic: true,
    }))

    selectedIndicators!.forEach((indicator) => {
      let series = chart.series.push(am5xy.StepLineSeries.new(root, {
        name: `series-${indicator.name}`,
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        valueXField: "dateTime",
        tooltip: am5.Tooltip.new(root, {
          labelText: `${indicator.label} {valueY}`,
        }),
      }))

      series.strokes.template.setAll({
        strokeWidth: 2,
      })

      series.data.processor = am5.DataProcessor.new(root, {
        dateFormat: "dd-mm-yyyy",
        dateFields: ["dateTime"],
      })

      let chartData = generateChartSeries(indicator.name as keyof IWeatherData)
      series.data.setAll(chartData)

      series.bullets.push((root) => {
        return am5.Bullet.new(root, {
          sprite: am5.Circle.new(root, {
            radius: 4,
            fill: series.get("fill"),
          }),
        })
      })

      series.appear(1000)
    })


    chart.appear(1000, 100)

    return () => root.dispose()
  }, [selectedIndicators, weatherData])

  return (
    <Styles.ChartWrapper id={'chartDiv'} />
  )
}

export default WeatherChart
