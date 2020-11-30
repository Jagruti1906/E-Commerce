import React, { Fragment } from 'react'
import {connect} from "react-redux"

const OrderCard = ({data}) => {
    return (
        <div>
            {data.items.map((i) => <Fragment><h1 className="text-uppercase text-muted mb-0">
            {i.name}
        </h1>
        <p>Quantity: {i.quantity}</p>
        </Fragment>)}
        <h4 className="m-4">Total Price: {data.total}</h4>
        </div>
    )
}

export default connect(null, null)(OrderCard);
