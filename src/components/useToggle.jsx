import { useState } from "react"
function useToggle(initalvalue){
    const [value,setvalue]=useState(initalvalue)

    function togglefunction (){
        setvalue(!value)

    }
    return [value,togglefunction]

}
export default useToggle