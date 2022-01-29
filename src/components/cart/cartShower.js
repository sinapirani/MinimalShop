
import { useSelector,useDispatch } from "react-redux"
import { cartREMOVE } from "../../store/cart"

export function CartShower({name,id,price,img,count,key}){

    const dis = useDispatch()
    const remove = ()=>{
        dis(cartREMOVE(id))
    }

    return(
        <div id="cart-title" key={key} className=" flex justify-center items-center flex-col w-5/6 mb-5 bg-white shadow-slate-400 shadow-2xl mx-auto rounded-3xl mt-5 ">
            <img className="  h-40 w-40  " src={img} alt="" />
            <h1 className="font-extrabold text-6xl bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent mt-auto ">{name}</h1>
            <div className=" justify-evenly items-center flex w-full h-20">
                <p className=" text-slate-7000 font-medium flex justify-center items-center text-3xl px-2 w-1/3 text-slate-700 " >{price}<span>$</span></p>
                <div className="flex justify-center items-center w-1/3" >
                    <img className=" w-5 h-5 " src="assest/left.png" alt="left" />
                    <p className="text-3xl mx-3 box-border text-slate-800 font-medium text-slate-700" >{count}</p>
                    <img className=" w-5 h-5 " src="assest/right.png" alt="right" />
                </div>
                <img onClick={remove} src="assest/trash.svg" className="h-6  w-1/3" alt=""  />
            </div>
            <button className=" bg-blue-500 text-white w-full h-20 text-2xl font-medium mt-auto rounded-b-3xl">continue</button>
        </div>
    )
}