import React, { useContext } from 'react'
import { countercontext } from '../context/context'

const Component1 = () => {
  const value = useContext(countercontext)
  return (
    <div>
     {value.count}
    
    </div>
  )
}

export default Component1
