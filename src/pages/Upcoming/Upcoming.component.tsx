import React from 'react'
import { isUpcomingTask } from '../../utils/task.helper.ts'
import { InboxItems } from '../Inbox/Inbox.styles.tsx'
const UpcomingComponent = () => {
  const data = JSON.parse(localStorage.getItem('task')!);
  const upcomingTask = data?.filter((row) => {
    if (isUpcomingTask(row)) {
      return row;
    }
    return false;
  })
  return (
    <InboxItems>
      <article>
        <h1>Upcoming Tasks</h1>
        <dl>
          {upcomingTask?.length
            ? upcomingTask.map((item) => {
                return (
                  <>
                    <dt>
                      <span>{item.taskname}</span>
                    </dt>
                    <dd>{item.date}</dd>
                  </>
                )
              })
            : 'No Upcoming task'}
        </dl>
      </article>
    </InboxItems>
  )
}
export default UpcomingComponent