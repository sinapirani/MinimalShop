import {Swiper,SwiperSlide} from "swiper/react"
import { EffectCoverflow } from "swiper"
import 'swiper/css/effect-coverflow'
import 'swiper/css' 
import prod1 from './pictures/prod2.png'
import prod2 from './pictures/prod3.png'
import prod3 from './pictures/prod5.png'
import prod4 from './pictures/prod3.png'
import { Link } from "react-router-dom"
import { useState } from "react"
import { useCallback } from "react"
import { useEffect } from "react"


export function SliderNew(){


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
        <Swiper data-aos="fade-up" data-aos-delay='300' className=" h-full" slidesPerView={2} modules={[EffectCoverflow]} effect="coverflow" centeredSlides >
            
        <SwiperSlide className=" bg-stone-600 rounded-3xl overflow-hidden ">
            <div className="h-full w-full">
                <img onClick={()=> pushUrl('/products')} className="w-full h-full linkedImg" src={prod1} alt=""/>
            </div>
        </SwiperSlide>
        <SwiperSlide className=" bg-stone-600 rounded-3xl overflow-hidden ">
            <div className="h-full w-full">
                <img onClick={()=> pushUrl('/products')} className="w-full h-full linkedImg" src={prod2} alt=""/>
            </div>
        </SwiperSlide>
        <SwiperSlide className=" bg-stone-600 rounded-3xl overflow-hidden ">
            <div className="h-full w-full">
                <img onClick={()=> pushUrl('/products')} className="w-full h-full linkedImg" src={prod3} alt=""/>
            </div>
        </SwiperSlide>
    </Swiper>
    )
}
