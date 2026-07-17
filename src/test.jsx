import { useEffect, useState } from "react"
import axios from "axios"

function Practice (){

const [data,setdata]=useState([])
const [loading,setLoading]=useState(true)
const [error,seterror]=useState(null)

useEffect(()=>{

   async function getdata(){
      try{   const response= await axios.get("https://fake-json-api.mock.beeceptor.com/users")
        setdata(response.data)
    }
    catch(err){
        seterror('loading error')

    }
    finally{
        setLoading(false)
    }
}

getdata()
},[])


return (
    <div>
        {loading?<div className="h-8 w-8 border rounded animate-spin"></div>:
        data.map((dat)=>
            <div  key={dat.name}>
                <p>{dat.name}</p>

            </div>
        
        )}
        {error&&<p>{error}</p>}
        
    </div>
)
}
export default Practice 