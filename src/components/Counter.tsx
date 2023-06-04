import React, { useState } from "react"
import classes from  "./Counter.module.scss"

export const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    return setCount(count + 1)
  }

  const decriment = () => {
    return setCount(count - 1)
  }

  return (
    <div className={classes.btn}>
      <h1>Counter: {count}</h1>
      <button onClick={decriment}>Decriment</button>
      <button onClick={increment}>Increment</button>
    </div>
  )
}