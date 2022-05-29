import React,{ Component} from "react"
const Greet = (props)=>
{    return   (
    <div><h1>{props.name} is {props.age}</h1>   
{props.children}
</div>
)     
}

export default Greet