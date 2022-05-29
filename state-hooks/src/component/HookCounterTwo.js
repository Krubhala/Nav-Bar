import  React, {useState} from "react"
 
function HookCounterTwo() {
 
    const initialCount =0

    const[count,setCount] = useState(initialCount)

return(
    <div>
    Count:{count}
    <button onClick={()=>setCount(prevState=>prevState+1)}>Increment</button>
    <button onClick={()=>setCount(prevState=>prevState-1)}>Decrement</button>
   
   </div> )

 }

 export default HookCounterTwo
