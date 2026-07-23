import { useDispatch, useSelector } from "react-redux"
import { clearcart,removefromcart } from "../redux/cartslice"

function Cart (){
    const dispatch =useDispatch()
    const isLoggedIn=useSelector((state)=>state.auth.isLoggedIn)

    const items=useSelector((state)=>state.cart.items)
    return(
       <div>
      {isLoggedIn? <div>
           {items.map((item)=>
           <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.desc}</p>
          <p>{item.quantity}</p>
          <button onClick={()=>dispatch(removefromcart(item.id))}>remove</button>
            </div>
        )}
        <button onClick={()=>dispatch(clearcart())}> clear</button>
        </div>:<p>please log in</p>}
        </div>

    )
}

export default Cart