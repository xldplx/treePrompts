import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import Homepage from './Homepage.jsx'
import Navbar from './components/Navbar.jsx'
import PromptsPage from './PromptsPage.jsx'

const root = createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/prompts" element={<PromptsPage />} />
      </Routes>
    </HashRouter>
  </StrictMode>
)