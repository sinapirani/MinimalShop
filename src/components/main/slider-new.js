import {Swiper,SwiperSlide} from "swiper/react"
import { EffectCoverflow } from "swiper"
import 'swiper/css/effect-coverflow'
import 'swiper/css' 
import prod1 from './pictures/prod2.png'
import prod2 from './pictures/prod3.png'
import prod3 from './pictures/prod5.png'
import prod4 from './pictures/prod3.png'
import { Link } from "react-router-dom"

export function SliderNew(){

    return(
        <Swiper data-aos="fade-up" data-aos-delay='300' className=" h-full" slidesPerView={2} modules={[EffectCoverflow]} effect="coverflow" centeredSlides >
        <SwiperSlide className=" bg-stone-600 rounded-3xl overflow-hidden ">
            <img className="w-full h-full linkedImg" src={prod1} alt="" />
        </SwiperSlide>
    </Swiper>
    )
}
