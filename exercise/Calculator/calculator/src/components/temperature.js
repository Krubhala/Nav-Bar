import { display } from "@mui/system"
import React,{useState} from "react"
import "./temper.css"
function Temperature()
{
    const[state,setState] = useState(10)
    const[colororg,setColororg] = useState("normal")

    const add = () =>{
        const newState =state + 1
        if(newState >=15 )
        {
            setColororg("hot")
        }
       
        setState(newState)
    }

    const dec =() =>{
        const prev = state - 1
        if(prev<15){
            setColororg("cold")
            }
        setState(prev)
    }

    return(
        <>
        <div className="container" >
        <div className="temperature-display" >
        <div className ={`temp-display ${colororg}`} >{state}ºC</div>
        <div className="button-container">
        <button className ="high" onClick={add}>+</button>
        <button className="low" onClick={dec}>-</button>
        </div>
        </div>
        </div>
        
        
        </>
        
        
    
    )
    
}


    
    

export default Temperature