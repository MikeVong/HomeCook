import React,{useState, useEffect}from "react";
import "../App.css";
import API from "../utils/API";
import Nav from "../components/Nav";
import Modal from "react-modal";



Modal.setAppElement('#root')
function Checkout() {
const Storage= localStorage.getItem("checkout");
const [cart, setCart] = useState(Storage ? JSON.parse(Storage): [])
const [modalShow, setModalShow] = useState(false);
const overlay = {position: 'fixed', top: '0', left: '0', right: '0', bottom: '0', backgroundColor: 'rgba(255, 255, 255, 0.75)'};
const content = {top: '50%',left: '50%',right: 'auto',bottom: 'auto', marginRight: '-50%', transform: 'translate(-50%, -50%)',
                border: '1px solid #ccc',background: '#fff',overflow: 'auto',WebkitOverflowScrolling: 'touch',
                borderRadius: '4px',outline: 'none',padding: '20px'}

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
          
          <div className="checkout">
          <Nav />
            <Modal
                isOpen={modalShow}
                style={{overylay: overlay, content: content}}
            >
              <h2 className="text-center">Thank you for the purchase!</h2>
              <p>An Email was sent to the Cook. Please allow 45 mins before going to pick up the food.</p>
              <div>
              <button className="btn btn-success float-right"onClick={()=> ModalClose()}>Close</button>
              </div>
              
            </Modal>
           {console.log(cart)}
           <div className="card">
            <div className="text-center" id="chkout">
                {!cart.length ? (
                  <h1>No items in Cart</h1>
                ):( <div>
                  <h2>Can only checkout one item at a time!</h2>
                <h6>Cart will be emptied after checkout.</h6>
                </div>)}
            </div>
          </div>
        <br></br>
        <br></br>
           <div className="container" id="cartItems">
            <table className="table">
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
<div className="bottom"></div>
                <br></br>
           </div>


    );
}


export default Checkout;

