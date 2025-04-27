import { useEffect, useState } from "react"

const Stopwatch = ()=>{

    const [count,setCount] = useState(0)
    const [isCounting,setIsCounting] = useState(false)

    const reset = () => {
        setIsCounting(false)
        setCount(0)
    }

    useEffect(()=>{
        if(!isCounting) return

        // setCount(0) //resetting
        
        const interval = setInterval(()=>{
            setCount((prev)=>prev+1)
        },1000)
        
        return ()=>{
            clearInterval(interval) //stopping
        }
    },[isCounting])

    return (
        <>
            <h1>Stopwatch</h1>
            <h1>{count}</h1>
            <div className="card">
                <button onClick={()=>{
                    setIsCounting(!isCounting)
                }}>
                    {isCounting ? 'Stop':'Start'}
                </button>
                <button onClick={()=>reset()}>Reset</button>
                <h3>
                    The useEffect runs whenever the component is mounted or when the value in the dependency array changes. 
                </h3>
                <h4>
                    The cleanup function runs whenever the component is unmounted or before the next render.
                </h4>
            </div>
        </>
    )
}


export default Stopwatch