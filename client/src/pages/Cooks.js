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
    location: "",
    email: "",
    dish:"",
    ingredients:"",
    cost:"",
    protions:"",
    address:"",
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

  deleteBook = id => {
    API.deleteCook(id)
      .then(res => this.loadCooks())
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
    if (this.state.name && this.state.location) {
      API.saveCook({
        name: this.state.name,
        location: this.state.location,
        dish: this.state.dish,
        ingredients: this.state.ingredients,
        address: this.state.address,
        coordinates: this.state.coordinates
      })
        .then(res => this.loadCooks())
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
                value={this.state.location}
                onChange={this.handleInputChange}
                name="location"
                placeholder="location (required)"
              />
              <Input
                value={this.state.dish}
                onChange={this.handleInputChange}
                name="dish"
                placeholder="dish name(required)"
              />
              <TextArea
                value={this.state.ingredients}
                onChange={this.handleInputChange}
                name="ingredients"
                placeholder="ingredients (Optional)"
              />
              <FormBtn
                disabled={!(this.state.location && this.state.name)}
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
