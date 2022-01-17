import {Swiper,SwiperSlide} from "swiper/react"

import 'swiper/css'


export function Section({name,el}){
    return(
        <div className="w-12/12 mx-auto mt-8 mb-52">
            <h2 className=" w-11/12 mx-auto text-3xl font-semibold mb-4">{name}</h2>
            {el}
        </div>
    )
}