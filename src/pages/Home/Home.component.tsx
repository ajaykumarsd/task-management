import React from 'react'
import { GoogleLogin } from 'react-google-login'
import { useNavigate } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import { ObjectInterface } from './Home.types'
import { LoginCard } from './Home.styles'

const clientId = '265681881967-bmao74io1iju45o42u3viagqfdal7l30.apps.googleusercontent.com'
const Home = () => {
  const navigate = useNavigate()
  const onSuccess = (res: any) => {
    localStorage.setItem('user', JSON.stringify(res.profileObj))
    navigate('/inbox')
  }
  const onFailure = (res: ObjectInterface) => {
    console.log('failure', res)
  }
  return (
    <LoginCard>
      <div>
        <Card style={{ width: '45rem' }}>
          <Card.Body>
            <Card.Title>
              <h3>Task Management Dashboard</h3>
            </Card.Title>
            <Card.Text>Task Management Dashboard Platform</Card.Text>
            <GoogleLogin
              clientId={clientId}
              buttonText='Login with Google'
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={'single_host_origin'}
              isSignedIn={true}
            />
          </Card.Body>
        </Card>
      </div>
    </LoginCard>
  )
}
export default Home
