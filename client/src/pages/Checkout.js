import React,{useState, useEffect}from "react";
import "../App.css";
import API from "../utils/API";
import Modal from "react-modal";



Modal.setAppElement('#root')
function Checkout() {
const Storage= localStorage.getItem("checkout");
const [cart, setCart] = useState(Storage ? JSON.parse(Storage): [])
const [modalShow, setModalShow] = useState(false);
const content = {top: '140px',left: '240px',right: '240px',bottom: '440px',border: '1px solid #ccc',background: '#fff',overflow: 'auto',WebkitOverflowScrolling: 'touch',borderRadius: '4px',outline: 'none',padding: '20px'}

useEffect(() => { JSON.parse(Storage) })

 const removeFromCart =(remove)=> {
            setCart(cart.filter((item) => item !== remove));
            localStorage.setItem("checkout", JSON.stringify(cart.filter((item) => item !== remove)));
        };


  const ModalClose =() =>{
    setModalShow(false);
    window.location.reload()

  }

  const deleteCook = id => {
    API.deleteCook(id)
      .then(setModalShow(true))
      .then(localStorage.clear())
      // .then(window.location.reload())
      .catch(err => console.log(err));
    

  };
    
    return (
          
          <div className="jumbotron bg-info">
            <Modal
                isOpen={modalShow}
                style={{content: content}}
            >
              <h2 className="bg-info text-center">Thank you for the purchase!</h2>
              <p>An Email was sent to the Cook, Please allow 45 mins before picking up the food.</p>
              <div>
              <button className="btn btn-success float-right"onClick={()=> ModalClose()}>Close</button>
              </div>
              
            </Modal>
           {console.log(cart)}
           <div className="text-center">
             {!cart.length ? (
               <h1>No item in Cart</h1>
             ):( <div>
               <h2>Can only checkout one item at a time!</h2>
             <h6>Cart will be empty after checkout.</h6>
             </div>)}
            
           </div>
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

