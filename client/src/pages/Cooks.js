import React, { Component } from "react";
import API from "../utils/API";
import { Input, TextArea, FormBtn } from "../components/Form";
import Search from "../components/Search";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import Nav from "../components/Nav";
import Modal from "react-modal";


const foodImage =[{ItemName: 'steak', ItemImg: './steak.jpg'}, {ItemName: 'dessert', ItemImg: '/dessert.jpg'},{ItemName: 'pork', ItemImg: '/Pork.jpg'},{ItemName: 'veggies', ItemImg: '/veg.jpg'},{ItemName: 'chicken', ItemImg: '/chicken.jpg'}];
const paymentOptions = ["Cash","PayPal","Facebook Messanger","Sqaure Cash","Google Pay","Samsung Pay","Apple Pay","Cash App","Venmo","Zelle"]
const serving =["1-2 people","2-4 people","4-6 people","6-8 people","8+ people"]



const content = {top: '50%',left: '50%',right: 'auto',bottom: 'auto', marginRight: '-50%', transform: 'translate(-50%, -50%)',
                border: '1px solid #ccc',background: '#fff',overflow: 'auto',
                WebkitOverflowScrolling: 'touch',borderRadius: '4px',outline: 'none',padding: '20px'}
Modal.setAppElement('#root')


class Cooks extends Component {
  state = {
    cooks: [],
    name: "",
    address:"",
    dish:"",
    src:"",
    alt:"",
    ingredients:"",
    portions:"",
    cost:"",
    email: "",
    payBy: "",
    coordinates:[0,0],
    modalShow: false,

    
  };
 handleModalClose =() =>{
    this.setState({modalShow: false});
    this.props.history.push('/')
  }
  

  handleSearchChange = address =>{
    this.setState({address});
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSelect = async address => {
    await geocodeByAddress(address)
    .then(result => getLatLng(result[0]))
    .then(latLng => this.setState({address: address, coordinates: latLng}))
    .catch(error => console.log('Error', error))
  };

  handleRadioChange = (event) => {
    this.setState({
      src: event.currentTarget.value,
      alt: event.currentTarget.id
    })
  };

  handlePortionsChange = (event) => {
    this.setState({
      portions: event.target.value
    })
  };

  handlePaymentChange = (event) => {
    this.setState({
      payBy: event.target.value
    })
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    if (this.state.name && this.state.address) {
      this.setState({modalShow: true});
      API.saveCook({
        name: this.state.name,
        address: this.state.address,
        dish: this.state.dish,
        src: this.state.src,
        ingredients: this.state.ingredients,
        portions: this.state.portions,
        cost: this.state.cost,
        email: this.state.email,
        payBy: this.state.payBy,
        coordinates: this.state.coordinates
      })
        // .then(this.props.history.push('/')) 
        .catch(err => console.log(err));


    } 
  };

  render() {
    return (


  <div className="choppingBoard" id="cooksCard">
  <Nav />

    <Modal
      isOpen={this.state.modalShow}
      style={{content: content}}
    >
    <h2 className="text-center">Thank you for posting your dish</h2>
    <p>An Email will be sent to you once someone has placed the order for your dish.</p>
    <p>Your customer will then come meet you at your chosen location in the next 45 minutes after purchase.</p>
    <div>
    <button className="btn btn-success float-right"onClick={()=> this.handleModalClose() }>Close</button>
    </div>
    
  </Modal>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    
    <div className="container" id="information">
      <div className="row" id="cRow">
        <div className="col md-12">
          <h1 className="dishInfo">Please Enter In Your Dish Info:</h1>
        </div>
      </div>

      <div className="row" id="Row">
        <div className="col md-12">
        <form>
                          <div className="form-row">
                            <div className="form-group col-md-6">
                              <label>Name</label>
                              <Input
                                value={this.state.name}
                                onChange={this.handleInputChange}
                                name="name"
                                placeholder="Name (required)"
                              />
                            </div>

                            <div className="form-group col-md-6">
                            <label>Email Address</label>
                              <Input
                              value={this.state.email}
                              onChange={this.handleInputChange}
                              name="email"
                              placeholder="email@email.com"
                              type="email"
                              />
                            </div>
                          </div>

                          <div className="form-row">
                          <div className="form-group col-md-6">
                              <label>Address</label>
                                <Search
                                value={this.state.address}
                                onChange={this.handleSearchChange}
                                onSelect={this.handleSelect}
                                />
                            </div>
                          </div>

                          <div className="form-row" id="dish">
                            <div className="form-group col-md-6">
                            <label>Dish Name</label>
                              <Input
                              value={this.state.dish}
                              onChange={this.handleInputChange}
                              name="dish"
                              placeholder="dish name"
                              />
                            </div>

                            <div className="form-group col-md-6">
                            <label>Serving Size</label>
                            <select className="form-control"
                                    value={this.state.portions}
                                    onChange={this.handlePortionsChange}
                            >
                                <option selected value= "null">Select Serving Size</option>
                                {serving.map((option, index)=>
                                 <option key= {index} value={option}>{option}</option>
                                )}
                              </select>
                              <div
                              />  
                            </div>
                          </div>

                        <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>Price</label>
                              <Input
                              value={this.state.cost}
                              onChange={this.handleInputChange}
                              name="cost"
                              placeholder="ex/ 4.99"
                              />
                            </div>
                            <div className="form-group col-md-6">
                              <label>Payment Type</label>
                              <select className="form-control"
                                      value={this.state.payBy}
                                      onChange={this.handlePaymentChange}
                              >
                                <option selected value= "null">Select Payment Type</option>
                                {paymentOptions.map((option,index) => 
                                  <option key= {index} value={option}>{option}</option>
                                )}
                              </select>
                              <div
                             />
                            </div>
                        </div>
                          <fieldset>
                          <legend>
                              You have selected {this.state.alt} as your image.
                          </legend>
                                {foodImage.map((choice,index)=>
                                  <label key={index}>
                                    <Input type="radio"
                                    name="src"
                                    id={choice.ItemName}
                                    value={choice.ItemImg}
                                    checked={this.state.src === {choice}}
                                    onChange={this.handleRadioChange.bind(this)}
                                    />
                                    <img id="pix"src={choice.ItemImg} alt={choice.ItemName}/>
                                </label>
                                )}
                          </fieldset>

                          <div className="form-row" id="ingredients">
                            <div className="form-group col-md-6">
                              <TextArea
                              value={this.state.ingredients}
                              onChange={this.handleInputChange}
                              name="ingredients"
                              placeholder="ingredients (Optional)"
                              />
                            </div>
                          </div>
                        
                          <FormBtn
                            disabled={!(this.state.address && this.state.name)}
                            onClick={this.handleFormSubmit}
                          >
                            Submit Cook
                          </FormBtn>         
        </form>
        </div>
      </div>
    </div>
  </div>  
  
    );
  }
}

export default Cooks;
