import React, { useState } from 'react'
import { InboxItems } from './Inbox.styles'
import TaskChart from '../Charts/Chart.component'
import CreateTask from '../CreateTask/CreateTask.component'
import CollapseArrow from '../../assets/icon/addtask.svg'
import { CreateTaskInterface, CreateTaskPropsInterface } from 'pages/CreateTask/CreateTask.types'
const Inbox = () => {
  const [show, setShow] = useState<boolean>(false)
  const data = JSON.parse(localStorage.getItem('task')!)
  const [taskItems, setTaskItems] = React.useState(data)
  const dragItem = React.useRef<any>(null)
  const dragOverItem = React.useRef<any>(null)
  const changeHandler = (item: React.ChangeEvent<HTMLInputElement>) => {
    if (item.target.checked) {
      data.forEach((row: CreateTaskInterface) => {
        if (item.target.name === row.taskname) {
          row.isStarred = true
        }
      })
    } else {
      data.forEach((row: CreateTaskInterface) => {
        if (item.target.name === row.taskname) {
          row.isStarred = false
        }
      })
    }
    localStorage.setItem('task', JSON.stringify(data))
  }
  const TaskModal = (props: CreateTaskPropsInterface) => {
    return <CreateTask {...props} />
  }
  const handleSort = () => {
    const _taskItems = [...taskItems]

    const draggedItemContent = _taskItems.splice(dragItem.current, 1)[0]

    _taskItems.splice(dragOverItem.current, 0, draggedItemContent)

    dragItem.current = null
    dragOverItem.current = null

    setTaskItems(_taskItems)
  }
  return (
    <>
      <InboxItems>
        <article>
          <div className='list-header'>
            <h3>Tasks List</h3>
            <img
              className='add-task'
              src={CollapseArrow}
              alt='add task'
              onClick={() => setShow(true)}
            />
          </div>
          <TaskModal show={show} onHide={() => setShow(false)} />
          <dl>
            {data?.length ? (
              taskItems?.map((item: CreateTaskInterface, index: number) => {
                return (
                  <div
                    draggable
                    className='list-item'
                    key={index}
                    onDragStart={(e) => (dragItem.current = index)}
                    onDragEnter={(e) => (dragOverItem.current = index)}
                    onDragEnd={handleSort}
                    onDragOver={(e) => e.preventDefault()}
                  >
                    <dt>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        onChange={(item) => changeHandler(item)}
                        name={item.taskname}
                        id='taskCheckBox'
                        defaultChecked={item.isStarred}
                      ></input>
                      <span>{item.taskname}</span>
                    </dt>
                    <dd>
                      {' '}
                      <span>{item.date}</span> <i className='fa-solid fa-bars'></i>
                    </dd>
                  </div>
                )
              })
            ) : (
              <>Please create new task</>
            )}
          </dl>
        </article>
      </InboxItems>
      <TaskChart />{' '}
    </>
  )
}
export default Inbox
