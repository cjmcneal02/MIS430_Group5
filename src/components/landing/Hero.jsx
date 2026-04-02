import { Shield } from 'lucide-react'

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-navy-deep via-navy-light to-navy-deep text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <Shield className="h-20 w-20 text-crimson" />
          </div>
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
            FairPlay Portal
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
            Making AI-Driven Decisions Transparent and Fair
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Understand how algorithmic decisions affect your gaming experience.
            From matchmaking to content moderation, we believe in transparency and accountability.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
