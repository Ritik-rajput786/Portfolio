import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './sections/About'
import Contact from './sections/Contact'
import Education from './sections/Education'
import Home from './sections/Home'
import Projects from './sections/Projects'
import Resume from './sections/Resume'
import Skills from './sections/Skills'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  return null
}

function AppLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="mx-auto w-full max-w-7xl px-4 pb-20 pt-28 sm:px-6 lg:px-10">
        {children}
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <AppLayout>
              <Home />
            </AppLayout>
          }
        />
        <Route
          path="/about"
          element={
            <AppLayout>
              <About />
            </AppLayout>
          }
        />
        <Route
          path="/skills"
          element={
            <AppLayout>
              <Skills />
            </AppLayout>
          }
        />
        <Route
          path="/projects"
          element={
            <AppLayout>
              <Projects />
            </AppLayout>
          }
        />
        <Route
          path="/education"
          element={
            <AppLayout>
              <Education />
            </AppLayout>
          }
        />
        <Route
          path="/resume"
          element={
            <AppLayout>
              <Resume />
            </AppLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <AppLayout>
              <Contact />
            </AppLayout>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}

export default App
