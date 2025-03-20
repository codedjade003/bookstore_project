import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import MyFooter from './components/MyFooter'
import Chatbot from './components/Chatbot'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <Outlet/>
      <MyFooter/>
      <Chatbot/>
    </>
  )
}

export default App