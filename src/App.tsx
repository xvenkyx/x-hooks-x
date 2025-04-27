import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import Stopwatch from './components/Stopwatch'

function App() {
  const [showCounter,setShowCounter] = useState(true)

  return (
    <>
      <button onClick={()=>setShowCounter(!showCounter)}>
        {showCounter ? 'Switch to Counter' : 'Switch to Stopwatch'}
      </button>
      {showCounter ? <Stopwatch/> : <Counter/>}
    </>
  )
}

export default App
