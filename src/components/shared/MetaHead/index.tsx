import Head from 'next/head'
import React from 'react'


type MetaHeadProps = {
  themeColor?: string,
  title?: string,
  description?: string,
}

const MetaHead = ({
                    themeColor = '#F8FAFF',
                    title = 'Weather collector: збір історичних метеорологічних даних на обраній вами ділянці',
                    description = 'Weather Collector дозволяє аналізувати та збирайти історичні метеорологічні дані на обраних вами' +
                    ' ділянках місцевості із індивідуальними налаштуваннями. Проведіть власний аналіз погодних даних та зробіть' +
                    ' сгенеруйте власні звіти із легкістю.' +
                    ' використовуючи наш додаток',
                  }: MetaHeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width,shrink-to-fit=no,initial-scale=1,maximum-scale=1,user-scalable=0" />
      <meta name="description" content={description} />
      <meta name="theme-color" content={themeColor} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default MetaHead
