
import { useSelector,useDispatch } from "react-redux"
import { cartREMOVE,cartCOUNT_UP,cartCOUNT_DOWN } from "../../store/cart"

export function CartShower({name,id,price,img,count}){

    const dis = useDispatch()
    const remove = ()=>{
        dis(cartREMOVE(id))
    }

    const countup = ()=>{
        dis(cartCOUNT_UP(id))
    }
    const countdown = ()=>{
        dis(cartCOUNT_DOWN(id))
    }

    return(
        <div id="cart-title" className=" flex justify-center items-center flex-col w-5/6 mb-5 bg-white shadow-slate-400 shadow-2xl mx-auto rounded-3xl mt-5 ">
            <img className="  h-40 w-40  " src={img} alt="" />
            <h1 className="font-extrabold text-6xl bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent mt-auto ">{name}</h1>
            <div className=" justify-evenly items-center flex w-full h-20">
                <div className="flex justify-center items-center w-1/3" >
                    <img onClick={countdown} className=" w-5 h-5 " src="assest/left.svg" alt="left" />
                    <p className="text-3xl mx-3 box-border font-medium text-slate-700" >{count}</p>
                    <img onClick={countup} className=" w-5 h-5 " src="assest/right.svg" alt="right" />
                </div>
                <img onClick={remove} src="assest/trash.svg" className="h-6  w-1/3" alt=""  />
            </div>
            <p  className=" bg-blue-500 text-white w-full h-20 font-medium mt-auto rounded-b-3xl flex justify-center items-center text-4xl ">{price*count}<span>$</span></p>
        </div>
    )
}