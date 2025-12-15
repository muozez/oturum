import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Success from './components/Success'
import ProtectedRoutes from './utils/ProtectedRoutes'
import Login from './components/Login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route element={<ProtectedRoutes/>}>
          <Route path="/succeed" element={<Success />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
