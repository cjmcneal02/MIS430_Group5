import { Clock, UserCheck, CheckCircle } from 'lucide-react'
import { APPEAL_STATUS_COLORS } from '../../utils/constants'

const AppealStatusBadge = ({ status, size = 'medium' }) => {
  const colors = APPEAL_STATUS_COLORS[status] || APPEAL_STATUS_COLORS.Pending

  const sizeStyles = {
    small: 'px-2 py-0.5 text-xs',
    medium: 'px-2.5 py-1 text-sm',
    large: 'px-3 py-1.5 text-base',
  }

  const iconSize = size === 'small' ? 'h-3 w-3' : size === 'large' ? 'h-5 w-5' : 'h-4 w-4'

  const getIcon = () => {
    switch (status) {
      case 'Pending':
        return <Clock className={iconSize} />
      case 'UnderReview':
        return <UserCheck className={iconSize} />
      case 'Resolved':
        return <CheckCircle className={iconSize} />
      default:
        return <Clock className={iconSize} />
    }
  }

  const getStatusText = () => {
    switch (status) {
      case 'UnderReview':
        return 'Under Review'
      default:
        return status
    }
  }

  return (
    <span className={`inline-flex items-center space-x-1 rounded-full font-medium ${colors.bg} ${colors.text} ${sizeStyles[size]}`}>
      {getIcon()}
      <span>{getStatusText()}</span>
    </span>
  )
}

export default AppealStatusBadge
