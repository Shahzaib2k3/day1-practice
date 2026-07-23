import { useEffect, useState } from "react"
import axios from "axios"

function useFetch(url){

    const [data ,setData]=useState([])
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState(null)

    useEffect(()=>{

        async function getdata(){
        try{
            setLoading(true)
            setError(null)
            
            const response= await axios.get(url)
            setData(response.data)
            
        }
        catch(err){
            setError(err)
        }
        finally{
            setLoading(false)
        }
        }
        getdata()


    },[url])

    return{data,loading,error}
    
}
 export default useFetch