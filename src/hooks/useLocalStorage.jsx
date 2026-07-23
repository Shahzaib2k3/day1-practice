import { useState,useEffect } from "react"

function useLocalStorage(key,initialvalue){

    const [value,setvalue]=useState(()=>{
        const saved =localStorage.getItem(key)
        if(saved===null)
        {
            return initialvalue

        }
        return JSON.parse(saved)
    })
     useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value,setvalue];
}

export default useLocalStorage