import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'
import { fetchUser } from './services/api'

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

function Header() {
  return (
    <header style={{ background: '#282c34', color: '#fff', padding: '1rem' }}>
      <h1>GitHub User Search</h1>
    </header>
  )
}
export default Header

function Footer() {
  return (
    <footer style={{ background: '#eee', color: '#333', padding: '1rem', marginTop: '2rem', textAlign: 'center' }}>
      <small>&copy; {new Date().getFullYear()} GitHub User Search</small>
    </footer>
  )
}
export default Footer

function WelcomeMessage() {
  return <p>Type a GitHub username to search for their profile.</p>
}
export default WelcomeMessage

function UserProfile() {
  const { username } = useParams()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchUser(username).then(data => {
      setUser(data)
      setLoading(false)
    })
  }, [username])

  if (loading) return <p>Loading...</p>
  if (!user || user.message === 'Not Found') return <p>User not found.</p>

  return (
    <div>
      <h2>{user.login}</h2>
      <img src={user.avatar_url} alt={user.login} width={100} />
      <p>Name: {user.name}</p>
      <p>Bio: {user.bio}</p>
      <p>Public Repos: {user.public_repos}</p>
      <a href={user.html_url} target="_blank" rel="noopener noreferrer">GitHub Profile</a>
    </div>
  )
}
export default UserProfile

const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY

export async function fetchUser(username) {
  const response = await fetch(`https://api.github.com/users/${username}`, {
    headers: GITHUB_API_KEY
      ? { Authorization: `token ${GITHUB_API_KEY}` }
      : {},
  })
  return response.json()
}
