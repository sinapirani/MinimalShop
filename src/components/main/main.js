
import { Header } from "../header/header"
import { FirstSlider } from "./slidermain"
import Aos from "aos"
import { Section } from "../section"
import { SliderPop } from "./slider-pop"
import { SliderRoom } from "./slider-room"
import { HeaderBanner } from '../header/header-banner'

export function Main(){
    Aos.init()
    return(
        <div data-aos="fade-up">
            <Header item={<HeaderBanner/>} />
            <FirstSlider/>
            <Section name={'Rooms'} el={<SliderRoom/>}/>

        </div>
    )
}