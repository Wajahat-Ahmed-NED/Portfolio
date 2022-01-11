import React from 'react'
import "./home.css"
import { FaYoutube  } from "react-icons/fa"
// import my from "../images/mine1.jpeg"

    import Typing from 'react-typing-animation';
    import my from '../images/Programming1.png'
    import Icon from './Icon';


const Home = () => {
    return (
        <div className="home" id="Home">
            <div className="home__contai">
                <section className="first">
                    <Icon />
                     
            
                      <div className="first_text_sec">
                          <h6 className="typ">
                          <span style={{color:"#ff4a57"}}>I</span> am 
                          <span style={{color:"#ff4a57"}}> M</span>udassir
                          <span style={{color:"#ff4a57"}}> J</span>amal
                          </h6>

                         <p>A passionate Front-End Developer 🚀 having an experience of building
                              Web and Mobile applications with JavaScript 
                             / Reactjs  / React Native and some other cool libraries and frameworks.</p>
                         </div>
                     
                      <div className="port-btn"> 
                      <a href='#Protfolio'>

                      <button  className="port_btn_one">My Portfolio</button>
                      </a>
                      <button className="port_btn_two"> <FaYoutube fontSize="30px"/></button>
                      </div>

                </section>

                 <section  className="second">
                     <div className="imgBg"></div>
                 <img src={my} alt="prop"  />

                    
                </section>
            </div>
        </div>
    )
}

export default Home
