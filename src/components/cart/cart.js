
import { Header } from "../header/header"
import { useSelector,useDispatch } from "react-redux"
import {CartShower} from './cartShower'
export function Cart(){

    const cartItems = useSelector(state=>state.cart.items)

    return(
        <div className=" min-h-screen ">
            <Header/>
            <div className="w-full h-full">
                {
                    cartItems.map((item,key)=>{
                        return(
                            <CartShower key={key} id={item.id} name={item.name} price ={item.price} img={item.img} count={item.count} />
                        )
                    })
                }
            </div>
        </div>
    )
}