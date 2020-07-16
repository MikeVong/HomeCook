import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";


const cart= localStorage.getItem("checkout") 
? JSON.parse(localStorage.getItem("checkout")): [];
let disabled = false;

class Detail extends Component {
  state = {
    cook: {},
    cart:{},
  };

  componentDidMount() {
    disabled = false;
    for(let i=0;i<cart.length;i++){
      if(cart[i]._id === this.props.match.params.id){
        disabled = true;
      }
    }
    API.getCook(this.props.match.params.id)
      .then(res => this.setState({ cook: res.data},console.log(res.data)))
      .then(localStorage.setItem("checkout", JSON.stringify(cart)))
      .catch(err => console.log(err));
      
  }


  addToCart = (cook) => {
    cart.push(cook);
    this.setState({cart: cook });
    localStorage.setItem("checkout", JSON.stringify(cart));
    disabled = true;

  }

  render() {
    
    return (
    
      <div className="" style={{backgroundImage:`url(/FoodBackground.jpg)`,width: "100vw", height: "100vh"}}>
          <div className="row"style={{width: "100vw", height: "20vh"}}></div>
            <div className="row"style={{width: "100vw", height: "60vh"}}>
              <div className="col-md-2"></div>
              <div className="col-md-8 seethough">
                <div className="row back shadow-lg p-3 mb-5 bg-white rounded">
                  <div className="col-md-6">
                    <img className="img-thumbnail rounded"src={this.state.cook.src} alt={this.state.cook.name} style={{width:"100%"}}/>
                    <h4><button className="btn btn-warning">
                    <Link to="/eater">Back to Eater</Link>
                    </button></h4>
                  </div>
                  <div className="col-md-6">
                  <h1>Dish Name: {this.state.cook.dish}</h1>
                  <h1>Cook by {this.state.cook.name}</h1>
                  <h3><button className="btn btn-success btn-lg"
                              onClick= {()=> this.addToCart(this.state.cook)}
                              disabled= {disabled}>
                      Add to Cart
                      </button>
                      <span><button className="btn btn-info btn-lg"><Link to="/checkout">Cart({cart.length})</Link></button></span></h3>
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

