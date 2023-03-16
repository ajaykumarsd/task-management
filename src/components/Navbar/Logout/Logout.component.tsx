import React from 'react'
import { GoogleLogout } from 'react-google-login';
import { useNavigate } from 'react-router-dom';

const clientId = '265681881967-bmao74io1iju45o42u3viagqfdal7l30.apps.googleusercontent.com'
const Logout = () => {
  const navigate = useNavigate();
  const onSuccess = () => {
    localStorage.removeItem('user');
    navigate('/');
  }
  return (
    <>
      <GoogleLogout clientId={clientId} buttonText={'Logout'} onLogoutSuccess={onSuccess} />
    </>
  )
}
export default Logout
