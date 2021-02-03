import React from 'react'
import { useCounter } from '../Hooks/useCounter';
import { PresentationCards } from './PresentationCards';

export const Bodi = () => {
    

    const {counter, Increment, Decrement, reset} = useCounter(50)

    return (
        <>
        
        <h1>{counter}</h1>
        <hr/>
        <button onClick={Decrement} className="btn btn-danger">-1</button>
        <button onClick={reset}className="btn btn-secondary">reset</button>
        <button onClick={Increment} className="btn btn-success">+1</button>
        <hr/>
        <PresentationCards/>



        </>
        
    )
}
