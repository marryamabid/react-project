import { useState } from 'react'

import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
       <h1>learn about redux toolkit</h1>
       <div>
        <AddTodo/>
        <Todos/>
       </div>
   </>
  )
}

export default App
