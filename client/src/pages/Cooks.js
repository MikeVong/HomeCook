import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Input, TextArea, FormBtn } from "../components/Form";
import Search from "../components/Search";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";


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
    coordinates:[0,0]
    
  };

  componentDidMount() {
    this.loadCooks();
  }

  loadCooks = () => {
    API.getCooks()
      .then(res =>
        this.setState({ cooks: res.data})
      )
      .catch(err => console.log(err));
  };


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSelect = async value => {
    
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    this.setState({address: value,
                    coordinates: latLng});

  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.address) {
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
        .then(res => this.loadCooks())
        .then(alert("Cook info saved!"))
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div className="container">
        
            <Jumbotron>
              <h1>Please tell us what you can make?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="name (required)"
              />
              <Search 
                value={this.state.address}
                onChange={this.handleSelect}
                onSelect={this.handleSelect}
                name="address"
                />
                
              <Input
                value={this.state.dish}
                onChange={this.handleInputChange}
                name="dish"
                placeholder="dish name"
              />
              <Input
                value={this.state.src}
                onChange={this.handleInputChange}
                name="src"
                placeholder="Food picture link"
              />
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
                placeholder="How many Portions?"
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

    );
  }
}

export default Cooks;
