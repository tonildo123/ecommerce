import React from 'react'
import { FormularioCrud } from './FormularioCrud';

export const PresentationCards = () => {
    const url ='https://d1ih8jugeo2m5m.cloudfront.net/2020/04/Qui%C3%A9nes-somos.jpg';
    return (
        <>
            <div className="card" >
            <div className="card-body">
                <h5 className="card-title">¿Quienes somos?</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <img src={url} className="img-fluid" alt="..."></img>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                
            </div>
            </div>

            <div className="card" >
            <div className="card-body">
                <h5 className="card-title">¿Que hacemos?</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <img src={url} className="img-fluid" alt="..."></img>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                
            </div>
            </div>

            <div className="card" >
            <div className="card-body">
                <h5 className="card-title">¿Donde estamos?</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <img src={url} className="img-fluid" alt="..."></img>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                
            </div>
            </div>
        <FormularioCrud/>
        </>    
        

    )
}
