import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'
import Counter from './components/Counter'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY

export async function fetchUser(username) {
  const response = await fetch(`https://api.github.com/users/${username}`, {
    headers: {
      Authorization: `token ${GITHUB_API_KEY}`,
    },
  })
  return response.json()
}

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
