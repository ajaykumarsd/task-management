import React from 'react'
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

Chart.register(CategoryScale)
const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AppLayout />}>
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
