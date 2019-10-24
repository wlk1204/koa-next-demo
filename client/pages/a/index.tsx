import React, { useState, useEffect } from 'react'
import { Button } from 'antd'

const A = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `wanglk, ${count}`
  })

  const addClick = () => setCount(count + 1)

  return (
    <div>
      <p>{`oops, ${count}次发射 🚀 `}</p>
      <Button onClick={addClick}>Add</Button>
    </div>
  )
}

export default A
