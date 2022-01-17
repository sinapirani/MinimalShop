import { useState } from "react"
import { useEffect } from "react"
import { useRef } from "react"

import AOS from 'aos'
import 'aos/dist/aos.css'
import React from "react"
import ReactDOM from "react-dom"
import { SliderPop } from "./slider-pop"
import { SliderNew } from "./slider-new"

export function FirstSlider(){
    AOS.init()
    const [section,setSection] = useState('pop')
    const pop = useRef(null)
    const newItem = useRef(null)
    const wrap = useRef(null)

    useEffect(()=>{
        switch(section){
            case 'pop':
                pop.current.classList.add('text-blue-600')
                pop.current.classList.remove('text-zink-500')
                newItem.current.classList.add('text-zink-500')
                newItem.current.classList.remove('text-blue-600')
                wrap.current.style.left = '0px'
                wrap.current.style.right = 'auto'
                ReactDOM.render(<SliderPop/>,document.getElementById('slidezone'))   
                break
            case 'new':
                newItem.current.classList.add('text-blue-600')
                newItem.current.classList.remove('text-zink-500')
                pop.current.classList.add('text-zink-500')
                pop.current.classList.remove('text-blue-600')
                // wrap.current.style.right = '0px'
                wrap.current.style.left = '100px'
                ReactDOM.render(<SliderNew/>,document.getElementById('slidezone'))   
                break

        }
    },[section])

    return(
        <div  className="w-screen box-border mt-5 h-60 flex items-center" > 
            <div className="flex box-border h-full w-1/6 items-center justify-center">

                <div className=" box-border flex -rotate-90 items-start justify-center flex-wrap">
                    <div className=" box-border flex relative" >
                        <p ref={pop} onClick={()=>setSection('pop')} className="mr-6 text-2xl font-medium " >Papular</p>
                        <p ref={newItem} onClick={()=>setSection('new')} className="mr-6 text-2xl font-medium  ">New</p>                        
                    </div>

                    <div ref={wrap} id="slidewrap" className=" box-border w-20 bg-slate-200 h-1 flex-wrap absolute -bottom-2 "></div>                    
                </div> 
            </div>
            <div id="slidezone" className=" box-border  h-full w-5/6 ">
            </div>
        </div>
    )
}