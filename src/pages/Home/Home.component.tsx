import React from 'react'
import { GoogleLogin } from 'react-google-login'
import { useNavigate } from 'react-router-dom'

const clientId = '265681881967-bmao74io1iju45o42u3viagqfdal7l30.apps.googleusercontent.com'
const Home = () => {
  const navigate = useNavigate()
  const onSuccess = (res: any) => {
    localStorage.setItem('user', JSON.stringify(res.profileObj))
    navigate('/inbox')
  }
  const onFailure = (res: any) => {
    console.log('failure', res)
  }
  return (
    <>
      <GoogleLogin
        clientId={clientId}
        buttonText='Google Login'
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </>
  )
}
export default Home
