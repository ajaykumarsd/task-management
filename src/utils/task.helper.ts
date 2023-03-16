import { CreateTaskInterface } from 'pages/CreateTask/CreateTask.types'

export const isUpcomingTask = (row: CreateTaskInterface) => {
  const taskDate = (row.date + ' ' + row.start_time).toString()
  const taskTimestamp = new Date(taskDate).getTime()
  const currentTimeStamp = Math.floor(new Date().getTime())
  if (taskTimestamp > currentTimeStamp) {
    return true
  } else {
    return false
  }
}

export const isTodayTask = (row: CreateTaskInterface) => {
  const taskDate = new Date(row.date.toString())
  taskDate.setHours(0, 0, 0, 0)
  const getTaskDate = `${taskDate.getDate()}/${taskDate.getMonth() + 1}/${taskDate.getFullYear()}`
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const getTodayDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`
  if (getTaskDate === getTodayDate) {
    return true
  }
  return false
}
export const timeConversion = (time: string | string[]) => {
  const time1 = time.match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time]

  if (time.length > 1) {
    time = time.slice(1)
    time1[5] = +time1[0] < 12 ? 'AM' : 'PM'
    time1[0] = +time1[0] % 12 || 12
  }
  return time1.join('')
}
