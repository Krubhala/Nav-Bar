import React,{useState} from "react"
import JSONData from"./data.json"

function SearchBar(){
const[SearchText,setSearchText]=useState("")

    return(
        <>

        <input type="text" onChange={(e)=>setSearchText(e.target.value)} placeholder="..."/>
                
                    
                    {JSONData.filter((val)=>
                        {
if(SearchText === "")
{
return val
}
else if(val.first_name.toLowerCase().includes(SearchText.toLowerCase())){
return val.first_name
}
                        })
                    
    .map((val,key)=>{
      return( <div>
        {val.first_name}
        </div>)
})
           
}    

        </>

        )
}
export default SearchBar