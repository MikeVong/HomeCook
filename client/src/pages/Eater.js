import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { List, ListItem } from "../components/List";
import Map from "../components/Map";

class Eater extends Component {
  constructor(props){
    super(props);
    this.state = {
      cooks: [],
      lat:"",
      lng:""
    };
    
  };
 

  componentDidMount() {
    this.loadCooks();
  }

  loadCooks = () => {
    API.getCooks()
      .then(res =>{
        console.log(res.data)
        this.setState({ cooks: res.data, lat: res.data[0].coordinates[0].lat,lng: res.data[0].coordinates[0].lng})
       })
      .catch(err => console.log(err));
  };

  deleteCook = id => {
    API.deleteCook(id)
      .then(res => this.loadCooks())
      .catch(err => console.log(err));
  };

  
  render() {
    return (
          <div className="container">
            <Jumbotron>
            <Map lat={this.state.lat} lng={this.state.lng} />
            {console.log(this.state.lat)}
            {console.log(this.state.lng)}
            </Jumbotron>
            
          </div>
    );
  }
}

export default Eater;
