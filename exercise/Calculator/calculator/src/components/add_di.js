export default function AddDig({dispatch,digit}){
    return(
        
            <button onClick = { () => dispatch({type:"Add-digits",payload:{digit}})}>
            {digit}
            </button>
        
    )
}