import React,{useState} from "react"
import "./form-reg.css"
function FormRegister(){

const[values,setValues] = useState({
    firstName:"",
    lastName:"",
    email:""
})

const[submitted,setSubmitted] = useState(false)
const[valid,setValid] = useState(false)

const clickHandle = (e) =>
{
    e.preventDefault()
    setValues({...values,firstName:e.target.value})
}

const clickHandleLast = (e) =>
{
    e.preventDefault()
    setValues({...values,lastName:e.target.value})
}

const clickHandleEmail = (e) =>
{
    e.preventDefault()
    setValues({...values,email:e.target.value})
}

const successAlert =(e) =>
{
    e.preventDefault()
    setSubmitted(true)
}

    return(
    <>
    <div className="container">
    <form  onSubmit ={successAlert}>
    { submitted && valid ? <div>Successfully Registered</div> : null } 
    <div>
    <input type="text" className="on-field" onChange={clickHandle} value ={values.firstName}/>
    {submitted && !values.firstName ?  <span>Please enter the first name</span> :null }
    </div>
    <div>
    <input type="text" className="on-field"  onChange={clickHandleLast} value ={values.lastName}/>
    {submitted && !values.lastName ?  <span>Please enter the last name</span> :null }
    </div>
    <div>
    <input type="text" className="on-field"  onChange={clickHandleEmail} value ={values.email}/>
    {submitted && !values.email ?  <span>Please enter the email</span> :null }
    </div>
    <div>
    <button>Register   </button>
  
    </div>
    </form>
    </div>







        </>
        )
}

export default FormRegister