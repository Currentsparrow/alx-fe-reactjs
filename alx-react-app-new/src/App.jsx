import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'

function Home() {
  return <h2>Welcome to GitHub User Search!</h2>
}

function About() {
  return <h2>About This App</h2>
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <WelcomeMessage />
      <Header />
      <main style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/:username" element={<UserProfile />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
