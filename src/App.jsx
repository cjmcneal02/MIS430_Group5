import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import PlayerDashboard from './pages/PlayerDashboard'
import DeveloperDashboard from './pages/DeveloperDashboard'
import AppealSubmission from './pages/AppealSubmission'
import AppealStatus from './pages/AppealStatus'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/player" element={<PlayerDashboard />} />
        <Route path="/developer" element={<DeveloperDashboard />} />
        <Route path="/appeal/submit" element={<AppealSubmission />} />
        <Route path="/appeal/status" element={<AppealStatus />} />
        <Route path="/appeal/:appealId" element={<AppealStatus />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
