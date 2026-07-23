import { useDispatch,useSelector } from "react-redux";
import { addtocart,removefromcart,clearcart } from "../redux/cartslice";

function Testredux(){

    const dispatch =useDispatch()
    const items = useSelector((state)=>state.cart.items)

    return(
        <div>
            <button onClick={()=>dispatch(addtocart({id:1,name:"test item "}))}> add to cart </button>
            <button onClick={()=>dispatch(clearcart())}> clear </button>
            {
                items.map((item)=>
                    <div key={item.id}>
                    <p> {item.name}</p>
                    <button onClick={()=>dispatch(removefromcart(item.id))}> delete item </button>

                    </div>
                )
            }
        </div>
    )

}
export default Testredux