import ssofa from './pictures/sofa.jpg'
import ssofa2 from './pictures/sofa2.jpg'
import ssofa3  from './pictures/sofa3.jpg'
import ssofa4 from './pictures/sofa4.jpg'
import ssofa5 from './pictures/sofa5.jpg'
import ssofa6 from './pictures/sofa6.jpg'
import {Header} from '../header/header'
import { cartADD } from '../../store/cart'
import { useDispatch,useSelector } from 'react-redux'

export function ProductPage(){

    const items = useSelector(state=>state.items)

    const eventkk = (id)=>{
        console.log(id);
    }
    const dis = useDispatch()
    const addToCart = (item)=>{
        
    }

    return(
        <div data-aos="fade-down" className=' min-h-full w-full'>
            <Header />
            <div className="flex flex-row flex-wrap items-start w-12/12 min-h-screen mx-auto justify-center py-8">
                <div className=" h-40 w-5/6 mx-2 mb-9 shadow-slate-400 shadow-2xl rounded-3xl overflow-hidden bg-white flex flex-row-reverse " >
                    <img className='h-full bg-cover w-1/3' src={ssofa} alt="" />
                    <div className=" h-full flex flex-col justify-center items-start pl-4 w-2/3">

                        <h3 className='font-extrabold text-3xl bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent ' >NIUSHA </h3>
                        <div>
                            <span className=' bg-blue-800 text-blue-200 rounded-md px-2 font-bold mr-1 text-xs ' >B</span>
                            <span className=' bg-green-800 text-green-200 rounded-md px-2 font-bold mr-1 text-xs ' >G</span>
                        </div>
                        <h5 className=' font-semibold bg-gradient-to-r from-blue-800 to-blue-500 text-transparent bg-clip-text text-md rounded-md mt-1' >10,000,000</h5>
                        <button onClick={()=>dis(addToCart())} className=' active:text-blue-200  bg-gradient-to-r from-blue-800 to-blue-500 px-3 py-1 rounded-md mt-3 text-white' >add to cart</button>
                    </div>
                </div>
            </div>
        </div>

    )
}