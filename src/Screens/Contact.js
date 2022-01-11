import React from 'react'
import "../App.css"
import {FaMapMarkerAlt,
         FaPhoneAlt,
         FaEnvelope
} from "react-icons/fa"

import { FcEndCall } from "react-icons/fc"
import Form from '../Form'


const Contact = () => {
     //onst [state,setState] = useState("")
    // setState(state)

    let icon = {
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
    
    }

    let conIcon = {
        paddingLeft:"10px"
    }

    return (
        <section id="Contact">
         <section className="contact_contai">
             <div className="cont_sec1">
             <span>HAVE ANY QUERY?</span>
             <div style={icon}>
             <h2>Contact Me </h2><FcEndCall size={50} style={conIcon} />
             </div>
             <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum standard dummy text.</p>
             </div>
        
        </section>


          <section className="contact_sec2"> 

            <div className="first_card"> <FaMapMarkerAlt /> <span>Locate Us </span> <p>Pakistan,Karachi Landhi No 2</p></div>
            <div className="first_card"> <FaPhoneAlt />    <span>Get in Call </span> <p>Office : +92301-2671774</p></div>
            <div className="first_card"> <FaEnvelope />    <span>Get in Online </span> <p>jamalmudassir65@gmail.com</p></div>

          
          </section>

          <Form/>

        </section>
    )
}

export default Contact;
