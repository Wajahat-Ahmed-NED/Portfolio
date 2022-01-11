import React from "react";
import "../Screens/home.css";
import { FcBearish, FcApproval } from "react-icons/fc";
import { BsDot } from "react-icons/bs";
import {GiWorld} from "react-icons/gi"
import {BiGitBranch} from "react-icons/bi"
import {AiFillGithub } from "react-icons/ai"

const ProtCArd = (props) => {

    const {title,des,lang,link,git} = props
  return (
    <div className="main_pf">
      
      {/* ======================================================= */}
      <div className="card_pf">
        <a href={link} target="_blank">
          <h1>
            <FcApproval size={20} /> {title}
          </h1>
          <p>
            {des}
          </p>

          <div style={{display:"flex" , flexWrap:"wrap" , justifyContent:"space-around"}}>

          <span>
            <BsDot size={50} color="#F1E05A" />
            {lang}
          </span>

          <span>
            <BsDot size={50} color="#F1E05A" />

            <a href={git} target="_blank">
              <AiFillGithub  size={30} color="white"/>
            </a>
            
          </span>


          <span>
            <BsDot size={50} color="#F1E05A" />

            <a href={link} target="_blank">
              <GiWorld  size={30} color="white"/>
            </a>
            
          </span>
          
          </div>

        </a>
      </div>
    </div>
  );
};

export default ProtCArd;
