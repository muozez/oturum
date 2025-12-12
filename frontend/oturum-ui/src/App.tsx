import QRCard from './components/QRCard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<QRCard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
