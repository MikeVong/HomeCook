import React from "react";
import './choice.css';
import { Container, Row, Col } from 'react-bootstrap';


function Choice() {
    return (
        <>
        <div className="jumbotron text-center">
            <br></br>
            <br></br>
            <br></br>
            <a id="cooks" className="m-3 display-4" href="/cooks">Cooks</a>
            <a id="consumers" className="m-3 display-4" href="/eater">Consumers</a>
        </div>


        <div>
            <p>hello</p>
            
        </div>
        </>
    );
}

export default Choice;