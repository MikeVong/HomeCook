import React,{useState, useEffect}from "react";
import "../App.css";
import API from "../utils/API";
import Nav from "../components/Nav";


function Checkout() {
const [cart, setCart] = useState(localStorage.getItem("checkout") 
? JSON.parse(localStorage.getItem("checkout")): [])


useEffect(() => {
  JSON.parse(localStorage.getItem("checkout"));

})

 const removeFromCart =(remove)=> {
            setCart(cart.filter((item) => item !== remove));
            localStorage.setItem("checkout", JSON.stringify(cart.filter((item) => item !== remove)));
            
        };

  // Deletes a book from the database with a given id, then reloads books from the db
  const deleteCook = id => {
    API.deleteCook(id)
      .then(alert("cook was deleted, email sent to cook!"))
      .then(localStorage.clear())
      .then(window.location.reload())
      .catch(err => console.log(err));
  };
    
    return (
        <div className="jumbotron">
       <Nav />

           {console.log(cart)}

           {cart.map((inCart, index) =>(
            <div className="card" key={index}>
                <div className="card-body">
                    <div className="row">
                      <div className="col-xs-2">
                        <img className="img-thumbnail" src={inCart.src} alt={inCart.name}/>
                      </div>
                      <div className="col-xs-10">
                        <h5>{inCart.dish} by {inCart.name} at <span>{inCart.address}</span>
                        <button className="btn btn-warning float-right" onClick= {()=> removeFromCart(inCart)}>remove</button>
                      </h5>
                      <h4>
                        Cost: ${inCart.cost}
                      </h4>
                      </div>
                      {/* {console.log(inCart._id)} */}
                     
                    </div>
                </div>
            </div>
          ))}

          <button className="btn btn-info float-right" onClick= {()=> deleteCook(cart[0]._id)}>checkout</button>
           </div>
        // </div>

    );
}


export default Checkout;

