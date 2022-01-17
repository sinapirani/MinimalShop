import { useState } from "react"
import { useEffect } from "react"
import { useRef } from "react"

export function FirstSlider(){

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
                break
            case 'new':
                newItem.current.classList.add('text-blue-600')
                newItem.current.classList.remove('text-zink-500')
                pop.current.classList.add('text-zink-500')
                pop.current.classList.remove('text-blue-600')
                // wrap.current.style.right = '0px'
                wrap.current.style.left = '100px'
                break

        }
    },[section])

    return(
        <div className="w-screen box-border mt-5 h-60 flex items-center " > 
            <div className="flex box-border h-full w-1/6 items-center justify-center">

                <div className=" box-border flex -rotate-90 items-start justify-center flex-wrap">
                    <div className=" box-border flex relative" >
                        <p ref={pop} onClick={()=>setSection('pop')} className="mr-6 text-2xl font-medium " >Papular</p>
                        <p ref={newItem} onClick={()=>setSection('new')} className="mr-6 text-2xl font-medium  ">New</p>                        
                    </div>

                    <div ref={wrap} id="slidewrap" className=" box-border w-20 bg-slate-200 h-1 flex-wrap absolute -bottom-2 "></div>                    
                </div> 
            </div>
            <div className=" box-border bg-cyan-500 h-full w-5/6 "></div>
        </div>
    )
}