import { useState } from "react"


export const useCounter = (value=100) => {

const [counter, setCounter]=useState(value)
//const{Increment}=useCallback

const Increment = ()=>{ 
    setCounter(counter +1)
}
const Decrement = ()=>{setCounter(counter -1)}
const reset = ()=>{setCounter(value)}


    return {
        counter,
        Increment, 
        Decrement, 
        reset

    };
        
    
}
