import React, {useEffect} from 'react';
import Navbars from "../../components/Navbars/Navbars";
import Cards from "./Cards";
import {
    Button,
    Alert
  } from "reactstrap";
import {connect} from "react-redux";
import {getCart, placeOrder, clearMsg} from "../../actions/AddtoCart"
import {login} from "../../actions/auth"

const Cart = ({getCart, auth, cartItem, login, history, placeOrder, clearMsg}) => {

  useEffect(() => {
    if(localStorage.getItem('username')) {
      getCart({
        username: localStorage.getItem('username')
      });
    }
    else {
      history.push("/login")
    }
  },[])

  useEffect(() => {
    if(localStorage.getItem('username')) {
      const formData = {
        username: localStorage.getItem('username'),
        password: localStorage.getItem('password')
      }
      login({formData});
    }
  },[])

  useEffect(() => {
    if(cartItem.user_cart) {
      console.log(cartItem.user_cart)
    }
  },[cartItem])

  const handleClick = (e) => {
    e.preventDefault();
    placeOrder({
      username: localStorage.getItem('username')
    })
  }

  useEffect(() => {
    if(cartItem.message === "Order Placed") {
      setTimeout(function() {
        clearMsg();
        history.push("/orders")
      },3000)
    }
    if(cartItem.message === "Item Removed Successfully") {
      setTimeout(function() {
        clearMsg();
      },3000)
    }
  },[cartItem])

    return (
        <div>
            <Navbars />
            <h1 className="ml-7 mt-4">Cart</h1>
            {cartItem.message && <Alert color="success">
        {cartItem.message}
      </Alert>}
            {cartItem.user_cart && (cartItem.user_cart.length === 0 ? (<div className="text-center mt-4"><img alt="Empty Cart" src={require("assets/img/items/Empty Cart.jpeg")}/></div>) : (
              cartItem.user_cart.map((c) => <Cards data = {c}/>)
            ))}
            <div className="text-center">
            {cartItem.user_cart && (cartItem.user_cart.length !== 0 && (<div className="mb-3"><b>Total: ${cartItem.total}</b></div>))}
            </div>
            <div className="text-center">
            {cartItem.user_cart && (cartItem.user_cart.length !== 0 && <Button className="mb-4" color="primary" type="button" onClick={handleClick}>
                Place Order
              </Button>)}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
  auth: state.auth,
  cartItem: state.cartItem
})

export default connect(mapStateToProps, {getCart, login, placeOrder, clearMsg})(Cart);
