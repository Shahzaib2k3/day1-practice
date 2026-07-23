import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { useState } from "react"

function Postform(){

    const [title,setTitle]=useState("")
    const [body,setBody]=useState("")
    const mutation =useMutation({
        mutationFn: (newPost) =>axios.post('https://jsonplaceholder.typicode.com/posts', newPost)
    })
    function submit(){
        mutation.mutate({title,body})
    }
    return(
       <div>
        <input type="text" placeholder="title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <input type="text" placeholder="body" value={body} onChange={(e)=>setBody(e.target.value)} />
        <button onClick={submit}>submit</button>
        {mutation.isPending&&<p>submitting...</p>}
        {mutation.isSuccess&&<p>post created id:{mutation.data.data.id}</p>}
        {mutation.isError&& <p>something went wrong</p>}
       </div>
    )
}
export default Postform