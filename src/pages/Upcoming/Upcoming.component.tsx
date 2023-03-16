import { CreateTaskInterface } from 'pages/CreateTask/CreateTask.types';
import React from 'react'
import { isUpcomingTask } from '../../utils/task.helper'
import { InboxItems } from '../Inbox/Inbox.styles'
const UpcomingComponent = () => {
  const data = JSON.parse(localStorage.getItem('task')!);
  const upcomingTask = data?.filter((row: CreateTaskInterface) => {
    if (isUpcomingTask(row)) {
      return row;
    }
    return false;
  })
  return (
    <InboxItems>
      <article>
        <h3>Upcoming Tasks</h3>
        <dl>
          {upcomingTask?.length
            ? upcomingTask.map((item: CreateTaskInterface) => {
                return (
                  <div className='list-item'>
                    <dt>
                      <span>{item.taskname}</span>
                    </dt>
                    <dd>{item.date}</dd>
                  </div>
                )
              })
            : 'No Upcoming task'}
        </dl>
      </article>
    </InboxItems>
  )
}
export default UpcomingComponent