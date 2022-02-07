import { useSelector,useDispatch } from "react-redux"
import {useRef} from 'react'
import { cartADD } from "../../store/cart"

export function ProductShower({id,name,price,img}){

    const dis = useDispatch()
    const cartProducts = useSelector(state => state.cart.items)
    const adder = (e)=>{
        if(!cartProducts.some(el => el.id === id)){
            dis(cartADD({id,name,price,count:1,img}))
        }
        const item = cartProducts.findIndex(item => item.id === 1)
    }

    return(
        <div data-id={id} className=" h-40 w-5/6 mx-2 mb-9 shadow-slate-400 shadow-2xl rounded-3xl overflow-hidden bg-white flex flex-row-reverse " >
            
            <img className='h-full bg-cover w-1/3' src={img} alt={name} />
            <div className=" h-full flex flex-col justify-center items-start pl-4 w-2/3">

                <h3 className='font-extrabold text-3xl bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent ' >{name}</h3>
                <h5 className=' font-semibold bg-gradient-to-r from-blue-800 to-blue-500 text-transparent bg-clip-text text-md rounded-md mt-1' >{price}$</h5>
                <button onClick={adder} disabled={cartProducts.some(el => el.id === id)} className='disabled:from-gray-400 disabled:to-gray-400 active:text-blue-200  bg-gradient-to-r from-blue-800 to-blue-500 px-3 py-1 rounded-md mt-3 text-white' >{
                    cartProducts.some(el=> el.id === id) ? 'Aded !': 'Add to Cart'
                }</button>
            </div>
        </div>
               
    )

}