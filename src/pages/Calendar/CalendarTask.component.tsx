import React from 'react'
import format from 'date-fns/format'
import getDay from 'date-fns/getDay'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'react-datepicker/dist/react-datepicker.css'

const locales = {
  'en-US': require('date-fns/locale/en-US'),
}
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

const events = [
  {
    title: 'Big Meeting',
    allDay: true,
    start: new Date(2023, 2, 2),
    end: new Date(2023, 2, 2),
  },
  //   {
  //     title: 'Vacation',
  //     allDay: true,
  //     start: new Date(2023, 3, 7),
  //     end: new Date(2023, 3, 10),
  //   },
  //   {
  //     title: 'Conference',
  //     allDay: true,
  //     start: new Date(2023, 3, 20),
  //     end: new Date(2023, 3, 23),
  //   },
]

const CalendarTask = () => {
  const data = JSON.parse(localStorage.getItem('task')!)
  console.log(data)
  //   let temp = {
  //     title: '',
  //     allDay: true,
  //     start: new Date(2023, 2, 2),
  //     end: new Date(2023, 2, 2),
  //   };
  let events = []
  data.forEach((item) => {
    let currentItem: { title: ''; allDay: boolean; start: Date; end: Date } = {
      title: '',
      allDay: false,
      start: new Date(2023, 2, 2),
      end: new Date(2023, 2, 2),
    }
    currentItem.title = item.taskname
    currentItem.allDay = true
    currentItem.start = item.date
    currentItem.end = item.date
    events.push(currentItem)
  })
  console.log(events)
  return (
    <>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor='start'
        endAccessor='end'
        style={{ height: 500, margin: '50px', width: '75vw' }}
      />
    </>
  )
}
export default CalendarTask
