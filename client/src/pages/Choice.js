import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import LottieFood from '../components/lottieJS/LottieFood';
import LottiePan from '../components/lottieJS/LottiePan';


function Choice() {
    return (
    <>
    <div id="choicePage">
        <div className="jumbotron text-center">
            <h1 className="nameCo">Home-cooks</h1>
            {/* <p>A community place to sell and buy meals</p> */}
        </div>

        <div className="container">
            <div className="row" id="cRow">
                <div className="col md-6">
                    <div id="cookCard">
                        <h1>Become a Cook</h1>
                        <p>Have a recipe you would like to make and sell to others? Click here to get started!</p>
                        <br></br>
                        <a id="choicesbtn" className="m-2 display-4" href="/cooks">Cooks</a>
                    </div>
                </div>
            
                <div className="col md-6" id="lottiePan">
                    <LottiePan></LottiePan>
                </div>
            </div>

                {/* <div className="col lg-6"></div> */}

            <div className="row" id="cRow">
                <div className="col md-6">
                        <LottieFood></LottieFood>
                </div>

                <div>
                    <div className="col md-6" id="cookCard2">
                        <h1>Order Out</h1>
                        <p id="consumerInfo">Looking for something to eat, but no nearby restaurants are open? Click here to get started!</p>
                        <br></br>
                        <a id="choicesbtn" className="m-2 display-4" href="/eater">Consumers</a>
                    </div>
                </div>    

            </div>

        </div>
    </div>
    </>

    );
}

export default Choice;