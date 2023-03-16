import React, { useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppLayout from './pages/AppLayout/AppLayout.component'
import CreateTask from './pages/CreateTask/CreateTask.component'
import Inbox from './pages/Inbox/Inbox.component'
import UpcomingComponent from './pages/Upcoming/Upcoming.component'
import StarredComponent from './pages/Starred/Starred.component'
import Chart from 'chart.js/auto'
import { CategoryScale } from 'chart.js'
import CalendarTask from './pages/Calendar/CalendarTask.component'
import Home from 'pages/Home/Home.component'
import { gapi } from 'gapi-script'
const clientId = '265681881967-bmao74io1iju45o42u3viagqfdal7l30.apps.googleusercontent.com';
Chart.register(CategoryScale)
const App = () => {
  useEffect(()=>{
  const start = () =>{
    gapi.client.init({
      clientId: clientId,
      scope: ""
    })
  }
  gapi.load('client: auth2', start);
  })
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/' element={<AppLayout />}>
            <Route path='' element={<Inbox />} />
            <Route path='/create' element={<CreateTask />} />
            <Route path='/inbox' element={<Inbox />} />
            <Route path='/upcoming' element={<UpcomingComponent />} />
            <Route path='/starred' element={<StarredComponent />} />
            <Route path='/calendar' element={<CalendarTask />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
