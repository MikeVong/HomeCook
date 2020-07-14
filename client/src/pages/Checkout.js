import React,{useState}from "react";
import "../App.css";
import API from "../utils/API";


function Checkout() {
const [cart, setCart] = useState(localStorage.getItem("checkout") 
? JSON.parse(localStorage.getItem("checkout")): [])


 const removeFromCart =(remove)=> {
            setCart(cart.filter((item) => item !== remove));
            localStorage.setItem("checkout", JSON.stringify(cart.filter((item) => item !== remove)));
            
        };

  // Deletes a book from the database with a given id, then reloads books from the db
  const deleteCook = id => {
    API.deleteCook(id)
      .then(alert("cook was deleted, email sent to cook!"))
      .then(localStorage.clear())
      .catch(err => console.log(err));
  };
    
    return (
       
        <div className="jumbotron text-center">
           <div>
           {console.log(cart)}

           {cart.map((inCart, index) =>(
            <div className="card" key={index}>
                <div className="card-body">
                    <div className="row">
                      <div className="col-xs-2">
                      <img className="img-thumbnail" src={inCart.src} alt={inCart.name}/>
                      </div>
                      <div className="col-xs-2">
                      <h5>{inCart.dish} by {inCart.name}</h5>
                      <h5>{inCart.address}</h5>
                      </div>
                      {/* {console.log(inCart._id)} */}
                      <button className="btn btn-warning" onClick= {()=> removeFromCart(inCart)}>remove</button>
                    </div>
                </div>
            </div>
          ))}
          <button className="btn btn-info" onClick= {()=> deleteCook(cart[0]._id)}>checkout</button>
           </div>
        </div>

    );
}


export default Checkout;

