import React, { Component } from "react";
import API from "../utils/API";
import { Input, TextArea, FormBtn } from "../components/Form";
import Search from "../components/Search";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import Modal from "react-modal";


const foodImage =["/steak.jpg","/dessert.jpg","/Pork.jpg","/veg.jpg","/chicken.jpg"];
const content = {top: '140px',left: '240px',right: '240px',bottom: '440px',
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
    <Modal
      isOpen={this.state.modalShow}
      style={{content: content}}
    >
    <h2 className="bg-info text-center">Thank you for Using us</h2>
    <p>An Email will be sent to you when food is ordered. Once it is order, your customer will come in 45 mins to pickup the food.</p>
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

      <div className="row" id="cRow">
        <div className="col md-12">
        <form>
                          <Input
                            value={this.state.name}
                            onChange={this.handleInputChange}
                            name="name"
                            placeholder="name (required)"
                          />
                          <Search 
                            value={this.state.address}
                            onChange={this.handleSearchChange}
                            onSelect={this.handleSelect}
                            />
                           
                            
                          <Input
                            value={this.state.dish}
                            onChange={this.handleInputChange}
                            name="dish"
                            placeholder="dish name"
                          />

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
                          <TextArea
                            value={this.state.ingredients}
                            onChange={this.handleInputChange}
                            name="ingredients"
                            placeholder="ingredients (Optional)"
                          />

                          <Input
                            value={this.state.portions}
                            onChange={this.handleInputChange}
                            name="portions"
                            placeholder="How many Servings?"
                          />
                          <Input
                            value={this.state.cost}
                            onChange={this.handleInputChange}
                            name="cost"
                            placeholder="Price?"
                          />
                          <Input
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            name="email"
                            placeholder="email@email.com"
                            type="email"
                          />
                          <Input
                            value={this.state.payBy}
                            onChange={this.handleInputChange}
                            name="payBy"
                            placeholder="payment type"
                          />
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
