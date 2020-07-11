import React from "react";
import './Eater.css';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';


function Choice() {
    return (
        <div>

        <div className="jumbotron text-center"style={{backgroundImage:`url(/foodbkground.png)`}}>
        
            <br></br>
            <a id="cooks" className="m-3 display-4" href="/cooks">Cooks</a>
            <a id="consumers" className="m-3 display-4" href="/eater">Consumers</a>
        
        </div>
</div>
      
    );
}

export default Choice;