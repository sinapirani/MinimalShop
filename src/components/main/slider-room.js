import { Swiper,SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper";
import 'swiper/css/effect-coverflow'
import 'swiper/css'

import prod from './pictures/prod4.png'
import prod2 from './pictures/prod5.png'
import prod3 from './pictures/prod3.png'

export function SliderRoom({}){

    return(
            <Swiper data-aos="fade-up" data-aos-delay='300' className=" h-full" slidesPerView={2} modules={[EffectCoverflow]} effect="coverflow" centeredSlides >
                <SwiperSlide className=" bg-stone-600 rounded-3xl overflow-hidden">
                    <img className="w-full h-full" src={prod} alt="" />
                </SwiperSlide>
                <SwiperSlide className=" bg-stone-600 rounded-3xl overflow-hidden">
                    <img className="w-full h-full" src={prod2} alt="" />
                </SwiperSlide>
                <SwiperSlide className=" bg-stone-600 rounded-3xl overflow-hidden">
                    <img className="w-full h-full" src={prod3} alt="" />
                </SwiperSlide>
            </Swiper>
    )
}
