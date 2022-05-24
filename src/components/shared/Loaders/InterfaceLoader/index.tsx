import * as Styles from './styles'


const InterfaceLoader = () => {
  return (
    <Styles.LoaderContainer>
      <Styles.Loader>
        {Array.from(Array(8).keys()).map((item, index) => <div key={`loader-item-${index}`} />)}
      </Styles.Loader>
    </Styles.LoaderContainer>
  )
}

export default InterfaceLoader
