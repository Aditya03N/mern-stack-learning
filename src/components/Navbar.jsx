import React,{useEffect} from 'react'


const Navbar = ({color}) => {
  useEffect(() => {
 alert("i run on every render") 
 
},)


useEffect(() => {
 alert("i will 1 time on first render") 
 
}, [])
  
  useEffect(() => {
 alert("color was changed") 
 
},[color])



  return (
    <div>
      hey i am navbar {color} he he
    </div>
  )
}

export default Navbar
