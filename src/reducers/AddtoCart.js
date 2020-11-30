const initialState = {
    cart: null,
    items: null,
    user: null,
    customer: null,
    user_cart: null,
    total: null,
    user_orders: null
}

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_TO_CART" : 
            return {...state, cart: action.payload}
        case "SET_ITEMS": 
            return {...state, items: action.payload}
        case "SET_PROFILE":
            return {...state, user: action.payload['user'], customer: action.payload['customer']}
        case "CLEAR_DATA": 
            return {cart: null, items: null, user: null, customer: null}
        case "SET_CART": 
        case "REMOVE_ITEM": 
            return {...state, user_cart: action.payload['user_cart'], total: action.payload['total']}
        case "PLACE_ORDER": 
        case "GET_ORDERS":
            return {...state, user_cart: null, total: null, user_orders: action.payload['user_orders']}
        default: 
            return state
    }
}; 

export default cartReducer;