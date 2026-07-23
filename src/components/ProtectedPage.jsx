import { useDispatch, useSelector } from "react-redux"
import { logout } from "../redux/authslice"

function ProtectedPage(){
    const dispatch = useDispatch()

    const loggedIn=useSelector((state)=>state.auth.isLoggedIn)
    return(
<div>
    {loggedIn?<div>
        <p> logged in sucessfully</p>
        <button onClick={()=>dispatch(logout())}> logout </button>
    </div>:<p> please log in </p>}
</div>
    )
}

export default ProtectedPage