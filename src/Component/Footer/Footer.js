import React from 'react'
import Icon from '../../Screens/Icon'
import "./footer.css"

const Footer = () => {
    return (
        <div className="footer">

            <div className="contai">
             <h1>Mudassir<span style={{color:"#ff4a57"}}>_</span>Jamal<span style={{color:"#ff4a57"}}>_</span>Hashim</h1>

             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inci- didunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exe- rcitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                  {/* <div className="ic"> <Icon /></div> */}

                  </div>

                  <div className="copyright">
                  Copyright © 2020 <span style={{color:"#ff4a57"}}> Ami.Ke </span> All Rights Reserved by ThemeBing.
                  </div>
        </div>
    )
}

export default Footer
