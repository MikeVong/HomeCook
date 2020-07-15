import React,{useState, useEffect}from "react";
import "../App.css";
import API from "../utils/API";




function Checkout() {

const Storage= localStorage.getItem("checkout");
const [cart, setCart] = useState(Storage ? JSON.parse(Storage): [])


useEffect(() => { JSON.parse(Storage) })

 const removeFromCart =(remove)=> {
            setCart(cart.filter((item) => item !== remove));
            localStorage.setItem("checkout", JSON.stringify(cart.filter((item) => item !== remove)));
            
        };


  const deleteCook = id => {
    API.deleteCook(id)
      .then(alert("cook was deleted, email sent to cook!"))
      .then(localStorage.clear())
      .then(window.location.reload())
      .catch(err => console.log(err));

  };
    
    return (

          <div className="jumbotron bg-info">
           {console.log(cart)}
           <div className="container bg-danger">
            <table className="table table-hover">
              <tbody>
                {cart.map((inCart, index)=> (
                  <tr  key={index}>
                    <th scope="row"></th>
                      <td>
                      <img className="img-thumbnail" src={inCart.src} alt={inCart.name}/>
                      </td>
                      <td>
                      <h4>{inCart.dish} by {inCart.name} at {inCart.address}</h4>
                      </td>
                      <td>
                      <button className="btn btn-warning " onClick= {()=> removeFromCart(inCart)}>remove</button>
                      </td>
                      <td>
                      <button className="btn btn-dark float-right" onClick= {()=> deleteCook(inCart._id)}>checkout</button>
                      </td> 
                  </tr>
                ))}
              </tbody>
            </table>

</div>
           </div>


    );
}


export default Checkout;

