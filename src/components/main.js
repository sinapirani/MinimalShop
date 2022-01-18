
import { Header } from "./header"
import { FirstSlider } from "./main/slidermain"
import Aos from "aos"
import { Section } from "./section"
import { SliderPop } from "./main/slider-pop"
import { SliderRoom } from "./main/slider-room"
import { HeaderBanner } from './header-banner'

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