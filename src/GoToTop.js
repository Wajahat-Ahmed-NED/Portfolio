
import "./App.css"
import {RiRocketFill} from "react-icons/ri"
import { animateScroll as scroll } from 'react-scroll'

const GoToTop = () => {

    
    
    return (
        <div >
          <RiRocketFill id="top" onClick={() => scroll.scrollToTop()} className="rocket"/>

            
        </div>
    )
}

export default GoToTop
