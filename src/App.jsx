import { Routes, Route, BrowserRouter } from 'react-router-dom'
// COMPONENTS
import Navbar from './components/Navbar.jsx'

// PAGES
import Home from "./pages/home"
import One from "./pages/one"

export default function App() {

  return (
    <BrowserRouter>
      <header><Navbar /></header>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="one" element={<One />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
