import React, {useState, useEffect, Fragment} from 'react';
import {connect} from "react-redux";
import { Card, CardBody, CardTitle, Row, Col, FormGroup, Input, Button } from "reactstrap";
import {AddtoCart} from "../../actions/AddtoCart"

const Category = ({item, AddtoCart}) => {

    const [state, setState] = useState(null);

    useEffect(() => {
        var arr={};
        item.items.map(i => {
            arr[i.name]= 0
        })
        setState({
            ...arr
        })
    }, [])

    useEffect(() => {
        console.log(state)
    }, [state])

    const handleClick = (e) => {
        e.preventDefault();
        const cart = [];
        var i=0;
        for(i = 0; i< item.items.length; i++) {
            if(parseInt(state[`${item.items[i].name}`]) > 0) {
                cart.push({name: item.items[i].name, price: item.items[i].price, quantity: parseInt(state[`${item.items[i].name}`]), id: item.items[i]._id})
            }
        }
        AddtoCart({data: cart, username: localStorage.getItem('username')});
        var arr={};
        item.items.map(i => {
            arr[i.name]= 0
        })
        setState({
            ...arr
        })
    }

    return (
        <Fragment>
        <div className="text-center m-4">
        <h3>Category Name: {item.name}</h3>
    </div>
            <Row>{state && item.items.map(i => <Col lg="6" xl="4" className="mb-3 ml-3">
            <Card className="card-stats mb-4 mb-xl-0">
            <CardBody>
                <Row>
                <div className="col-8 col-md-7 col-sm-4">
                <span>
                <img alt="..." src={require(`assets/img/items/${i.name}_png.png`)} style={{width: "140px", height: "140px"}}/>
                </span>
            </div>
            <div className="col-4 col-md-5 col-sm-8">
                <CardTitle tag="h3"
                className="text-uppercase text-muted mb-0">
                    {i.name}
                </CardTitle>
                <h5>{i.stock > 0 ? "In Stock" : "Out of Stock" }</h5>
                <h4>Price: {i.price}</h4>
                <div>
                <FormGroup>
                {state && <Input
                type="number" value={state[`${i.name}`]} onChange={e => setState({...state, [`${i.name}`] : e.target.value})}
                />}
            </FormGroup>
                </div>
            </div>
                </Row>
            </CardBody>
            </Card>
        </Col>)}
        </Row>
            
            <div className="text-center">
          <Button color="primary" type="button" className="mt-4" onClick={handleClick}>
            Add to Cart
          </Button>
          </div>
        </Fragment>
    )
}

export default connect(null, {AddtoCart})(Category);
