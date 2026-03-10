import React, { useEffect, useState } from 'react'

const Effect = () => {
  const [count, setCount] = useState(1)
  useEffect(() => {
    alert('alerting') 
  },[])

  useEffect(() => {
    alert('Count state was changed')
  },[count])
  const increase = () => {
  const newCount = count + 1
  setCount(newCount)
  }

  const decrease = () => {
    const newCount = count - 1
    setCount(newCount)
  }
  return (
    <div>
      <h1>Steps:{count}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  )
}

export default Effect