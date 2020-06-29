import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { List, ListItem } from "../components/List";


class Eater extends Component {
  state = {
    cooks: []
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

  deleteCook = id => {
    API.deleteCook(id)
      .then(res => this.loadCooks())
      .catch(err => console.log(err));
  };


  render() {
    return (
          <div className="container">
            <Jumbotron>
              <h1>Cooks On Available</h1>
            </Jumbotron>
            {this.state.cooks.length ? (
              <List>
                {this.state.cooks.map(cook => (
                  <ListItem key={cook._id}>
                    <Link to={"/cooks/" + cook._id}>
                      <strong>
                        {cook.name} at {cook.location}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteCook(cook._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </div>
    );
  }
}

export default Eater;
