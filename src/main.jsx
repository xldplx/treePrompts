import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'

// the pages
import Homepage from './Homepage.jsx'
import Navbar from './components/Navbar.jsx'
import PromptsPage from './PromptsPage.jsx' 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/prompts" element={<PromptsPage />} />
      </Routes>
    </Router>
  </StrictMode>,
)