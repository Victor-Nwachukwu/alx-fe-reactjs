import { useState } from 'react'
import './App.css'
import './index.css' // Import the Tailwind CSS styles
import UserProfile from './components/UserProfile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <UserProfile />
    </>
  )
}

export default App
