import { useEffect, useState } from 'react'
import '../App.css'

function Counter() {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    console.log("Count : ",count)

    return () => {
      console.log("cleaned up")
    }
  },[count])

  return (
    <>
      <h1>Counter</h1>
      <h1>{count}</h1>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          Increment
        </button>
        <button onClick={() => setCount(count - 1)}>
          Decrement
        </button>
      </div>
    </>
  )
}

export default Counter
