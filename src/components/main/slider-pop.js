import {Swiper,SwiperSlide} from "swiper/react"
import { EffectCoverflow } from "swiper"
import 'swiper/css/effect-coverflow'
import 'swiper/css'
import prod from './pictures/prod1.png'
import prod2 from './pictures/prod2.png'
import prod3 from './pictures/prod3.png'


export function SliderPop(){

    return(
        <Swiper id='swiper-pop' data-aos="fade-up" data-aos-delay='300' className=" h-full" slidesPerView={2} modules={[EffectCoverflow]} effect="coverflow" centeredSlides >
            
        <SwiperSlide className=" bg-stone-600">
            <img src={prod} alt=""  className="h-full w-full"/>
        </SwiperSlide>
        <SwiperSlide className=" bg-stone-200">
            <img src={prod2} alt="" className="h-full w-full"/>
        </SwiperSlide>
        <SwiperSlide className=" bg-stone-200">
            <img src={prod3} alt=""  className="h-full w-full"/>
        </SwiperSlide> 
    </Swiper>
    )
}