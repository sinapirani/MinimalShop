import banner from '../icons/Banner.png'


export function HeaderBanner(){
    return(
        <div>
            <h3 id='headtext' className=' font-sans font-medium text-3xl' >Welcome Back <br/> Siba shop is for you</h3>
            <img src={banner} alt="" className="mt-12 bg-cover ml-auto mr-auto" /> 
        </div>
    )
}