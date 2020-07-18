import React, { Component } from "react";
import API from "../utils/API";
import { Input, TextArea, FormBtn } from "../components/Form";
import Search from "../components/Search";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import Nav from "../components/Nav";
import Modal from "react-modal";
// import Modal from 'react-bootstrap';

const foodImage =["/steak.jpg","/dessert.jpg","/Pork.jpg","/veg.jpg","/chicken.jpg"];


const content = {top: '140px',left: '240px',right: '240px',bottom: '440px',
                border: '1px solid #ccc',background: '#fff',overflow: 'auto',
                WebkitOverflowScrolling: 'touch',borderRadius: '4px',outline: 'none',padding: '20px'}
Modal.setAppElement('#root')

// const handleClose = () => setShow(false);
// const handleShow = () => setShow(true)
class Cooks extends Component {
  state = {
    cooks: [],
    name: "",
    address:"",
    dish:"",
    src:"",
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
      src: event.currentTarget.value
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

  {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thank you for posting your dish</Modal.Title>
        </Modal.Header>
        <Modal.Body>An email will be sent to you once someone has placed the order for your dish.
          Your customer will then come meet you at your chosen location in the next 45 minutes after purchase
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal> */}
 

  {/* <div className="modal" tabindex="-1" role="dialog"
  isOpen={this.state.modalShow}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Thank you for posting your dish</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="close">
              <span aria-hidden="true">&times;</span>
            </button>

            <div>
              <div className="modal-body">
              <p>An Email will be sent to you once someone has placed the order for your dish.</p>
              <p>Your customer will then come meet you at your chosen location in the next 45 minutes after purchase.</p>
              </div>
              <div className="modal-footer">
              <button className="btn btn-success float-right"onClick={()=> this.handleModalClose() }>Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div> */}

    <Modal
      isOpen={this.state.modalShow}
      style={{content: content}}
    >
    <h2 className="bg-info text-center">Thank you for posting your dish</h2>
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
                            <div className="form-group cold-md-6">
                              <label>Name</label>
                              <input className="form-control"
                                size='65'
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
                            <select className="form-control">
                                <option selected disabled>Select Serving Size</option>
                                <option>1 - 2 people</option>
                                <option>2 - 4 people</option>
                                <option>4 - 6 people</option>
                                <option>6 - 8 people</option>
                                <option>8+ people</option>
                              </select>
                              <div
                              value={this.state.portions}
                              onChange={this.handleInputChange}
                              name="portions"
                              placeholder="How many Servings?"
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
                              <select className="form-control">
                                <option selected disabled>Select Payment Type</option>
                                <option>Cash</option>
                                <option>PayPal</option>
                                <option>Facebook Messenger</option>
                                <option>Square Cash</option>
                                <option>Google Pay</option>
                                <option>Samsung Pay</option>
                                <option>Apple Pay</option>
                                <option>Cash App</option>
                                <option>Venmo</option>
                                <option>Zelle</option>
                              </select>
                              <div
                              value={this.state.payBy}
                              onChange={this.handleInputChange}
                              name="payBy"
                             />
                            </div>
                        </div>

                          <fieldset>
                            <legend>
                              You picked {this.state.src} as your image.
                            </legend>
                                {foodImage.map((choice,index)=>
                                  <label key={index}>
                                    <Input type="radio"
                                    name="src"
                                    value={choice}
                                    checked={this.state.src === {choice}}
                                    onChange={this.handleRadioChange.bind(this)}
                                    />
                                    <img id="pix"src={choice} alt={choice}/>
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
  
      // <div className="choppingBoard">
      //     <div className="container">
      //           <div>
      //             <h1 className="dishInfo">Please Enter In Your Dish Info:</h1>
      //           </div>
      //           <form>
      //             <Input
      //               value={this.state.name}
      //               onChange={this.handleInputChange}
      //               name="name"
      //               placeholder="name (required)"
      //             />
      //             <Search 
      //               value={this.state.address}
      //               onChange={this.handleSelect}
      //               onSelect={this.handleSelect}
      //               name="address"
      //               />
                    
      //             <Input
      //               value={this.state.dish}
      //               onChange={this.handleInputChange}
      //               name="dish"
      //               placeholder="dish name"
      //             />

      //             <fieldset>
      //               <legend>
      //                 You picked {this.state.src} as your image.
      //               </legend>
      //                   {foodImage.map((choice,index)=>
      //                     <label>
      //                       <Input type="radio"
      //                       name="src"
      //                       key={index}
      //                       value={choice}
      //                       checked={this.state.src === {choice}}
      //                       onChange={this.handleRadioChange.bind(this)}
      //                       />
      //                       <img id="pix"src={choice} alt={choice}/>
      //                   </label>
      //                   )}
      //             </fieldset>
      //             <TextArea
      //               value={this.state.ingredients}
      //               onChange={this.handleInputChange}
      //               name="ingredients"
      //               placeholder="ingredients (Optional)"
      //             />
      //             <Input
      //               value={this.state.portions}
      //               onChange={this.handleInputChange}
      //               name="portions"
      //               placeholder="How many Servings?"
      //             />
      //             <Input
      //               value={this.state.cost}
      //               onChange={this.handleInputChange}
      //               name="cost"
      //               placeholder="Price?"
      //             />
      //             <Input
      //               value={this.state.email}
      //               onChange={this.handleInputChange}
      //               name="email"
      //               placeholder="email@email.com"
      //               type="email"
      //             />
      //             <Input
      //               value={this.state.payBy}
      //               onChange={this.handleInputChange}
      //               name="payBy"
      //               placeholder="payment type"
      //             />
      //             <FormBtn
      //               disabled={!(this.state.address && this.state.name)}
      //               onClick={this.handleFormSubmit}
      //             >
      //               Submit Cook
      //             </FormBtn>

                  
      //           </form>
      //         </div>
      // </div>
    );
  }
}

export default Cooks;
