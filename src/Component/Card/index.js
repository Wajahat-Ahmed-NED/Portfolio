import "../../App.css"



const Card = ({tittle,logo,text}) => {

    console.log(logo)
    return (
        <div className="Cards">
            <div className="card">
                 
                {/* <FaGithub /> */}
                <span >{logo} </span>
                <h2>{tittle}</h2>
                <p>{text}</p> 
               


                  {/* <div></div>
                  <div>aoc</div> */}
                 
                  {/* <div>a</div>
                  <div> b</div>
                  <div>c</div> */}
            </div>
            
        </div>
    )
}

export default Card
