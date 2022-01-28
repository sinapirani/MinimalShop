
import { useSelector,useDispatch } from "react-redux"

export function CartShower({name,id,price,img,count}){

    const cartItems = useSelector(state=>state.cart.items)

    return(
        <div></div>
    )
}