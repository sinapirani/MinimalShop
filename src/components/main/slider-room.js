import { Swiper,SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper";
import 'swiper/css/effect-coverflow'
import 'swiper/css'

import prod from './pictures/prod4.png'
import prod2 from './pictures/prod5.png'
import prod3 from './pictures/prod3.png'
import { useState } from "react"
import { useCallback } from "react"
import { useEffect } from "react"


export function SliderRoom({}){

    function useHref() {
        const [href, setHref] = useState(window.location.href);
        const listener = useCallback(href => {
            setHref(window.location.href);
        });
        useEffect(() => {
            window.addEventListener('popstate', listener);
            return () => {
                window.removeEventListener('popstate', listener);
            };
        });
        return href;
    }
    const pushUrl = href => {
        window.history.pushState({}, '', href);
        window.dispatchEvent(new Event('popstate'));
    };

    return(
        <Swiper data-aos="fade-up" data-aos-delay='300' className=" h-full" slidesPerView={2} modules={[EffectCoverflow]} effect="coverflow" centeredSlides >
            <SwiperSlide className=" bg-stone-600 rounded-3xl overflow-hidden">
                <img className="w-full h-full" onClick={()=> pushUrl('/products')} src={prod} alt="" />
            </SwiperSlide>
            <SwiperSlide className=" bg-stone-600 rounded-3xl overflow-hidden">
                <img className="w-full h-full" onClick={()=> pushUrl('/products')} src={prod2} alt="" />
            </SwiperSlide>
            <SwiperSlide className=" bg-stone-600 rounded-3xl overflow-hidden">
                <img className="w-full h-full" onClick={()=> pushUrl('/products')} src={prod3} alt="" />
            </SwiperSlide>
        </Swiper>
    )
}
