import React, {Component} from "react"

class ClassCounter extends Component{
    constructor(props){
        super(props)
this.state ={
    counter:0
}

    }
    clickHandler=()=>{
        this.setState({
            counter:this.state.counter + 1     
         })
    }
    
    render(){
        const{counter} =this.state
        return(
            <button onClick ={this.clickHandler}>Counter {counter}</button>
        )
    }
} 

export default ClassCounter