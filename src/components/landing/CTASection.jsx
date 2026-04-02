import { useNavigate } from 'react-router-dom'
import { User, Code } from 'lucide-react'
import Card from '../common/Card'
import Button from '../common/Button'

const CTASection = () => {
  const navigate = useNavigate()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-navy-deep mb-12">
        Choose Your Portal
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        <Card hover className="text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-crimson bg-opacity-10 p-4 rounded-full">
              <User className="h-12 w-12 text-crimson" />
            </div>
          </div>
          <h3 className="font-heading text-2xl font-semibold text-navy-deep mb-3">
            I'm a Player
          </h3>
          <p className="text-gray-600 mb-6">
            View decisions affecting your account, matchmaking, and content.
            Submit appeals and track their progress with human reviewers.
          </p>
          <Button onClick={() => navigate('/player')} variant="primary" size="large">
            Player Dashboard
          </Button>
        </Card>

        <Card hover className="text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-crimson bg-opacity-10 p-4 rounded-full">
              <Code className="h-12 w-12 text-crimson" />
            </div>
          </div>
          <h3 className="font-heading text-2xl font-semibold text-navy-deep mb-3">
            I'm a Developer
          </h3>
          <p className="text-gray-600 mb-6">
            Understand storefront promotion decisions for your games.
            Get insights into visibility and placement with clear explanations.
          </p>
          <Button onClick={() => navigate('/developer')} variant="primary" size="large">
            Developer Dashboard
          </Button>
        </Card>
      </div>
    </div>
  )
}

export default CTASection
