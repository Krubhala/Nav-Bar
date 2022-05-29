import Reacr, {useState} from "react"

function HooksCounterThree()
{
    const[name,setName] =useState({firstName:"",lastName:""})

    return(
        <div> 
        <form>
        <input type = "text" value ={name.firstName} onChange ={e=>setName({...name,firstName:e.target.value})}></input>
        </form>
        <h1>the firstname is {name.firstName}</h1>
        </div>
       
    )
}
export default HooksCounterThree