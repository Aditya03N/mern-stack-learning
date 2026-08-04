import React,{useContext} from "react";
import Component1 from "./Component1";
import { countercontext } from "../context/context";


const Button = () => {
   const value = useContext(countercontext)
  return (
   <button  onClick={() => value.setCount((count) => count + 1)}>
     <div>
   <span>
                
        <Component1/>
      </span>
    </div>
   </button>
  );
};

export default Button;
