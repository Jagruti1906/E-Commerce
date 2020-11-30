import React, {useEffect} from 'react';
import Navbars from "../../components/Navbars/Navbars"
import OrderCard from "./OrderCard";
import { Card, CardBody, CardTitle, Container, Row, Button } from "reactstrap";
import {connect} from "react-redux"
import {getOrders} from "../../actions/AddtoCart"
import {login} from "../../actions/auth"

const Orders = ({getOrders, login, cartItem, history}) => {

    useEffect(() => {
        if(localStorage.getItem('username')) {
          getOrders({
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

    return (
        <div>
            <Navbars />
            <h1 className="text-uppercase m-4">Orders</h1>
            <div className="header-body ml-2 mr-6 mt-4 mb-4">
                <Container fluid>
                    <Card className="card-stats mb-4 mb-xl-0 border border-primary">
                        <CardBody>
                            {cartItem.user_orders && cartItem.user_orders.map((order) => <OrderCard data = {order}/>)}
                        </CardBody>
                    </Card>
                </Container>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    auth: state.auth,
    cartItem: state.cartItem
})

export default connect(mapStateToProps, {getOrders, login})(Orders);
