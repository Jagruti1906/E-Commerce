import React, {useState, useEffect} from "react";
import {withRouter} from "react-router-dom"

import { Card, CardBody, CardTitle, Container, Row, Col, FormGroup, Input, Button } from "reactstrap";
import "../../assets/css/Items.css";
import { connect } from "react-redux";
import { getItems, AddtoCart } from "../../actions/AddtoCart";
import {login} from "../../actions/auth"

const Header = ({getItems, AddtoCart,history, cartItem, login, auth }) => {
  const [coke,setCoke] = useState(0);
  const [lays,setLays] = useState(0);
  const [dairy,setDairy] = useState(0);
  const [spaghetti,setSpaghetti] = useState(0);
  const [maggi,setMaggi] = useState(0);
  const [nutella,setNutella] = useState(0);
  const [item, setItem] = useState([]);

  const items = [{name: "coke", price: 30, item_id: 1, img: "coke_png.png", qty: 0},{name: "lays", price: 20, item_id: 2, img: "lays_png.png", qty: 0},{name: "dairyMilk", price: 10, item_id: 3, img: "dairy_milk_png.png", qty: 0},{name: "spaghetti", price: 50, item_id: 4, img: "spaghetti_png.png", qty: 0},{name: "maggi", price: 30, item_id: 5, img: "maggi_png.png", qty: 0},{name: "nutella", price: 100, item_id: 6, img: "nutella_png.png", qty: 0}]

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

  // useEffect(() => {
  //   if(!auth.isAuthenticated) {
  //     history.push("/auth/login")
  //   }
  // },[auth.isAuthenticated])

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
      cart.push({name: "Chocolate", price: item.filter(i => i.name==="Chocolate")[0].price, quantity: dairy, id: item.filter(i => i.name==="Chocolate")[0]._id})
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
    console.log(cart);
    AddtoCart({data: cart, username: localStorage.getItem('username')})
  }

    return (
      <>
        <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
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
                        <img alt="..." src={require(`assets/img/items/${item.filter(i => i.name==="Chocolate")[0].name}_png.png`)} style={{width: "170px", height: "100px"}}/>
                      </span>
                    </div>
                    <div className="col-4 col-md-5 col-sm-8">
                      <CardTitle tag="h3"
                      className="text-uppercase text-muted mb-0">
                      {item.filter(i => i.name==="Chocolate")[0].name}
                      </CardTitle>
                      <h5>{item.filter(i => i.name==="Chocolate")[0].stock > 0 ? "In Stock" : "Out of Stock"}</h5>
                      <h4>Price: {item.filter(i => i.name==="Chocolate")[0].price}</h4>
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
          {item.length>0 && <Container fluid>
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
          </Container>}
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
  cartItem: state.cartItem,
  auth: state.auth
})

export default connect(mapsStateToProps, {getItems, AddtoCart, login})(Header);
