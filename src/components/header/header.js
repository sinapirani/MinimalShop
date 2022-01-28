
import ikea from '../icons/ikea.svg'
import cart from '../icons/Buy.svg'
import search from '../icons/Search.svg'


export function Header({item}){

    return(
        <div className=' w-11/12 m-auto '>
            <div className=' h-28 flex justify-center items-center m-auto'>
                <img src={ikea} alt="" className='mr-auto' />
                <img src={search} alt="" className='mr-8' />
                <img src={cart} alt="" />
            </div>
            {item}
        </div>

    )
}