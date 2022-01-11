import React from "react";
import "./home.css";
import { FcBearish} from "react-icons/fc";
// import { BsDot } from "react-icons/bs";
import ProtCArd from "../Component/ProtCArd";

const Protfolio = () => {

const data = [
  {
   link : "https://react-hotelmanagement.netlify.app/",
  title : " Hotel Management System",
  des : "🤖 Hotel Management System Hotel Booking Admin DashBoard IF login Admin You can Check the dashboard.",
  lang : "React / Redux / Firebase Auth & RealTime Database",
  git  : "https://github.com/Mudassir-jamal/Hotel-management-react",
},

{
  link : "https://expense-tracker-system.netlify.app/",
  title : "EXPENSE MANAGEMENT SYSTEM",
  des : " ",
  lang : "Html / Css / JavaScript Auth & Local Storage.",
  git : "https://github.com/Mudassir-jamal/EXPENSE-MANAGEMENT-SYSTEM"
},

{
  link : "",
  title : "OLX-MINI-CLONE",
  des : " ",
  lang : "React / Redux / Firebase Auth & Database",
  git : "https://github.com/Mudassir-jamal/OLX-CLONE-MINI-REACT"
},

{
  link : "https://react-api-covidtable.netlify.app",
  title : "REACT COVID API & GRAPH",
  des : " ",
  lang : "React / Api / Graph",
  git : "https://github.com/Mudassir-jamal/Covid-Api-GraPh"
},
]

  return (
    <>
    <h1 id="Protfolio" className="pfolio_head">
        PortFolio <FcBearish size={35} />
      </h1>
    {
      data.map((e,i) => {
        return  <ProtCArd 
                  link = {e.link}
                  title = {e.title}
                  des = {e.des}
                  lang = {e.lang}
                  git = {e.git}
        />
      })
    }
    
    </>
    // <>
    //   <div className="main_pf">
    //     <h1 className="pfolio_head">
    //       PortFolio <FcBearish size={35} />
    //     </h1>
    //      {/* ======================================================= */}
    //     <div className="card_pf">
    //       <a href="https://react-hotelmanagement.netlify.app/" target="_blank">
    //         <h1>
              
    //           <FcApproval size={20} /> Hotel Management System
    //         </h1>
    //         <p>
    //           🤖 Hotel Management System Hotel Booking Admin DashBoard IF login
    //           Admin You can Check.
    //         </p>

    //         <span>
    //           <BsDot size={50} color="#F1E05A" />
    //           React / Redux / Firebase Auth & RealTime Database
    //         </span>
    //       </a>
    //     </div>

    //      {/* ======================================================= */}


    //     <div className="card_pf">
    //         <a href="" target="_blank">
                
    //         </a>
    //       <h1>
            
    //         <FcApproval size={20} /> React Todo App
    //       </h1>
    //       <span>
    //         <BsDot size={50} color="#F1E05A" />
    //         React / Mui
    //       </span>
    //     </div>
           

    //      {/* ======================================================= */}

    //      <div className="card_pf">
    //          <a href="https://react-api-covidtable.netlify.app" target="_blank">

    //       <h1>
            
    //         <FcApproval size={20} /> Covid Api & Graph
    //       </h1>
    //       <span>
    //         <BsDot size={50} color="#F1E05A" />
    //         <p>React / Api / React Graph </p>
    //       </span>
    //          </a>
    //     </div>

    //      {/* ======================================================= */}


    //     <div className="card_pf">
    //       <h1>
            
    //         <FcApproval size={20} /> React-Redux Quiz App{" "}
    //       </h1>
    //       <span>
    //         <BsDot size={50} color="#F1E05A" />
    //         <p>React / Redux </p>
    //       </span>
    //     </div>
         
    //      {/* ======================================================= */}


    //     <div className="card_pf">
    //       <h1>
            
    //         <FcApproval size={20} /> React Weather App{" "}
    //       </h1>
    //       <span>
    //         <BsDot size={50} color="#F1E05A" />
    //         React / Weather Api
    //       </span>
    //     </div>

    //      {/* ======================================================= */}


    //     <div className="card_pf">
    //       <h1>
            
    //         <FcApproval size={20} /> React-Redux Quiz App{" "}
    //       </h1>
    //       <span>
    //         <BsDot size={50} color="#F1E05A" />
    //         <p>React / Redux </p>
    //       </span>
    //     </div>


    //      {/* ======================================================= */}
       

    //     <div className="card_pf">
    //       <h1>
    //         {" "}
    //         <FcApproval size={20} /> React Alibaba Landing Page
    //       </h1>
    //       <span>
    //         <BsDot size={50} color="#F1E05A" />
    //         <p>React / Material Ui</p>
    //       </span>
    //     </div>
    //   </div>
    // </>
  );
};

export default Protfolio;
