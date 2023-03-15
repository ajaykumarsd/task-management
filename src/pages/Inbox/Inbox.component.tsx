import React from 'react'
import { InboxItems } from './Inbox.styles.tsx'
const Inbox = () => {
  const data = JSON.parse(localStorage.getItem('task')!)
  const changeHandler = (item: React.ChangeEvent<HTMLInputElement>) => {
    if (item.target.checked) {
      data.forEach((row) => {
        if (item.target.name === row.taskname) {
          row.isStarred = true
        }
      })
    } else {
      console.log('unchecked', item.target)
      data.forEach((row) => {
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
        <h3>Tasks List</h3>
        <dl>
          {data?.length ? (
            data?.map((item) => {
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
          ) : (
            <>Please create new task</>
          )}
        </dl>
      </article>
    </InboxItems>
  )
}
export default Inbox
