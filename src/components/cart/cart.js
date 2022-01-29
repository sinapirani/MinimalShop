
import { Header } from "../header/header"
import { useSelector,useDispatch } from "react-redux"
import {CartShower} from './cartShower'
export function Cart(){
    
    const cartItems = useSelector(state=>state.cart.items)
    const total = useSelector(state=> state.cart.totalcount)
    return(
        <div className=" min-h-screen ">
            <Header/>
            <div className="w-full h-full pb-44">
                <div>
                {
                    cartItems.map((item,key)=>{
                        return(
                            <CartShower key={key} id={item.id} name={item.name} price ={item.price} img={item.img} count={item.count} />
                        )
                    })
                }
                </div>
                <div className="w-5/6 mx-auto flex justify-center text-center flex-col  items-center mt-20" >
                    <div className="flex justify-center items-center" >
                        <p className="text-6xl bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent font-extrabold " >Total:<br/>{total}<span>$</span></p>    
                    </div>
                    <button className="w-4/6 mt-5 h-20 text-3xl text-white rounded-xl font-extrabold bg-gradient-to-r from-blue-700 to-blue-400 disabled:bg-gray-600 " disabled={total > 0? false: true}>Countinue</button>
                </div>
            </div>
        </div>
    )
}