import React from 'react'
import { memo } from 'react'

const Navbar = ({User,Adjective}) => {
  console.log("Navbar rerendered")
  return (
    <div>
      Hello {User}, {Adjective()}
    </div>
  )
}

export default memo(Navbar)
