import Head from 'next/head'
import React from 'react'


type MetaHeadProps = {
  themeColor?: string,
  title?: string,
  description?: string,
  keywords?: string
}

const MetaHead = ({
                    themeColor = '#fff',
                    title = 'Weather Collector',
                    description = 'Analise and Collect weather data',
                    keywords = 'weather, collect, data, meteorology',
                  }: MetaHeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width,shrink-to-fit=no,initial-scale=1,maximum-scale=1,user-scalable=0" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta name="theme-color" content={themeColor} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default MetaHead
