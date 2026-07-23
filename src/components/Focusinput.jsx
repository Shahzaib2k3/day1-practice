import { useRef,useEffect } from "react"


function Focusinput(){
const inputRef=useRef(null)
useEffect(()=>{
 inputRef.current.focus()
},[])

function handleclear(){
    inputRef.current.value=""
    inputRef.current.focus()
     
}


return (
        <div>
<input type="text"
 ref={inputRef}
 placeholder="focused"
 className="bg-red-400 rounded w-40 h-6 text-sm text-center" 
 />
 <button className="text-sm text-center p-2 mx-2 rounded-full bg-blue-400  text-red-400 hover:shadow-xl hover:bg-blue-600"
 onClick={handleclear}
 >
    clear & focus 
 </button>


        </div>
    )
}

export default Focusinput