
import {useState} from 'react'
import "./App.css"

const Form = () => {

     const [state, setState]  = useState({
       name : "",
       email : "",
       subject : "",
       message : "",
     })


let value,name;
    const getValue = (e) => {
    
        value = e.target.value
        name = e.target.name

        setState({...state,[name]:value})

    }

    console.log(state)
    return (
        <div id="Form">
            <section>
                <form>
                    <div className="form_1">
                    <input type="text"
                     placeholder="Your Name" 
                     onChange={e => getValue(e)} 
                     value={state.name}
                     name="name"
                      
                      />
                    <input type="email "
                     placeholder="Email" 
                     onChange={e => getValue(e)} 
                     value={state.email}
                     name="email"
                     
                     />
                    </div>

                    <div className="form_2">
                        <input type="text" 
                        placeholder="Your Subject" 
                        onChange={e => getValue(e)} 
                         value={state.subject}
                         name="subject"
                         
                         />
                        
                    </div>

                    <textarea 
                     placeholder="Your Message" 
                    onChange={e => getValue(e)}
                     value={state.message}
                    name="message"
                     >

                    </textarea>

                    <button>Send Message</button>

                </form>
            </section>
        </div>
    )
}

export default Form
