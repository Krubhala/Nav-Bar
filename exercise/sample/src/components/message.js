import React, {Component} from "react";

class Message extends Component{
    constructor(){
        super()
        this.state={
            message:"Welcome Visitor"
        }}
        changeMessage(){
            this.setState({
                message:"Thanks for Subscribing"
            })
        }
    

    render()
    {
        return(
            <div>
            {this.state.message}
            <button onClick={()=>this.changeMessage()}>Subscribe</button>
            </div>
            
            )
    }
}


export default Message