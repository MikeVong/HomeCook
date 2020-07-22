import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import Nav from "../components/Nav";
import 'react-bootstrap';


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

    
      <div className="details">
        <Nav />

              <div className="purchaseCard">
                <div className="col-md-12"  id="detailCard">
                <div className="row back shadow-lg">
                  <div className="col-md-6">
                    <img className="img-thumbnail rounded"src={this.state.cook.src} alt={this.state.cook.name} style={{width:"100%"}}/>
                    <h4><button className="btn">
                    <Link to="/eater" id="cartBtn2">Back to Eat</Link>
                    </button></h4>
                
                  </div>
                  <div className="col-md-6">
                  <h1>Dish Name: {this.state.cook.dish}</h1>
                  <h1>Cooked by: {this.state.cook.name}</h1>
                  <h3 id="detailBtns">
                      <button className="btn btn-success btn-lg"
                              onClick= {()=> this.addToCart(this.state.cook)}
                              disabled= {disabled}>
                      Add to Cart
                      </button>
                      &nbsp;
                      <button className="btn btn-success btn-lg">
                        <Link to="/checkout" id="cartBtn">Checkout({cart.length})</Link>
                      </button>
                  </h3>
                  <h4>Address:</h4> 
                  {this.state.cook.address}
                  <h4>Recommend for  {this.state.cook.portions}</h4>
                  <h4>Cost: ${this.state.cook.cost}</h4>
                  <h4>Payment Accepted: {this.state.cook.payBy}</h4>
                  <h4>Email: {this.state.cook.email}</h4>
                  <h4>Ingredients:</h4>
                  <p>{this.state.cook.ingredients}</p>
                  </div>
                </div>
               
              </div>

            </div>

            <div className="col-md-2"></div>
            </div>

    );
  }
}

export default Detail;

