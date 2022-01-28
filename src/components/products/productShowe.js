// import ssofa from './pictures/sofa.jpg'
// import ssofa2 from './pictures/sofa2.jpg'
// import ssofa3  from './pictures/sofa3.jpg'
// import ssofa4 from './pictures/sofa4.jpg'
// import ssofa5 from './pictures/sofa5.jpg'
// import ssofa6 from './pictures/sofa6.jpg'

export function ProductShower({id,name,price,img,key}){

    return(
        <div key={key} data-id={id} className=" h-40 w-5/6 mx-2 mb-9 shadow-slate-400 shadow-2xl rounded-3xl overflow-hidden bg-white flex flex-row-reverse " >
            <img className='h-full bg-cover w-1/3' src={img} alt={name} />
            <div className=" h-full flex flex-col justify-center items-start pl-4 w-2/3">

                <h3 className='font-extrabold text-3xl bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent ' >{name}</h3>
                <h5 className=' font-semibold bg-gradient-to-r from-blue-800 to-blue-500 text-transparent bg-clip-text text-md rounded-md mt-1' >{price}</h5>
                <button className=' active:text-blue-200  bg-gradient-to-r from-blue-800 to-blue-500 px-3 py-1 rounded-md mt-3 text-white' >add to cart</button>
            </div>
        </div>
               
    )

}