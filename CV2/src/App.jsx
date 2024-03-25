import About from './Components/About'
import Header from './Components/Header'
import Footer from './Components/Footer'

import Experience from './Components/Experience'
import Education from './Components/Education'
import Portfolio from './Components/Portfolio'
import Contact from './Components/Contact'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter basename="/CV2">
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route index element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
