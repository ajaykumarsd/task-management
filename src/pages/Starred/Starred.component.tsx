import { CreateTaskInterface } from 'pages/CreateTask/CreateTask.types'
import React from 'react'
import { InboxItems } from './Starred.styles'
const StarredComponent = () => {
  const data = JSON.parse(localStorage.getItem('task')!)
  const starredItems = data?.filter((row: CreateTaskInterface) => {
    return row.isStarred === true
  })
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
  return (
    <InboxItems>
      <article>
        <h3>Starred Tasks</h3>
        <dl>
          {starredItems?.length
            ? starredItems.map((item: CreateTaskInterface) => {
                return (
                  <>
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
                    <dd>{item.date}</dd>
                  </>
                )
              })
            : 'No Starred item'}
        </dl>
      </article>
    </InboxItems>
  )
}
export default StarredComponent
