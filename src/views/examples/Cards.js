import React from 'react';
import { Card, CardBody, CardTitle, Container, Row, Button } from "reactstrap";
import {connect} from "react-redux"
import {removeItem} from "../../actions/AddtoCart"

const Cards = ({removeItem, data}) => {

    const handleClick = (e) => {
        e.preventDefault();
        removeItem({
            username: data.username,
            item_id: data.item_id
        })
    }

    return (
        <div className="header-body ml-6 mr-6 mt-4 mb-4">
            <Container fluid>
                <Card className="card-stats mb-4 mb-xl-0 border border-primary">
                    <CardBody>
                    <Row>
                        <div className="col-1 col-md-5 col-sm-7">
                            <span>
                            <img alt="..." src={require('assets/img/items/lays.png')} className="items-img"/>
                            </span>
                        </div>
                        <div className="col-11 col-md-7 col-sm-5">
                        <CardTitle tag="h1"
                        className="text-uppercase text-muted mb-0">
                            {data.name}
                        </CardTitle>
                        <h4>Price: {data.price}</h4>
                        <p>Quantity: {data.quantity}</p>
                        <Button color="primary" type="button" onClick={handleClick}>
                            Remove
                        </Button>
                        </div>
                    </Row>
                    </CardBody>
                </Card>
            </Container>
        </div>
    )
}

export default connect(null, {removeItem})(Cards);
