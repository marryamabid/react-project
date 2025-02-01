import React,{ useState } from 'react'
import Login from './Components/Login'
import Profile from './Components/Profile'
import './App.css'
import UserContextProvider from './Components/UserContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <h1>Marryam Context</h1>
   <UserContextProvider>
    <Login/>
    <Profile/>
   </UserContextProvider>
   </>
  )
}

export default App
