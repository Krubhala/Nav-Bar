import React, { Component } from "react"
 class Counter extends  Component{
     constructor(props){
     super(props)
     this.state={
         count:0
     }
    }
      increase = () =>{
        this.setState((prevState)=>({
count:prevState.count +1
        }))
     }

    decrease=()=>{
this.setState((prevState)=>({
    count:prevState.count - 1
}))
    }
    
    
 
     render() {
         return(
             <>
             <button onClick={this.increase}>Counter +</button>
             <button onClick={this.decrease}>Counter -</button>
             <h2>{this.state.count}</h2>
             </>
             
         )
     }
    }
    
    
    
 


 export default Counter