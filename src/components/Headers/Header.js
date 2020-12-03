import React, {useState, useEffect, Fragment} from "react";
import {Redirect, Link} from "react-router-dom"

import {TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Alert } from "reactstrap";
import "../../assets/css/Items.css";
import { connect } from "react-redux";
import { getItems, AddtoCart, clearMsg } from "../../actions/AddtoCart";
import {login} from "../../actions/auth"
import Category from "../../views/examples/Category"
import classnames from 'classnames';

const Header = ({getItems, AddtoCart,history, cartItem, login, auth, clearMsg }) => {
  const [coke,setCoke] = useState(0);
  const [lays,setLays] = useState(0);
  const [dairy,setDairy] = useState(0);
  const [spaghetti,setSpaghetti] = useState(0);
  const [maggi,setMaggi] = useState(0);
  const [nutella,setNutella] = useState(0);
  const [doritos,setDoritos] = useState(0);
  const [pringles,setPringles] = useState(0);
  const [mogu,setMogu] = useState(0);
  const [cheese,setCheese] = useState(0);
  const [butter,setButter] = useState(0);
  const [item, setItem] = useState([]);
  const [cat, setCat] = useState("Chocolate")
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

    useEffect(() => {
    if(auth.isAuthenticated) {
      getItems();
    }
  }, [auth])

  useEffect(() => {
    // if(cartItem.category.categories) {
    //   setItem(cartItem.category.categories[0].items)
    // } 
    if(cartItem.category) {
      console.log(cartItem.category.categories)
    }
    
  }, [cartItem])

  useEffect(() => {
    if(localStorage.getItem('username') && !auth.isAuthenticated) {
      const formData = {
        username: localStorage.getItem('username'),
        password: localStorage.getItem('password')
      }
      login({formData});
    }
  },[])

  useEffect(() => {
    if(cartItem.message === "Added to Cart") {
      setTimeout(function() {
        clearMsg();
      },3000)
    }
  },[cartItem])

  const handleClick = (e) => {
    e.preventDefault();
    console.log(item)
    const cart = [];
    if(coke > 0) {
      cart.push({name: "Coke", price: item.filter(i => i.name==="Coke")[0].price, quantity: coke, id: item.filter(i => i.name==="Coke")[0]._id})
    }
    if(lays > 0) {
      cart.push({name: "Lays", price: item.filter(i => i.name==="Lays")[0].price, quantity: lays, id: item.filter(i => i.name==="Lays")[0]._id})
    }
    if(dairy > 0) {
      cart.push({name: "Dairy Milk", price: item.filter(i => i.name==="Dairy Milk")[0].price, quantity: dairy, id: item.filter(i => i.name==="Dairy Milk")[0]._id})
    }
    if(maggi > 0) {
      cart.push({name: "Maggi", price: item.filter(i => i.name==="Maggi")[0].price, quantity: maggi, id: item.filter(i => i.name==="Maggi")[0]._id})
    }
    if(nutella > 0) {
      cart.push({name: "Nutella", price: item.filter(i => i.name==="Nutella")[0].price, quantity: nutella, id: item.filter(i => i.name==="Nutella")[0]._id})
    }
    if(spaghetti > 0) {
      cart.push({name: "Spaghetti", price: item.filter(i => i.name==="Spaghetti")[0].price, quantity: spaghetti, id: item.filter(i => i.name==="Spaghetti")[0]._id})
    }
    if(doritos > 0) {
      cart.push({name: "Doritos", price: item.filter(i => i.name==="Doritos")[0].price, quantity: doritos, id: item.filter(i => i.name==="Doritos")[0]._id})
    }
    if(pringles > 0) {
      cart.push({name: "Pringles", price: item.filter(i => i.name==="Pringles")[0].price, quantity: pringles, id: item.filter(i => i.name==="Pringles")[0]._id})
    }
    if(cheese > 0) {
      cart.push({name: "Cheese", price: item.filter(i => i.name==="Cheese")[0].price, quantity: cheese, id: item.filter(i => i.name==="Cheese")[0]._id})
    }
    if(butter > 0) {
      cart.push({name: "Butter", price: item.filter(i => i.name==="Butter")[0].price, quantity: butter, id: item.filter(i => i.name==="Butter")[0]._id})
    }
    if(mogu > 0) {
      cart.push({name: "Mogu Mogu", price: item.filter(i => i.name==="Mogu Mogu")[0].price, quantity: mogu, id: item.filter(i => i.name==="Mogu Mogu")[0]._id})
    }
    console.log(cart);
    AddtoCart({data: cart, username: localStorage.getItem('username')})
    setCoke(0);
    setDairy(0);
    setLays(0);
    setMaggi(0);
    setNutella(0);
    setSpaghetti(0);
    setButter(0);
    setCheese(0);
    setPringles(0);
    setDoritos(0);
    setMogu(0);
  }

    return (
      <>
        {!auth.isAuthenticated ? <Redirect to = "/auth/login" /> : null}
        <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        {cartItem.message && <Alert color="success">
        {cartItem.message}
      </Alert>}
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            Drinks
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Dairy
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
          >
            Chips
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '4' })}
            onClick={() => { toggle('4'); }}
          >
            Noodles and Pasta
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '5' })}
            onClick={() => { toggle('5'); }}
          >
            Chocolate
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              {cartItem.category && <Category item={cartItem.category.categories[3]}/>}
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
          <Col sm="12">
          {cartItem.category && <Category item={cartItem.category.categories[2]}/>}
        </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
          <Col sm="12">
          {cartItem.category && <Category item={cartItem.category.categories[0]}/>}
        </Col>
          </Row>
        </TabPane>
        <TabPane tabId="4">
          <Row>
          {cartItem.category && <Category item={cartItem.category.categories[4]}/>}
          </Row>
        </TabPane>
        <TabPane tabId="5">
          <Row>
          <Col sm="12">
          {cartItem.category && <Category item={cartItem.category.categories[1]}/>}
        </Col>
          </Row>
        </TabPane>
      </TabContent>
        </div>
      </>
    );
}

const mapsStateToProps = state => ({
  cartItem: state.cartItem,
  auth: state.auth
})

export default connect(mapsStateToProps, {getItems, AddtoCart, login, clearMsg})(Header);
