import React, { Fragment } from 'react'
import {connect} from "react-redux"
import {Card, CardBody} from "reactstrap"

const OrderCard = ({data}) => {
    return (
        <div className="mb-4">
        <Card className="card-stats mb-4 mb-xl-0 border border-primary">
                        <CardBody>
                        {data.items.map((i) => <Fragment><h1 className="text-uppercase text-muted mb-0">
                        {i.name}
                    </h1>
                    <p>Quantity: {i.quantity}</p>
                    </Fragment>)}
                    <h4 className="ml-1">Total Price: {data.total}</h4>
                        </CardBody>
                    </Card>
        </div>
    )
}

export default connect(null, null)(OrderCard);
