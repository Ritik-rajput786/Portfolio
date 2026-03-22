import { motion, useScroll, useSpring } from 'framer-motion'
import CustomCursor from './components/CustomCursor'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './sections/Home'

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
    mass: 0.2,
  })

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[60] h-[3px] w-full origin-left bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500"
    />
  )
}

function AppLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <CustomCursor />
      <ScrollProgressBar />
      <Navbar />
      <main className="mx-auto w-full max-w-7xl snap-y snap-mandatory space-y-12 px-4 pb-20 pt-28 sm:px-6 lg:px-10">
        <Home />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return <AppLayout />
}

export default App
