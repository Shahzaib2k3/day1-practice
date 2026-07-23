import { useRef, } from "react";

function Rendercount(){

    
    const rendercount=useRef(1)

   function inc(){
  rendercount.current++ 
   console.log(rendercount.current)
   }
    
   
   
    return(
        
        <div>
         <button onClick={inc}>
            click
         </button>
        
         
        
        </div>
    )
}

export default Rendercount