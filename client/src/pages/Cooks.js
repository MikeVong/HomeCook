import React, { Component } from "react";
import { Input, TextArea, FormBtn,DropDown } from "../components/Form";
import API from "../utils/API";


class Cooks extends Component{
    state={
        cooks:[],
        name:"",
        email:"",
        dish:"",
        ingredients:"",
        cost: "",
        portions: ""
    }


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

    handleFormSubmit = event => {
    event.preventDefault();
        API.saveCook({
            name: this.state.name,
            email: this.state.email,
            dish: this.state.dish,
            ingredients: this.state.ingredients,
            cost: this.state.cost,
            portions: this.state.portions
        })
        .then(res =>
            this.setState({
                cooks: res.data
            })
        )
        .catch(err => console.log(err));
    
        
    };

    render() {
        return(
        <div>

        <Input
        value={this.state.name}
        onChange={this.handleInputChange}
        name="name"
        placeholder="Name"
        />
        <Input
        value={this.state.email}
        onChange={this.handleInputChange}
        name="email"
        placeholder="email"
        type="email"
        />
        <Input
        value={this.state.dish}
        onChange={this.handleInputChange}
        name="dish"
        placeholder="Dish Name"
        />
        <DropDown
        value={this.state.mealType}
        onChange={this.handleInputChange}
        name="mealType"
        />
        
        <TextArea
        value={this.state.ingredients}
        onChange={this.handleInputChange}
        name="ingredients"
        placeholder="Ingredients Used"
        />
        <FormBtn
        onClick={this.handleFormSubmit}
        >
        Submit
        </FormBtn>

        </div>
        
        );
    }


}

export default Cooks;