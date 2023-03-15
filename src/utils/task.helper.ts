export const isUpcomingTask = (row) => {
  const taskDate = (row.date + ' ' + row.start_time).toString()
  const taskTimestamp = new Date(taskDate).getTime()
  const currentTimeStamp = Math.floor(new Date().getTime())
  if (taskTimestamp > currentTimeStamp) {
    return true
  } else {
    return false
  }
}

export const isTodayTask = (row) => {
  const taskDate = new Date((row.date).toString());
  taskDate.setHours(0, 0, 0, 0);
  const getTaskDate = `${taskDate.getDate()}/${taskDate.getMonth() + 1}/${taskDate.getFullYear()}`;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const getTodayDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
  if(getTaskDate === getTodayDate) {
   return true;
  } 
  return false;
}
export const timeConversion = (time) => {
    time = time.match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) { // If time format correct
      time = time.slice(1); // Remove full string match value
      time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    console.log(time.join(''));
    return time.join(''); // return adjusted time or original string
}
