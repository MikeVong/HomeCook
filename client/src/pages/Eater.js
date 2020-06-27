import React, { Component } from "react";
import { List, ListItem } from "../components/List";
import API from "../utils/API";


class Eater extends Component {
    state = {
        cooks:[]
    };

    componentDidMount() {
        API.getCooks(this.props.match.params.id)
          .then(res => this.setState({ cook: res.data }))
          .catch(err => console.log(err));
      }


    render(){
        return(
            <div className="container">
                <h1>Cook list</h1>
                <List>
                    {this.state.cooks.map(cook => (
                        <ListItem key={cook._id}>
                            <p> Name: {cook.name}</p>
                            <p> Dish: {cook.dish}</p>
                            <p> Ingredients: {cook.ingredients}</p>
                        </ListItem>
                    ))}
                </List>

            </div>
        
        )
    }
}

export default Eater;