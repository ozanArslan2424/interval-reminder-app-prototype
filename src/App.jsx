import { Routes, Route, BrowserRouter } from 'react-router-dom'
// COMPONENTS
import Navbar from './components/Navbar.jsx'

// PAGES
import Home from "./pages/home.jsx"
import One from "./pages/one.jsx"
import Two from "./pages/two.jsx"

export default function App() {

  return (
    <BrowserRouter>
      <header><Navbar /></header>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="testone" element={<One />} />
          <Route path="testtwo" element={<Two />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
