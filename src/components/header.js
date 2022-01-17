
import ikea from '../icons/ikea.svg'
import cart from '../icons/Buy.svg'
import search from '../icons/Search.svg'
import banner from '../icons/Banner.png'

export function Header(){

    return(
        <div className=' w-11/12 m-auto'>
            <div className=' h-28 flex justify-center items-center m-auto'>
                <img src={ikea} alt="" className='mr-auto' />
                <img src={search} alt="" className='mr-8' />
                <img src={cart} alt="" />
            </div>
            <h3 id='headtext' className=' font-sans font-medium text-3xl' >Welcome Back <br/> Siba shop is for you</h3>
            <img src={banner} alt="" className="mt-12 bg-cover ml-auto mr-auto" /> 
        </div>

    )
}