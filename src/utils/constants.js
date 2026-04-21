export const DECISION_TYPES = {
  MATCHMAKING: 'Matchmaking',
  REVIEW_MOD: 'ReviewMod',
  BAN: 'Ban',
  STOREFRONT: 'Storefront',
}

export const DECISION_OUTCOMES = {
  APPROVED: 'approved',
  RESTRICTED: 'restricted',
  UNDER_REVIEW: 'under_review',
}

export const APPEAL_STATUS = {
  PENDING: 'Pending',
  UNDER_REVIEW: 'UnderReview',
  RESOLVED: 'Resolved',
}

export const DECISION_COLORS = {
  approved: {
    border: 'border-decision-approved',
    bg: 'bg-green-50',
    text: 'text-green-700',
    badge: 'bg-green-100 text-green-800',
  },
  restricted: {
    border: 'border-decision-restricted',
    bg: 'bg-red-50',
    text: 'text-red-700',
    badge: 'bg-red-100 text-red-800',
  },
  under_review: {
    border: 'border-decision-review',
    bg: 'bg-yellow-50',
    text: 'text-yellow-700',
    badge: 'bg-yellow-100 text-yellow-800',
  },
  overturned: {
    border: 'border-blue-500',
    bg: 'bg-blue-50',
    text: 'text-blue-700',
    badge: 'bg-blue-100 text-blue-800',
  },
}

export const APPEAL_STATUS_COLORS = {
  Pending: {
    bg: 'bg-gray-100',
    text: 'text-gray-800',
  },
  UnderReview: {
    bg: 'bg-blue-100',
    text: 'text-blue-800',
  },
  Resolved: {
    bg: 'bg-green-100',
    text: 'text-green-800',
  },
}
