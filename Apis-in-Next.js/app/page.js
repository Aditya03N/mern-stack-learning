"use client"
import Image from "next/image";
const handleClick=async()=>{
  let data ={
    name:"harry",
    role:"coder"
  }
  let a = await fetch("/api",{
  method: "POST",
   headers: {
    "Content-Type": "application/json",
  },
   body: JSON.stringify(data),
})
  let res =await a.json()
  console.log(res)

}

export default function Home() {
  return (
   <div><h1>Next js apis demo routes</h1>
   <button onClick={handleClick}>Click</button></div>
  );
}
