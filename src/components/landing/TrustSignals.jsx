import { CheckCircle, Users, Clock, Shield } from 'lucide-react'

const TrustSignals = () => {
  const stats = [
    {
      icon: <CheckCircle className="h-8 w-8 text-crimson" />,
      value: '12,847',
      label: 'Appeals Resolved'
    },
    {
      icon: <Users className="h-8 w-8 text-crimson" />,
      value: '45,000+',
      label: 'Active Users'
    },
    {
      icon: <Clock className="h-8 w-8 text-crimson" />,
      value: '5-7 Days',
      label: 'Average Review Time'
    },
    {
      icon: <Shield className="h-8 w-8 text-crimson" />,
      value: '100%',
      label: 'Human Reviewed'
    }
  ]

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-navy-deep mb-12">
          Built on Trust and Transparency
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-3">
                {stat.icon}
              </div>
              <div className="font-heading text-3xl font-bold text-navy-deep mb-1">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-surface rounded-lg p-8">
          <h3 className="font-heading text-2xl font-semibold text-navy-deep mb-4 text-center">
            Our Commitment
          </h3>
          <div className="max-w-3xl mx-auto text-gray-700 space-y-3">
            <p>
              Every algorithmic decision on our platform can be reviewed by a human. We believe that while automation helps us scale,
              accountability requires human judgment.
            </p>
            <p>
              Our transparency portal gives you visibility into decisions that affect your gaming experience,
              from matchmaking to content moderation, without exposing proprietary algorithms.
            </p>
            <p>
              When you submit an appeal, it goes directly to trained human reviewers who evaluate your case individually.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrustSignals
