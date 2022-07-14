import React, { useState, useCallback } from 'react'
import Header from 'common/Header'
import Footer from 'common/Footer'
import 'styles/style.css'

const Counter: React.VFC = () => {
  const [ count, setCount ] = useState<number>(0)

  const handleIncrement = useCallback(() => {
    setCount(prev => prev +1)
  }, [])

  const handleDecrement = useCallback(() => {
    setCount(prev => prev -1)
  }, [])

  return (
    <div>
      <Header text="ごろごろカウンター"/>
      <div className='main'>
        <p className='countNumber'>{count}</p>
        <button onClick={handleDecrement} className="countButton">-</button>
        <button onClick={handleIncrement} className="countButton">+</button>
      </div>
      <Footer />
    </div>
  )
}

export default Counter
