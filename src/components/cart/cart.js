
import { Header } from "../header/header"
import { useSelector,useDispatch } from "react-redux"
import {CartShower} from './cartShower'
export function Cart(){

    const cartItems = useSelector(state=>state.cart.items)

    return(
        <div className=" min-h-screen bg-yellow-200 ">
            <Header/>
            <div className="w-full h-full bg-green-900">
                {
                    cartItems.map((item,key)=>{
                        return(
                            <CartShower />
                        )
                    })
                }
            </div>
        </div>
    )
}