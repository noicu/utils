/**
 * 获取给定日期当天所有指定间隔颗粒度的时间戳
 * @param date 日期
 * @param interval 间隔颗粒度，默认为 hour, 可选值有 hour, minute, second
 */
export function getDayTimestamps(date: Date, interval: 'hour' | 'minute' | 'second' = 'hour') {
  const timestamps = []
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()
  for (let i = 0; i < 24; i++) {
    const hour = new Date(year, month, day, i)
    if (interval === 'hour') {
      timestamps.push(hour.getTime())
    }
    else {
      for (let j = 0; j < 60; j++) {
        const minute = new Date(year, month, day, i, j)
        if (interval === 'minute') {
          timestamps.push(minute.getTime())
        }
        else {
          for (let k = 0; k < 60; k++) {
            const second = new Date(year, month, day, i, j, k)
            timestamps.push(second.getTime())
          }
        }
      }
    }
  }
  return timestamps
}
