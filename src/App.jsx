import { useState } from 'react'
import './App.css'
import Background from './components/Background'
import Forgnd from './components/Forgnd'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='relative w-full h-screen bg-zinc-900'>
       <Background/>
      <Forgnd/>
      </div>
    </>
  )
}

export default App
