
import ikea from '../icons/ikea.svg'
import cart from '../icons/Buy.svg'
import search from '../icons/Search.svg'
import { useSelector } from 'react-redux'


export function Header({item}){

    const cartItemsCount = useSelector(state=>state.cart.items)

    return(
        <div className=' w-11/12 m-auto '>
            <div className=' h-28 flex justify-center items-center m-auto'>
                <img src={ikea} alt="" className='mr-auto' />
                <img src={search} alt="" className='mr-8 relative' />
                <span ch >{cartItemsCount.length}</span>
                <img src={cart} alt="" />
            </div>
            {item}
        </div>

    )
}