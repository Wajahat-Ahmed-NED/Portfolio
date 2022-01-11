import {useState} from 'react'
import "./navbar.css"
// import { NavLink } from 'react-router-dom'
import { GoThreeBars, GoX } from "react-icons/go"
// import Service from '../../Screens/Service'
const Navbar = (props) => {
 
 const [isMobile,setIsMobile] = useState(true) 
 const handleClick = () => setIsMobile(!isMobile);
 
    return (
        <div className="nav-wrapper" >
            <div className="nav__contai">
                <div className="navbar">
                   <div className="nav__one">
                        <img src={props.logo} alt="logo" />
                   </div>


                     <div 
                       className={isMobile ? "nav__two Active" :"mob__menu__links Active"  }>
                        <ul >
                        <li className="list-item"> 
 
                          <a href="#Home"  
                          exact
                          activeClassName="active"
                         
                          > 
                            Home

                         </a>
                         </li>

                         <li className="list-item">
                           <a href="#About" 
                           exact
                           activeClassName="active"
                  
                           > 
                                  About
                           </a>
                         </li>

                          <li className="list-item">
                                <a href="#Service" 
                                exact
                              activeClassName="active"
                                
                                > 
                                  Services
                                </a>
                            </li>


                            <li className="list-item">
                                <a href="#Skills"
                                 exact
                                activeClassName="active"
                               
                                > 
                                  Skills
                                </a>
                            </li>

                            <li className="list-item">
                                <a href="#Contact"
                                 exact
                                activeClassName="active"
                               
                                > 
                                  Contact
                                </a>
                            </li>

                            
                        </ul>
                    </div>
      

  {/*----------------- TOggle --------------------*/}

                    <div className="mob-opt" onClick={handleClick}>
                     {isMobile ?
                   
                       <GoThreeBars  fontSize="35px" /> 
                     
                     :
                      <GoX className="xx" fontSize="35px"/>
                   }

                   </div>

                 
               
                </div>
            </div>
            
        </div>
    )
}

export default Navbar
