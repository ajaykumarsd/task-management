import React from 'react'
import { Pie } from 'react-chartjs-2'
import { ChartStyles } from './Chart.styles'
import { TaskData } from './labels'
import { isUpcomingTask } from '../../utils/task.helper'
import { CreateTaskInterface } from 'pages/CreateTask/CreateTask.types'
const TaskChart = () => {
	const data = JSON.parse(localStorage.getItem('task')!)
	const upcomingTask = data?.filter((row: CreateTaskInterface) => {
		if (isUpcomingTask(row)) {
			return row
		}
		return false
	})
	TaskData[0].number = data.length - upcomingTask.length
	TaskData[1].number = upcomingTask.length
	const chartData = {
		labels: ['Completed', 'Pending'],
		datasets: [
			{
				data: TaskData.map((data) => data.number),
				backgroundColor: ['#008000', '#FF0000'],
				borderColor: 'black',
				borderWidth: 1
			}
		]
	}
	return (
		<ChartStyles>
			<Pie
				data={chartData}
				options={{
					plugins: {
						title: {
							display: true,
							text: 'Completed vs Pending'
						}
					}
				}}
			/>
		</ChartStyles>
	)
}
export default TaskChart
