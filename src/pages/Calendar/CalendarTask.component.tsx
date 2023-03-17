import React from 'react'
import format from 'date-fns/format'
import getDay from 'date-fns/getDay'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'react-datepicker/dist/react-datepicker.css'
import { CurrentTaskInterface, TaskInterface } from './CalendarTask.types'

const locales = {
	'en-US': require('date-fns/locale/en-US')
}
const localizer = dateFnsLocalizer({
	format,
	parse,
	startOfWeek,
	getDay,
	locales
})
const calendarStyles = {
	height: 500,
	margin: '50px',
	width: '75vw'
}
const CalendarTask = () => {
	const data = JSON.parse(localStorage.getItem('task')!)
	const events: CurrentTaskInterface[] = []
	data.forEach((item: TaskInterface) => {
		const currentItem: CurrentTaskInterface = {
			title: '',
			allDay: false,
			start: new Date(2023, 2, 2),
			end: new Date(2023, 2, 2)
		}
		currentItem.title = item.taskname
		currentItem.allDay = true
		currentItem.start = item.date
		currentItem.end = item.date
		events.push(currentItem)
	})
	return (
		<>
			<Calendar
				localizer={localizer}
				events={events}
				startAccessor='start'
				endAccessor='end'
				style={calendarStyles}
			/>
		</>
	)
}
export default CalendarTask
