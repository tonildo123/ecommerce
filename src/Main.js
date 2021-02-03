import React from 'react'
import { Bodi } from './Components/Bodi';
import { Futer } from './Components/Futer';
import { Hider } from './Components/Hider';

export const Main = () => {
    return (
        <>
        <Hider/>
        <div className="container">
         
         <Bodi/> 
         <Futer/> 
        
        </div>
        
        </>
    )
}
