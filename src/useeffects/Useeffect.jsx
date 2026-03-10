import React, { useEffect, useState } from 'react'

const Useeffect = () => {
  const [product, setProduct] = useState(0)

  useEffect(() => {
    alert('I am Towfiqul Islam')
  }, [])

  useEffect(() => {
    alert('Now I am changed')
  }, [product])

  const increase = () => {
  const update = product + 1
  setProduct(update)
  }

  const decrease = () => {
    const update = product - 1
    setProduct(update)
  }

  return (
    <div>
    <h1>Timer:{product}</h1>
    <h1>Timer:{product}</h1>
    <h1>Timer:{product}</h1>
    <h1>Timer:{product}</h1>
    <h1>Timer:{product}</h1>
    <h1>Timer:{product}</h1>
    <button onClick={increase}>Plus</button>
    <button onClick={decrease}>Mynus</button>
    </div>
  )
}

export default Useeffect