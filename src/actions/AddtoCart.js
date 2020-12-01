import Axios from "axios"

export const AddtoCart = ({data, username}) => async dispatch => {
    const headers = {
        "Content-Type": "application/json"
    }
    var i;
    for(i=0;i<data.length;i++) {
        const response = await Axios.put("/", {
            username,
            item_id: data[i].id,
            name: data[i].name,
            quantity: data[i].quantity,
            price: data[i].price
        }, {headers: headers});
        console.log(response);
    }
    dispatch({type: "ADD_TO_CART", payload: {data, message: "Added to Cart"}});
}

export const getItems = () => async dispatch => {
    fetch("http://127.0.0.1:8000/")
      .then(res => res.json())
      .then(
        (result) => {
            console.log(result)
            dispatch({type: "SET_ITEMS", payload: result})
        },
        (error) => {
        }
      )
}

export const getProfile = ({username}) => async dispatch => {
    const headers = {
        "Content-Type": "application/json"
    }
    const getItem = await Axios.post("/admin/user-profile", {
        username
    }, {headers: headers})
    console.log(getItem)
    dispatch({type: "SET_PROFILE", payload: getItem.data})
}

export const clearData = () => async dispatch => {
    dispatch({type: "CLEAR_DATA"})
}

export const getCart = ({username}) => async dispatch => {
    const headers = {
        "Content-Type": "application/json"
    }
    const data = await Axios.post("/cart", {
        username
    }, {headers: headers})
    dispatch({type: "SET_CART", payload: data.data})
}

export const removeItem = ({username, item_id}) => async dispatch => {
    const headers = {
        "Content-Type": "application/json"
    }
    console.log(username);
    console.log(item_id)
    const data = await Axios.put("/cart", {
        username,
        item_id
    }, {headers: headers})
    dispatch({type: "REMOVE_ITEM", payload: data.data})
}

export const placeOrder = ({username}) => async dispatch => {
    const headers = {
        "Content-Type": "application/json"
    }
    console.log(username)
    const data = await Axios.put("/orders", {
        username
    }, {headers: headers})
    dispatch({type: "PLACE_ORDER", payload: data.data})
}

export const getOrders = ({username}) => async dispatch => {
    const headers = {
        "Content-Type": "application/json"
    }
    const data = await Axios.post("/orders", {
        username
    }, {headers: headers})
    dispatch({type: "GET_ORDERS", payload: data.data})
}

export const clearMsg = () => async dispatch => {
    dispatch({type: "CLEAR_MESSAGE"})
}