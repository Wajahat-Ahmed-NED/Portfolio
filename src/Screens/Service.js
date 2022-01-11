
import "../App.css"
import Card from "../Component/Card"
import ServiceData from "./Data/ServiceData.js"
import { FcServices } from "react-icons/fc"
// import Icon from "./Icon"
const Service = (props) => {

  const {data} = props

  console.log(props)


  let myStyle = {
    Color:"red",
    display:"flex",
    margin:" auto"
  }

 


    return (
        < >
        <section id="Service">
          <div className="servies">
              <div className="ser_contai">
                  <span>services</span>
                  <div style={myStyle}>
                   <h2>My services </h2>
                   <span  className="serIcon">  <FcServices size={40} /></span>
                   </div>
                     <p>I Will Provide Responsive Layouts With Attractive Designs.If you don't have any sample design, just share your business idea.
                       <b><i>(Your idea + My creativity = Great output.)</i></b>
                         </p>

                         <div className="underline"></div>
              </div>

              <section className="service_card">   
                {/* <div className="ser_contai">                */}
                  {
                    ServiceData.map((val,index)=>{
                      return <>
                      
                            <Card
                               key={index}
                               logo={val.logo}
                               text={val.text}
                               tittle={val.tittle}
                            />
                      </>
                    })
                  }
            {/* </div> */}
                
              </section>
          </div>
        </section>
        </>
    )
}

export default Service
