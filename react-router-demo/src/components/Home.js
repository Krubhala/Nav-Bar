import {useNavigate} from "react-router-dom"
//import { OrderSummary } from "./OrderSummary"

export const Home =() =>
{
    const navigate = useNavigate()
    return (
        <>
        <div>Home pAge</div>
        <button onClick={()=>navigate("OrderSummary")}>Place Order</button>
        </>
        )
}

