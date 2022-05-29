import {React,useReducer,useState} from "react"

function reducer(todos,action)
{
    switch(action.type){
    case "add-todo":
        return[...todos,newTodo(action.payload.name)]
}}

function newTodo(name)
{
    return{id:Date.now(),name:name,completed:false}
}

function ReduceHooks(){
    const [name,setName] = useState("")
    const [todos,dispatch] =useReducer(reducer,[])

    function handleSubmit(e){
        e.preventDefault()
        dispatch({type:"add-todo",payload:{name:name}})
        setName("")
    }
console.log(todos)
    return(
        <>
        <form onSubmit={handleSubmit}> 
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        </form>
        
        </>
    )
}

export default ReduceHooks