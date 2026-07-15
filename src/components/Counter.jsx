import { useState } from "react"

function Counter (){
 const [count,setCount]= useState(0)

 function increment(){
setCount(count+1)
 }

 function decrement (){
setCount(count-1)
 }
    
    return (
        <div className="text-4xl text-center bg-gray-600">
            <h2 >current count is {count}</h2>
            <div className="flex gap-4 justify-center"> 
            <button onClick={()=>increment()} className="bg-green-500 p-4 rounded-full text-white"> increment </button>
            <button onClick={()=>decrement()} className="bg-red-500 p-4 rounded-full text-white"> decrement </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

            </div>
        </div>


    )
}

export default Counter