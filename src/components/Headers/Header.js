import React, {useState, useEffect} from "react";

import { Card, CardBody, CardTitle, Container, Row, Col, FormGroup, Input, Button } from "reactstrap";
import "../../assets/css/Items.css";
import { connect } from "react-redux";
import { getItems, AddtoCart } from "../../actions/AddtoCart";
import {login} from "../../actions/auth"

const Header = ({getItems, AddtoCart, cartItem, login}) => {
  const [coke,setCoke] = useState(0);
  const [lays,setLays] = useState(0);
  const [dairy,setDairy] = useState(0);
  const [spaghetti,setSpaghetti] = useState(0);
  const [maggi,setMaggi] = useState(0);
  const [nutella,setNutella] = useState(0);
  const [item, setItem] = useState([]);

  const items = [{name: "coke", price: 30, item_id: 1, img: "coke_png.png", qty: 0},{name: "lays", price: 20, item_id: 2, img: "lays_png.png", qty: 0},{name: "dairyMilk", price: 10, item_id: 3, img: "dairy_milk_png.png", qty: 0},{name: "spaghetti", price: 50, item_id: 4, img: "spaghetti_png.png", qty: 0},{name: "maggi", price: 30, item_id: 5, img: "maggi_png.png", qty: 0},{name: "nutella", price: 100, item_id: 6, img: "nutella_png.png", qty: 0}]

  useEffect(() => {
    getItems();
  }, [])

  useEffect(() => {
    if(cartItem.items) {
      setItem(cartItem.items)
      console.log(cartItem.items)
    } 
  }, [cartItem])

  useEffect(() => {
    if(localStorage.getItem('username')) {
      const formData = {
        username: localStorage.getItem('username'),
        password: localStorage.getItem('password')
      }
      login({formData});
    }
  },[])

  const handleClick = (e) => {
    e.preventDefault();
    const cart = [];
    if(coke > 0) {
      cart.push({name: "Coke", price: item.filter(i => i.name==="coke")[0].price, quantity: coke})
    }
    if(lays > 0) {
      cart.push({name: "Lays", price: item.filter(i => i.name==="lays")[0].price, quantity: lays})
    }
    if(dairy > 0) {
      cart.push({name: "Dairy Milk", price: item.filter(i => i.name==="dairyMilk")[0].price, quantity: dairy})
    }
    if(maggi > 0) {
      cart.push({name: "Maggi", price: item.filter(i => i.name==="maggi")[0].price, quantity: maggi})
    }
    if(nutella > 0) {
      cart.push({name: "Nutella", price: item.filter(i => i.name==="nutella")[0].price, quantity: nutella})
    }
    if(spaghetti > 0) {
      cart.push({name: "Spaghetti", price: item.filter(i => i.name==="spaghetti")[0].price, quantity: spaghetti})
    }
    console.log(cart);
    AddtoCart({data: cart})
  }

    return (
      <>
        <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
          <Container fluid>
            <div className="header-body">
              {/* Card stats */}
              <Row>
                <Col lg="6" xl="4">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col-8 col-md-7 col-sm-4">
                            <span>
                              <img alt="..." src={require('assets/img/items/lays_png.png')} className="items-img"/>
                            </span>
                        </div>
                        <div className="col-4 col-md-5 col-sm-8">
                          <CardTitle tag="h3"
                          className="text-uppercase text-muted mb-0">
                            Lays
                          </CardTitle>
                          <h5>In stock</h5>
                          <h4>Price: 100</h4>
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
                            <img alt="..." src={require('assets/img/items/coke_png.png')} style={{width: "60px", height: "150px"}}/>
                          </span>
                        </div>
                        <div className="col-4 col-md-5 col-sm-8">
                          <CardTitle tag="h3"
                          className="text-uppercase text-muted mb-0">
                            Coke
                          </CardTitle>
                          <h5>In stock</h5>
                          <h4>Price: {items.filter(i => i.name==="coke")[0].price}</h4>
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
                        <img alt="..." src={require('assets/img/items/dairy_milk_png.png')} style={{width: "170px", height: "100px"}}/>
                      </span>
                    </div>
                    <div className="col-4 col-md-5 col-sm-8">
                      <CardTitle tag="h3"
                      className="text-uppercase text-muted mb-0">
                        Dairy Milk
                      </CardTitle>
                      <h5>In stock</h5>
                      <h4>Price: {items.filter(i => i.name==="dairyMilk")[0].price}</h4>
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
          </Container>
          <Container fluid>
            <div className="header-body mt-4">
              {/* Card stats */}
              <Row>
                <Col lg="6" xl="4">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                      <div className="col-8 col-md-7 col-sm-4">
                      <span>
                        <img alt="..." src={require('assets/img/items/maggi_png.png')} style={{width: "120px", height: "150px"}}/>
                      </span>
                    </div>
                    <div className="col-4 col-md-5 col-sm-8">
                      <CardTitle tag="h3"
                      className="text-uppercase text-muted mb-0">
                        Maggi
                      </CardTitle>
                      <h5>In stock</h5>
                      <h4>Price: {items.filter(i => i.name==="maggi")[0].price}</h4>
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
                        <img alt="..." src={require('assets/img/items/nutella_png.png')} style={{width: "120px", height: "150px"}}/>
                      </span>
                    </div>
                    <div className="col-4 col-md-5 col-sm-8">
                      <CardTitle tag="h3"
                      className="text-uppercase text-muted mb-0">
                        Nutella
                      </CardTitle>
                      <h5>In stock</h5>
                      <h4>Price: {items.filter(i => i.name==="nutella")[0].price}</h4>
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
                        <img alt="..." src={require('assets/img/items/spaghetti_png.png')} style={{width: "160px", height: "100px"}}/>
                      </span>
                    </div>
                    <div className="col-4 col-md-5 col-sm-8">
                      <CardTitle tag="h3"
                      className="text-uppercase text-muted mb-0">
                        Spaghetti
                      </CardTitle>
                      <h5>In stock</h5>
                      <h4>Price: {items.filter(i => i.name==="spaghetti")[0].price}</h4>
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
        </div>
      </>
    );
}

const mapsStateToProps = state => ({
  cartItem: state.cartItem
})

export default connect(mapsStateToProps, {getItems, AddtoCart, login})(Header);
