import React from 'react'
import { isTodayTask, timeConversion } from '../../utils/task.helper.ts'
import { CardsItems } from './Cards.styles.tsx'
const Cards = () => {
  const data = JSON.parse(localStorage.getItem('task')!)
  const todaysTask = data?.filter((row) => {
    if (isTodayTask(row)) {
      return row
    }
    return false
  })
  return (
    <>
      <div style={{ borderLeft: '1px solid black', marginLeft: '10px' }}></div>
      <CardsItems>
        <div className='header'>Today's Task</div>
        {todaysTask?.map((item) => {
          return (
            <div className='right-content'>
              <div className='task-box yellow'>
                <div className='description-task'>
                  <div className='time'>{timeConversion(item.start_time)} - {timeConversion(item.end_time)}</div>
                  <div className='task-name'>{item.taskname}</div>
                </div>
                <div className='more-button'></div>
              </div>
            </div>
          )
        })}
      </CardsItems>
    </>
  )
}
export default Cards
