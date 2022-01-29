// import ssofa from './pictures/sofa.jpg'
// import ssofa2 from './pictures/sofa2.jpg'
// import ssofa3  from './pictures/sofa3.jpg'
// import ssofa4 from './pictures/sofa4.jpg'
// import ssofa5 from './pictures/sofa5.jpg'
// import ssofa6 from './pictures/sofa6.jpg'
import {Header} from '../header/header'
import { cartADD } from '../../store/cart'
import { useDispatch,useSelector } from 'react-redux'
import { ProductShower } from './productShower'

export function ProductPage(){

    const products = [
        {id:1,name:'Siba',price:'1000',img: 'assest/pictures/sofa.jpg'},
        {id:2,name:'Saltanat',price:'1200',img:'assest/pictures/sofa2.jpg'},
        {id:3,name:'Max',price:'1400',img: 'assest/pictures/sofa3.jpg'},
        {id:4,name:'JavaScript',price:'1050',img: 'assest/pictures/sofa4.jpg'},
        {id:5,name:'Lisila',price:'1570',img: 'assest/pictures/sofa5.jpg'},
        {id:6,name:'Niusha',price:'1880',img: 'assest/pictures/sofa6.jpg'},
    ]


    return(
        <div data-aos="fade-down" className=' min-h-full w-full'>
            <Header />
            <div className="flex flex-row flex-wrap items-start w-12/12 min-h-screen mx-auto justify-center py-8">
                {
                products.map((item,key)=>{
                    return(
                        <ProductShower key={key} id={item.id} name={item.name} price={item.price} img={item.img} count={item.count}/>
                    )
                })
                }
             </div>
        </div>

    )
}