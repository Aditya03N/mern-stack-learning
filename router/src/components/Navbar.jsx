import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"
const Navbar = () => {
  return (
    <div>
    <nav>
        <NavLink className={(e)=>{return e.isActive?"red":""}} to="/"><li>home</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"red":""}} to="/about"><li>About</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"red":""}} to="/login"><li>login</li></NavLink>
      
     </nav>
    </div>
  )
}

export default Navbar
