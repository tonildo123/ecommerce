import React from 'react';

//import 'bootstrap/dist/css/bootstrap.min.css';
//import {Nav, Navbar } from 'react-bootstrap';

export const Hider = () => {
    
    return (

        <>
        <ul className="nav">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="">¿Quienes somos?</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" >¿Que hacemos?</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" >¿Donde estamos ?</a>
            </li>
            <li className="nav-item">
                <a className="nav-link">+ Info</a>
            </li>
        </ul>
        </>
              
    )
}
