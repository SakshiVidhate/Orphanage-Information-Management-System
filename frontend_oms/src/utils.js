import moment from 'moment-timezone'

export const formatDate = (date) => {
  return moment(date).utc().tz('Asia/Kolkata').format('MMMM Do YYYY, h:mm:ss a')
}

export const formatDateAgo = (date) => {
  return moment(date).utc().tz('Asia/Kolkata').fromNow()
}
