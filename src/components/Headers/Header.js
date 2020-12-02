import React, {useState, useEffect, Fragment} from "react";
import {Redirect} from "react-router-dom"

import { Card, CardBody, CardTitle, Container, Row, Col, FormGroup, Input, Button, Alert } from "reactstrap";
import "../../assets/css/Items.css";
import { connect } from "react-redux";
import { getItems, AddtoCart, clearMsg } from "../../actions/AddtoCart";
import {login} from "../../actions/auth"

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

    useEffect(() => {
    if(auth.isAuthenticated) {
      getItems();
    }
  }, [auth])

  useEffect(() => {
    if(cartItem.items) {
      setItem(cartItem.items.items)
      console.log(cartItem.items)
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
          {item.length > 0 && <Container fluid>
            <div className="header-body">
              {/* Card stats */}
              <Row>
                <Col lg="6" xl="4">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col-8 col-md-7 col-sm-4">
                            <span>
                              {item.length>0 && <img alt="..." src={require(`assets/img/items/${item.filter(i => i.name==="Lays")[0].name}_png.png`)} className="items-img"/>}
                            </span>
                        </div>
                        <div className="col-4 col-md-5 col-sm-8">
                          <CardTitle tag="h3"
                          className="text-uppercase text-muted mb-0">
                            {item.filter(i => i.name==="Lays")[0].name}
                          </CardTitle>
                          <h5>{item.filter(i => i.name==="Lays")[0].stock > 0 ? "In Stock" : "Out of Stock"}</h5>
                          <h4>Price: {item.filter(i => i.name==="Lays")[0].price}</h4>
                          <div>
                           <FormGroup >
                            <Input
                              type="number" value={lays} onChange={e=>setLays(e.target.value)} 
                            />
                          </FormGroup>
    </div>
                        </div>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="4">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col-8 col-md-7 col-sm-4">
                          <span>
                            <img alt="..." src={require(`assets/img/items/${item.filter(i => i.name==="Coke")[0].name}_png.png`)} style={{width: "60px", height: "150px"}}/>
                          </span>
                        </div>
                        <div className="col-4 col-md-5 col-sm-8">
                          <CardTitle tag="h3"
                          className="text-uppercase text-muted mb-0">
                          {item.filter(i => i.name==="Coke")[0].name}
                          </CardTitle>
                          <h5>{item.filter(i => i.name==="Coke")[0].stock > 0 ? "In Stock" : "Out of Stock"}</h5>
                          <h4>Price: {item.filter(i => i.name==="Coke")[0].price}</h4>
                          <div>
                          <FormGroup>
                          <Input
                            type="number" value={coke} onChange={e=>setCoke(e.target.value)}
                          />
                        </FormGroup>
                          </div>
                        </div>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="4">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                      <div className="col-8 col-md-7 col-sm-4">
                      <span>
                        <img alt="..." src={require(`assets/img/items/${item.filter(i => i.name==="Dairy Milk")[0].name}_png.png`)} style={{width: "170px", height: "100px"}}/>
                      </span>
                    </div>
                    <div className="col-4 col-md-5 col-sm-8">
                      <CardTitle tag="h3"
                      className="text-uppercase text-muted mb-0">
                      {item.filter(i => i.name==="Dairy Milk")[0].name}
                      </CardTitle>
                      <h5>{item.filter(i => i.name==="Dairy Milk")[0].stock > 0 ? "In Stock" : "Out of Stock"}</h5>
                      <h4>Price: {item.filter(i => i.name==="Dairy Milk")[0].price}</h4>
                      <div>
                      <FormGroup>
                      <Input
                        type="number" value={dairy} onChange={e=>setDairy(e.target.value)}
                      />
                    </FormGroup>
                          </div>
                    </div>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          </Container>}
          {item.length > 0 && <Container fluid>
            <div className="header-body">
              {/* Card stats */}
              <Row>
                <Col lg="6" xl="4">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col-8 col-md-7 col-sm-4">
                            <span>
                              {item.length>0 && <img alt="..." src={require(`assets/img/items/${item.filter(i => i.name==="Doritos")[0].name}_png.png`)} className="items-img"/>}
                            </span>
                        </div>
                        <div className="col-4 col-md-5 col-sm-8">
                          <CardTitle tag="h3"
                          className="text-uppercase text-muted mb-0">
                            {item.filter(i => i.name==="Doritos")[0].name}
                          </CardTitle>
                          <h5>{item.filter(i => i.name==="Doritos")[0].stock > 0 ? "In Stock" : "Out of Stock"}</h5>
                          <h4>Price: {item.filter(i => i.name==="Doritos")[0].price}</h4>
                          <div>
                           <FormGroup >
                            <Input
                              type="number" value={doritos} onChange={e=>setDoritos(e.target.value)} 
                            />
                          </FormGroup>
    </div>
                        </div>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="4">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col-8 col-md-7 col-sm-4">
                          <span>
                            <img alt="..." src={require(`assets/img/items/${item.filter(i => i.name==="Pringles")[0].name}_png.png`)} style={{width: "60px", height: "150px"}}/>
                          </span>
                        </div>
                        <div className="col-4 col-md-5 col-sm-8">
                          <CardTitle tag="h3"
                          className="text-uppercase text-muted mb-0">
                          {item.filter(i => i.name==="Pringles")[0].name}
                          </CardTitle>
                          <h5>{item.filter(i => i.name==="Pringles")[0].stock > 0 ? "In Stock" : "Out of Stock"}</h5>
                          <h4>Price: {item.filter(i => i.name==="Pringles")[0].price}</h4>
                          <div>
                          <FormGroup>
                          <Input
                            type="number" value={pringles} onChange={e=>setPringles(e.target.value)}
                          />
                        </FormGroup>
                          </div>
                        </div>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="4">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                      <div className="col-8 col-md-7 col-sm-4">
                      <span>
                        <img alt="..." src={require(`assets/img/items/${item.filter(i => i.name==="Butter")[0].name}_png.png`)} style={{width: "170px", height: "100px"}}/>
                      </span>
                    </div>
                    <div className="col-4 col-md-5 col-sm-8">
                      <CardTitle tag="h3"
                      className="text-uppercase text-muted mb-0">
                      {item.filter(i => i.name==="Butter")[0].name}
                      </CardTitle>
                      <h5>{item.filter(i => i.name==="Butter")[0].stock > 0 ? "In Stock" : "Out of Stock"}</h5>
                      <h4>Price: {item.filter(i => i.name==="Butter")[0].price}</h4>
                      <div>
                      <FormGroup>
                      <Input
                        type="number" value={butter} onChange={e=>setButter(e.target.value)}
                      />
                    </FormGroup>
                          </div>
                    </div>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          </Container>}
          {item.length > 0 && <Container fluid>
            <div className="header-body">
              {/* Card stats */}
              <Row>
                <Col lg="6" xl="4">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col-8 col-md-7 col-sm-4">
                            <span>
                              {item.length>0 && <img alt="..." src={require(`assets/img/items/${item.filter(i => i.name==="Cheese")[0].name}_png.png`)} className="items-img"/>}
                            </span>
                        </div>
                        <div className="col-4 col-md-5 col-sm-8">
                          <CardTitle tag="h3"
                          className="text-uppercase text-muted mb-0">
                            {item.filter(i => i.name==="Cheese")[0].name}
                          </CardTitle>
                          <h5>{item.filter(i => i.name==="Cheese")[0].stock > 0 ? "In Stock" : "Out of Stock"}</h5>
                          <h4>Price: {item.filter(i => i.name==="Cheese")[0].price}</h4>
                          <div>
                           <FormGroup >
                            <Input
                              type="number" value={cheese} onChange={e=>setCheese(e.target.value)} 
                            />
                          </FormGroup>
    </div>
                        </div>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="4">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col-8 col-md-7 col-sm-4">
                          <span>
                            <img alt="..." src={require(`assets/img/items/${item.filter(i => i.name==="Mogu Mogu")[0].name}_png.png`)} style={{width: "60px", height: "150px"}}/>
                          </span>
                        </div>
                        <div className="col-4 col-md-5 col-sm-8">
                          <CardTitle tag="h3"
                          className="text-uppercase text-muted mb-0">
                          {item.filter(i => i.name==="Mogu Mogu")[0].name}
                          </CardTitle>
                          <h5>{item.filter(i => i.name==="Mogu Mogu")[0].stock > 0 ? "In Stock" : "Out of Stock"}</h5>
                          <h4>Price: {item.filter(i => i.name==="Mogu Mogu")[0].price}</h4>
                          <div>
                          <FormGroup>
                          <Input
                            type="number" value={mogu} onChange={e=>setMogu(e.target.value)}
                          />
                        </FormGroup>
                          </div>
                        </div>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          </Container>}
          {item.length>0 && <Fragment><Container fluid>
            <div className="header-body mt-4">
              {/* Card stats */}
              <Row>
                <Col lg="6" xl="4">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                      <div className="col-8 col-md-7 col-sm-4">
                      <span>
                        <img alt="..." src={require(`assets/img/items/${item.filter(i => i.name==="Maggi")[0].name}_png.png`)} style={{width: "120px", height: "150px"}}/>
                      </span>
                    </div>
                    <div className="col-4 col-md-5 col-sm-8">
                      <CardTitle tag="h3"
                      className="text-uppercase text-muted mb-0">
                      {item.filter(i => i.name==="Maggi")[0].name}
                      </CardTitle>
                      <h5>{item.filter(i => i.name==="Maggi")[0].stock > 0 ? "In Stock" : "Out of Stock"}</h5>
                      <h4>Price: {item.filter(i => i.name==="Maggi")[0].price}</h4>
                      <div>
                      <FormGroup>
                      <Input
                        type="number" value={maggi} onChange={e=>setMaggi(e.target.value)}
                      />
                    </FormGroup>
                      </div>
                    </div>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="4">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                      <div className="col-8 col-md-7 col-sm-4">
                      <span>
                        <img alt="..." src={require(`assets/img/items/${item.filter(i => i.name==="Nutella")[0].name}_png.png`)} style={{width: "120px", height: "150px"}}/>
                      </span>
                    </div>
                    <div className="col-4 col-md-5 col-sm-8">
                      <CardTitle tag="h3"
                      className="text-uppercase text-muted mb-0">
                      {item.filter(i => i.name==="Nutella")[0].name}
                      </CardTitle>
                      <h5>{item.filter(i => i.name==="Nutella")[0].stock > 0 ? "In Stock" : "Out of Stock"}</h5>
                      <h4>Price: {item.filter(i => i.name==="Nutella")[0].price}</h4>
                      <div>
                      <FormGroup>
                      <Input
                        type="number" value={nutella} onChange={e=>setNutella(e.target.value)}
                      />
                    </FormGroup>
                      </div>
                    </div>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="4">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                      <div className="col-8 col-md-7 col-sm-4">
                      <span>
                        <img alt="..." src={require(`assets/img/items/${item.filter(i => i.name==="Spaghetti")[0].name}_png.png`)} style={{width: "160px", height: "100px"}}/>
                      </span>
                    </div>
                    <div className="col-4 col-md-5 col-sm-8">
                      <CardTitle tag="h3"
                      className="text-uppercase text-muted mb-0">
                      {item.filter(i => i.name==="Spaghetti")[0].name}
                      </CardTitle>
                      <h5>{item.filter(i => i.name==="Spaghetti")[0].stock > 0 ? "In Stock" : "Out of Stock"}</h5>
                      <h4>Price: {item.filter(i => i.name==="Spaghetti")[0].price}</h4>
                      <div>
                      <FormGroup>
                      <Input
                        type="number" value={spaghetti} onChange={e=>setSpaghetti(e.target.value)}
                      />
                    </FormGroup>
                      </div>
                    </div>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          </Container>
          <div className="text-center">
          <Button color="primary" type="button" className="mt-4" onClick={handleClick}>
            Add to Cart
          </Button>
          </div>
          </Fragment>}
        </div>
      </>
    );
}

const mapsStateToProps = state => ({
  cartItem: state.cartItem,
  auth: state.auth
})

export default connect(mapsStateToProps, {getItems, AddtoCart, login, clearMsg})(Header);
