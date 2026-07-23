import { useState } from "react"
import { useDispatch } from "react-redux"
import { login } from "../redux/authslice"

function LoginForm(){

    const [name,setName]=useState("")
 const dispatch=useDispatch()

 function handlelogin(){
    if(!name) return
    dispatch(login({name:name}))
 }
    return (
     <div>
        <input type="text" placeholder="enter name" value={name} onChange={(e)=>setName(e.target.value)}/>
        <button onClick={()=>handlelogin()}>submit</button>
     </div>
    )
}
export default LoginForm