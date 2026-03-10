import React, { useState } from 'react'
import './Hook.css'
const Hook = () => {
  const [price, setPrice] = useState(10)
  const increaseHandle = () => {
    const newPrice = price + 1
    setPrice(newPrice)
  }

  const decreaseHandle = () => {
    const newPrice = price - 1
    setPrice(newPrice)
  }
  return (
    <div>
    <h1>Price: {price}</h1>
    <h2>Price:{price}</h2>
    <h3>Price:{price}</h3>
    <h4>Price:{price}</h4>
    <h5>Price:{price}</h5>
    <h6>Price:{price}</h6>
    <button onClick={increaseHandle}>Increase</button>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    <button onClick={decreaseHandle}>Decrease</button>
    </div>
    
  )
}

export default Hook