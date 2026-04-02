import { Star, Download, MessageSquare } from 'lucide-react'
import Card from '../common/Card'
import Badge from '../common/Badge'

const GameCard = ({ game }) => {
  return (
    <Card hover>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-48 h-32 bg-gradient-to-br from-navy-light to-crimson rounded-lg flex items-center justify-center">
          <div className="text-white text-center">
            <p className="font-heading text-2xl font-bold">{game.title}</p>
            <p className="text-sm opacity-80">{game.genre}</p>
          </div>
        </div>

        <div className="flex-grow">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="font-heading text-2xl font-semibold text-navy-deep mb-1">
                {game.title}
              </h3>
              <p className="text-sm text-gray-600">{game.description}</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-yellow-500" />
              <div>
                <p className="text-sm text-gray-600">Rating</p>
                <p className="font-semibold text-navy-deep">{game.averageRating}</p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Download className="h-5 w-5 text-blue-500" />
              <div>
                <p className="text-sm text-gray-600">Downloads</p>
                <p className="font-semibold text-navy-deep">{game.totalDownloads.toLocaleString()}</p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <MessageSquare className="h-5 w-5 text-green-500" />
              <div>
                <p className="text-sm text-gray-600">Reviews</p>
                <p className="font-semibold text-navy-deep">{game.totalReviews.toLocaleString()}</p>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2">
            <span className="text-sm text-gray-600">Price:</span>
            <Badge color="blue">${game.price}</Badge>
            <span className="text-sm text-gray-600 ml-4">Released:</span>
            <Badge color="gray">{new Date(game.releaseDate).toLocaleDateString()}</Badge>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default GameCard
