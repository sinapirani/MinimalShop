import {Swiper,SwiperSlide} from "swiper/react"
import { EffectCoverflow } from "swiper"
import 'swiper/css/effect-coverflow'
import 'swiper/css'
import prod from './pictures/prod1.png'
import prod2 from './pictures/prod2.png'
import prod3 from './pictures/prod3.png'
import { Link } from "react-router-dom"

import { useState } from "react"
import { useCallback } from "react"
import { useEffect } from "react"



export function SliderPop(){

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

    const href = useHref()

    return(
        <Swiper id='swiper-pop' data-aos="fade-up" data-aos-delay='300' className=" h-full" slidesPerView={2} modules={[EffectCoverflow]} effect="coverflow" centeredSlides >
            <SwiperSlide className=" bg-stone-600">
                <img src={prod} onClick={()=>{
                    window.history.pushState({},'','/products')
                    window.dispatchEvent(new Event('popstate'))
                } } alt=""  className="h-full w-full"/>
            </SwiperSlide>
            <SwiperSlide className=" bg-stone-200">
                <img src={prod2} alt="" onClick={()=> pushUrl('/products')} className="h-full w-full"/>
            </SwiperSlide>
            <SwiperSlide className=" bg-stone-200">
                <img src={prod3} alt="" onClick={()=> pushUrl('/products')}  className="h-full w-full"/>
            </SwiperSlide> 
        </Swiper>
    )
}