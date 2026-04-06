const Footer = () => {
  return (
    <footer className="bg-navy-deep text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-heading text-white text-lg font-semibold mb-3">FairPlay Portal</h3>
            <p className="text-sm max-w-[180px]">
              Making algorithmic decisions transparent and fair for the gaming community.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-white text-lg font-semibold mb-3">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-crimson transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-crimson transition-colors">Appeal Guidelines</a></li>
              <li><a href="#" className="hover:text-crimson transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-white text-lg font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-crimson transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-crimson transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-crimson transition-colors">Community Guidelines</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-sm text-center">
          <p>&copy; 2026 FairPlay Portal. Academic prototype for MIS 430 - Culverhouse College of Business.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
