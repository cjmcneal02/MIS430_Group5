export const appeals = [
  {
    id: 'APP001',
    decisionId: 'DEC001',
    userId: 'P001',
    submitDate: '2026-03-16',
    appealStatus: 'UnderReview',
    userStatement: 'I believe this matchmaking restriction was applied incorrectly. My gameplay has been consistent with community standards, and I have not engaged in any behavior that would warrant this action. I respectfully request a human review of this decision.',
    reviewerName: 'Sarah Chen',
    reviewerNotes: null,
    resolution: null,
    resolutionDate: null,
    timeline: [
      {
        stage: 'Submitted',
        timestamp: '2026-03-16T10:00:00Z',
        status: 'completed',
        description: 'Appeal submitted by user'
      },
      {
        stage: 'Automated Review',
        timestamp: '2026-03-16T10:15:00Z',
        status: 'completed',
        description: 'Initial automated validation completed'
      },
      {
        stage: 'Human Review',
        timestamp: '2026-03-17T09:00:00Z',
        status: 'in_progress',
        description: 'Assigned to human reviewer: Sarah Chen'
      },
      {
        stage: 'Final Decision',
        timestamp: null,
        status: 'pending',
        description: 'Awaiting final decision from reviewer'
      }
    ],
    estimatedResolutionDate: '2026-03-23',
  },
  {
    id: 'APP002',
    decisionId: 'DEC003',
    userId: 'P001',
    submitDate: '2026-01-11',
    appealStatus: 'Resolved',
    userStatement: 'I was not aware of any violation that led to this restriction. I would like clarification on what specific activity triggered this decision.',
    reviewerName: 'Michael Torres',
    reviewerNotes: 'After thorough review, the automated system appears to have flagged legitimate gameplay as suspicious. Restriction overturned.',
    resolution: 'Overturned - restriction removed and account standing restored.',
    resolutionDate: '2026-01-15',
    timeline: [
      {
        stage: 'Submitted',
        timestamp: '2026-01-11T14:30:00Z',
        status: 'completed',
        description: 'Appeal submitted by user'
      },
      {
        stage: 'Automated Review',
        timestamp: '2026-01-11T14:45:00Z',
        status: 'completed',
        description: 'Initial automated validation completed'
      },
      {
        stage: 'Human Review',
        timestamp: '2026-01-12T08:00:00Z',
        status: 'completed',
        description: 'Assigned to human reviewer: Michael Torres'
      },
      {
        stage: 'Final Decision',
        timestamp: '2026-01-15T16:30:00Z',
        status: 'completed',
        description: 'Decision overturned'
      }
    ],
    estimatedResolutionDate: null,
  }
]

export const getAppealById = (id) => appeals.find(appeal => appeal.id === id)
export const getAppealsByUser = (userId) => appeals.filter(appeal => appeal.userId === userId)
export const getAppealByDecision = (decisionId) => appeals.find(appeal => appeal.decisionId === decisionId)
