import React, {useCallback, useState} from 'react'

export const useCallBack = () => {
const [counter, setCounter] = useState(5)

    const Increment = useCallback(
        () => {
          setCounter(c =()=>{c: c+1})  
        },
        [Increment],
    )

    
}
