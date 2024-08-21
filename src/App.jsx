import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Panel from './componentes/panel';

function App() {

  return (
    <div>
      <Router>
        <Routes>
            <Route path="/*" element={<Panel />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
