import {useEffect} from 'react'
import {googleAuth} from '../store/reducers/ActionCreators/authActions'
import {useAppDispatch} from './redux'


export const useGoogleAuth = () => {
  const dispatch = useAppDispatch()

  const handleCallbackResponse = (response: any) => {
    dispatch(googleAuth(response.credential))
  }

  useEffect(() => {
    // @ts-ignore
    google.accounts.id.initialize({
      client_id: `${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}`,
      callback: handleCallbackResponse,
    })

    // @ts-ignore
    google.accounts.id.renderButton(
      document.getElementById('google-login'),
      {
        theme: 'outline',
        size: 'large',
        locale: "uk_UA",
        width: 380
      },
    )
  }, [])
}
