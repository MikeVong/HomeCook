import React from "react";
import './Eater.css';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';


function Choice() {
    return (
        <>
        <Jumbotron >
        <div className="text-center" >
            <br></br>
            <br></br>
            <br></br>
            <a id="cooks" className="m-3 display-4" href="/cooks">Cooks</a>
            <a id="consumers" className="m-3 display-4" href="/eater">Consumers</a>
        </div>
        </Jumbotron>

        <div>
            
            <p>hello</p>
            
        </div>
        </>
    );
}

export default Choice;