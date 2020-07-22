import React from "react";
import "../App.css";
import LottieFood from '../components/lottieJS/LottieFood';
import LottiePan from '../components/lottieJS/LottiePan';
import ReactAudioPlayer from 'react-audio-player';
import { Link } from "react-scroll";

function Choice() {
    return (
    <>
    <div id="choicePage">

        <div className="jumbotron text-center" id="jumbo">
        <Link to="cookCard" id="start" smooth={true} duration={1200}>Get Started</Link>

            <h1 className="nameCo">Home-cooks</h1>
        </div>



        <div className="container">
            <div className="row" id="cRow">
                <div className="col md-6">
                    <div id="cookCard">
                        <h1>Become a Cook</h1>
                        <p>Have a recipe you would like to make and sell to others within your area? Click here to get started!</p>
                        <br></br>
                        <a id="choicesbtn" className="m-2 display-4" href="/cooks">Cooks</a>
                    </div>
                </div>
            
                <div className="col md-6" id="lottiePan">
                    <LottiePan></LottiePan>
                </div>
            </div>

            <div className="row" id="cRow">
                <div className="col md-6">
                        <LottieFood></LottieFood>
                </div>

                <div>
                    <div className="col md-6" id="cookCard2">
                        <h1>Order Out</h1>
                        <p id="consumerInfo">Looking to order out, but no nearby restaurants are open? Click here to get started!</p>
                        <br></br>
                        <a id="choicesbtn" className="m-2 display-4" href="/eater">Eat</a>
                    </div>
                    
                <div className="spacer"></div> 
                <div className="audio">
                    <ReactAudioPlayer
                        src="bensound-allthat.mp3"
                        volume= {0.02}
                        controls
                        />
                </div>  
                </div> 

            </div>

        </div>
    </div>
    </>

    );
}

export default Choice;