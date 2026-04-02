export const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export const formatDateTime = (dateTimeString) => {
  const date = new Date(dateTimeString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

export const truncateText = (text, maxLength = 150) => {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + '...'
}

export const generateAppealId = () => {
  const prefix = 'APP'
  const number = Math.floor(Math.random() * 9000) + 1000
  return `${prefix}${number}`
}
