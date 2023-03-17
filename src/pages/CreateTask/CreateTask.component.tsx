import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import { CreateTaskInterface, CreateTaskPropsInterface, EventInterface } from './CreateTask.types'

const CreateTask = (props: CreateTaskPropsInterface) => {
	const [taskDetails, setTaskDetails] = useState<CreateTaskInterface>({
		taskname: '',
		date: '',
		start_time: '',
		end_time: '',
		isStarred: false
	})
	const handleChange = (event: EventInterface) => {
		setTaskDetails({ ...taskDetails, [event.target.name]: event.target.value })
	}
	const saveTask = () => {
		const getTasksList = JSON.parse(localStorage.getItem('task')!) || []
		props.onHide()
		getTasksList.push(taskDetails)
		localStorage.removeItem('task')
		localStorage.setItem('task', JSON.stringify(getTasksList))
	}
	return (
		<Modal {...props} centered>
			<Modal.Header closeButton>
				<Modal.Title id='contained-modal-title-vcenter'>Create Task</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Group className='mb-3' controlId='formBasicEmail'>
						<Form.Label>Task Name</Form.Label>
						<Form.Control
							type='text'
							placeholder='Enter task name'
							name='taskname'
							value={taskDetails.taskname}
							onChange={handleChange}
						/>
					</Form.Group>
					<Form.Group className='mb-3' controlId='formBasicEmail'>
						<Form.Label>Schedule Date</Form.Label>
						<Form.Control
							type='date'
							value={taskDetails.date}
							name='date'
							onChange={handleChange}
						/>
					</Form.Group>
					<Form.Group className='mb-3' controlId='formBasicEmail'>
						<Form.Label>Start Time</Form.Label>
						<Form.Control
							type='time'
							value={taskDetails.start_time}
							name='start_time'
							onChange={handleChange}
						/>
					</Form.Group>
					<Form.Group className='mb-3' controlId='formBasicEmail'>
						<Form.Label>End Time</Form.Label>
						<Form.Control
							type='time'
							value={taskDetails.end_time}
							name='end_time'
							onChange={handleChange}
						/>
					</Form.Group>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Cancel</Button>
				<Button variant='primary' type='submit' onClick={saveTask}>
					Submit
				</Button>
			</Modal.Footer>
		</Modal>
	)
}
export default CreateTask
