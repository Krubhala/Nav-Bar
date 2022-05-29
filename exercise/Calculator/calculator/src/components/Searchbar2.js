import React,{useState,useEffect} from "react"
import JSONData from"./data.json"

function SearchBar2(){
    const[SearchText,setSearchText]=useState("")
    const[SearchArray,setSearchArray] =useState(JSONData)

    useEffect(()=>{
if(SearchText.length === 0)
{
setSearchArray(JSONData)
}
else{
    const updateArray = []
    JSONData.forEach((val,index)=>
    {
        Object.values(JSONData).every((searchvalue,index)=>
        {
            if(searchvalue.toString().toLowerCase().includes(SearchText.toLowerCase()))
            {
                updateArray.push(val)
                
                return
            }
        })
    })
setSearchArray(updateArray)
}
    },[SearchText])
    
    return(
        <>
        <input type="text" value={SearchText} onChange={(e)=>setSearchText(e.target.value)} placeholder="..."/>
        <pre>{JSON.stringify(SearchArray,null, '    ')}</pre>   
        
        </>
    )

}
export default SearchBar2