const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null,
  error: null,
  msg: '',
  item: null
};
export default (state = initialState, action) => {
  switch (action.type) {
    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        msg: action.payload,
      };
    case 'LOGIN_SUCCESS':
      localStorage.setItem(
        'username', action.payload.username
      )
      localStorage.setItem(
        'password', action.payload.password
      )
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        msg: action.payload.message,
        item: action.payload.items
      };
    case 'SIGNUP_ERROR':
    case 'AUTH_ERROR':
    case 'LOGIN_ERROR':
    case 'LOGOUT':
      localStorage.removeItem(
        'username'
      )
      localStorage.removeItem(
        'password'
      )
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload,
        items: null
      };
    case 'CLEAR_ERROR':
      return {
        ...state,
        error: null,
      };
    case 'CLEAR_MSG':
      return {
        ...state,
        msg: '',
      };
    case 'USER_LOADED':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        loading: false,
      };
    default:
      return state;
  }
};
