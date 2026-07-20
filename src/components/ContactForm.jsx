import { useState } from "react"
import { useForm } from "react-hook-form"

function Contactform (){
    const {register,handleSubmit,formState:{ errors }}= useForm()
    const[submitted,setSubmitted]=useState(false)

    function onSubmit(data){
        console.log(data)
        setSubmitted(!submitted)
    }
     return (
        <div>
        <div>
            Contact form 
        </div>
        {submitted?<p>thanks!</p>:<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mx-2 gap-2  " >
            <input type="text" placeholder="name" {...register("name",{required:"name is required"})} className="w-40 bg-red-500"/>
            {errors.name&&<p>{errors.name.message}</p>}
            <input type="email" placeholder="email" {...register("email",{required:"email is required", pattern:{
                value:/^\S+@\S+\.\S+$/,
                message:"enter a valid email",

            }},)} className="w-40 bg-red-500"/>
            {errors.email&& <p>{errors.email.message}</p>}
            <textarea placeholder="message" {...register("message",{required:"message is required ",minLength:{
                value:10,
                message:" message should be at least 10 charecters"
            }})} className="w-40 bg-red-500"/>
            {errors.message&&<p>{errors.message.message}</p>}
            <button type="submit" className="w-40 bg-red-500" > Submit </button>
        </form>}
       
        </div>
     )
}
export default Contactform