import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";



class Detail extends Component {
  state = {
    cook: {},
    count: 0
  };

  componentDidMount() {
    API.getCook(this.props.match.params.id)
      .then(res => this.setState({ cook: res.data},console.log(res.data)))
      .catch(err => console.log(err));
  }

  // incrementCount =() => {
  //     this.setState({count: this.state.count + 1});
  // }
  // decrementCount= () => {
  //     this.setState({count: this.state.count - 1});
  // }



  render() {
    return (
    
      <div className="" style={{backgroundImage:`url(/FoodBackground.jpg)`,width: "100vw", height: "100vh"}}>
          <div className="row"style={{width: "100vw", height: "20vh"}}></div>
          <div className="row"style={{width: "100vw", height: "60vh"}}>
            <div className="col-md-2">
            </div>
            <div className="col-md-8 seethough">
              <div className="row back shadow-lg p-3 mb-5 bg-white rounded">
                <div className="col-md-6">
                  <img className="img-thumbnail rounded"src={this.state.cook.src} alt={this.state.cook.name} style={{width:"100%"}}/>
                  <button className="btn btn-warning mt-5 p-3">
                  <Link to="/eater">← Back to Eater</Link>
                  </button>
               
                </div>
                <div className="col-md-6">
                <h1>Dish Name: {this.state.cook.dish}</h1>
                <h1>Cook by {this.state.cook.name}</h1>
                <h3>
               {/* <h3>Portions: <button type="button" onClick={this.decrementCount} className="btn btn-info m-3">-</button>
               <span>{this.state.count}</span>
               <span><button type="button" onClick={this.incrementCount} className="btn btn-info m-3">+</button></span> */}
                <button className="btn btn-success btn-lg ">
                  Buy
                </button></h3>
                <h4>Address:</h4> 
                {this.state.cook.address}
                <h4>Protions Available: {this.state.cook.portions}</h4>
                
                <h4>Cost: ${this.state.cook.cost}</h4>
                <h4>Payment Accepted: {this.state.cook.payBy}</h4>
                <h4>Ingredients:</h4>
                <p>{this.state.cook.ingredients}</p>
                </div>
              </div>
              
            </div>

            <div className="col-md-2"></div>
            </div>
            

            
    </div>
    );
  }
}

export default Detail;
