import React, {useEffect} from 'react';
import Navbars from "../../components/Navbars/Navbars";
import Cards from "./Cards";
import {
    Button
  } from "reactstrap";
import {connect} from "react-redux";
import {getCart, placeOrder} from "../../actions/AddtoCart"
import {login} from "../../actions/auth"

const Cart = ({getCart, auth, cartItem, login, history}) => {

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
      username: localStorage.getItem['username']
    })
  }

    return (
        <div>
            <Navbars />
            {cartItem.user_cart && (cartItem.user_cart.length === 0 ? "Empty Cart" : (
              cartItem.user_cart.map((c) => <Cards data = {c}/>)
            ))}
            <div className="text-center">
            {cartItem.user_cart && (cartItem.user_cart.length !== 0 && `<p>Total: ${cartItem.total}</p>`)}
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

export default connect(mapStateToProps, {getCart, login, placeOrder})(Cart);
