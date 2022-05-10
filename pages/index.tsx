import type {NextPage} from 'next'
import {useEffect, useState} from 'react'
import BaseLayout from '../src/components/Layouts/BaseLayout'
import MetaHead from '../src/components/shared/MetaHead'
import Typography from '../src/components/shared/Typography'
import {useAppDispatch, useAppSelector} from '../src/hooks/redux'
import {fetchUsers} from '../src/store/reducers/ActionCreators'
import {COLORS} from '../src/styles/theme'


const Home: NextPage = () => {
  // const [load, setLoad] = useState(true)
  const {isAuth} = useAppSelector(state => state.authReducer)
  // const dispatch = useAppDispatch()
  // const {isLoading, users, error} = useAppSelector(state => state.userReducer)
  // useEffect(() => {
  //   dispatch(fetchUsers())
  // }, [dispatch])
  // useEffect(() => {
  //   setLoad(false)
  // }, [isLoading])

  // if (isLoading) {
  //   return <Typography textSize={3} textColor={'#000'}>Завантаження...</Typography>
  // }

  return (
    <>
      <MetaHead />

      {isAuth ? (
        <BaseLayout>
          {/*{isLoading && <Typography textColor={'#000'} textSize={1}>Загрузка...</Typography>}*/}
          {/*{error && <Typography textColor={'#000'} textSize={1}>{error}</Typography>}*/}
          {/*<Typography textColor={'#000'} textSize={1}>{JSON.stringify(users, null, 2)}</Typography>*/}
        </BaseLayout>
      ) : (
        <Typography textSize={3} textColor={COLORS.accent}>LANDING PAGE</Typography>
      )}
    </>
  )
}

export default Home
