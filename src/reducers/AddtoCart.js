const initialState = {
    cart: null,
    items: null,
    user: null,
    customer: null,
    user_cart: null,
    total: null,
    user_orders: null,
    message: null
}

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_TO_CART" : 
            return {...state, cart: action.payload, message: action.payload.message}
        case "SET_ITEMS": 
            return {...state, items: action.payload}
        case "SET_PROFILE":
            return {...state, user: action.payload['user'], customer: action.payload['customer']}
        case "CLEAR_DATA": 
            return {cart: null, items: null, user: null, customer: null}
        case "SET_CART": 
        case "REMOVE_ITEM": 
            return {...state, user_cart: action.payload['user_cart'], total: action.payload['total'], message: action.payload.message}
        case "PLACE_ORDER": 
            return {...state, user_cart: null, total: null, user_orders: action.payload['user_orders'], message: action.payload.message}
        case "GET_ORDERS":
            return {...state, user_cart: null, total: null, user_orders: action.payload['user_orders']}
        case "CLEAR_MESSAGE": 
            return {...state, message: null}
        default: 
            return state
    }
}; 

export default cartReducer;