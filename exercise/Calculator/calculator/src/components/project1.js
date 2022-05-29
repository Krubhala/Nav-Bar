import { Grid } from "@mui/material"
import React, {useReducer,useState} from "react"
import "./calc.css"
import AddDig from "./add_di"
import OperationButton from "./OperationButton"



function reducer(state,{type,payload}){
switch(type){

    case "Add-digits":
        if(payload.digit === "0" && state.currentOperand === "0")
        return 0
    return {
        ...state,
        currentOperand:`${state.currentOperand || ""} ${payload.digit}`
    }

    case "clear":
        return {}

    case "delete":
        if(state.currentOperand=== null)
        return state
        if(state.currentOperand.length === 1){
        return {
            ...state,currentOperand:null
        }}
       return{
           ...state,
           currentOperand:state.currentOperand.slice(0,-1)
       }

    case "choose-operation":
        if(state.currentOperand == null && state.previousOperand == null)
        return state

        if(state.currentOperand == null)
        {
            return{
                ...state,
                operation:payload.operation
            }
        }

if(state.previousOperand == null)
return {
    ...state,
    operation:payload.operation,
    previousOperand : state.currentOperand,
    currentOperand : null
}
default:
return{
    ...state,
    operation:payload.operation,
    previousOperand:evaluate(state),
    currentOperand:null
}

case "eval":
    {
        
        if(
            state.operation == null || state.currendoperand == null || state.previousOperand)
        {
            return state
        }
        return ({
            ...state,
            previousOperand :null,
            operation: null,
            currentOperand:evaluate(state)
         } )
    }
function evaluate({currentOperand,previousOperand,operation})
{
    let result =""
    let prev =parseFloat(previousOperand)
    let curr =parseFloat(currentOperand)
    switch(operation){
    case "+":
        result = curr +prev
        break
    
    case "-":
        result = curr - prev
        break

    case "*":
            result = curr * prev
            break 
            
     case "%":
             result = curr % prev
            break        
}
return result.toString()
}
}
}
function Calc(){
    const[{currentOperand,previousOperand,operation},dispatch] = useReducer(reducer,{})
    return(
        
           <>

           <div className="calculator-grid" >
           <div className="output-display">
           <div className="output-innerprev">{previousOperand}{operation}</div>
           <div className="output-innernew">{currentOperand}</div>
           </div>
           
   <button className="ac"onClick={()=>dispatch({type:"clear"})}>AC</button>
  <button onClick={()=>dispatch({type:"delete"})}>DEL</button>
  <OperationButton operation = "+" dispatch={dispatch} />
  
 <AddDig digit="1" dispatch={dispatch}/> 
 <AddDig digit="2" dispatch={dispatch}/> 
 <AddDig digit="3" dispatch={dispatch}/> 
 <OperationButton operation = "-" dispatch={dispatch} />
 <AddDig digit="4" dispatch={dispatch}/> 
 <AddDig digit="5" dispatch={dispatch}/> 
 <AddDig digit="6" dispatch={dispatch}/> 
 <OperationButton operation = "*" dispatch={dispatch} />
 <AddDig digit="7" dispatch={dispatch}/> 
 <AddDig digit="8" dispatch={dispatch}/> 
 <AddDig digit="9" dispatch={dispatch}/> 
 <OperationButton operation="%" dispatch={dispatch}/> 
 <AddDig digit="." dispatch={dispatch}/> 
 <AddDig digit="0" dispatch={dispatch}/> 
 <button className="equal" onClick={()=>dispatch({type:"eval"}) }> = </button>
  

           </div>
           </> 
        
    )
}


export default Calc