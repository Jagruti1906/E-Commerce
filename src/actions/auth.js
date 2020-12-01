import axios from 'axios';
import { formatDiagnostic } from 'typescript';

export const signup = ({ formData }) => async (dispatch) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
    };
    const res = await axios.post('/register', formData, {
      headers: headers,
    });
    console.log(res.data);

    dispatch({
      type: 'SIGNUP_SUCCESS',
      payload: "Sign up successful",
    });
  } catch (err) {
    dispatch({
      type: 'SIGNUP_ERROR',
      payload: err.response.data.msg,
    });
  }
};

export const loadUser = () => async (dispatch) => {
  // @todo - load token into global header
  console.log('Load user');
  try {
    const res = await axios.get('/login');
    console.log(res);
    dispatch({
      type: 'USER_LOADED',
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: 'AUTH_ERROR',
    });
  }
};

export const login = ({ formData }) => async (dispatch) => {
  const headers = {
    'Content-Type': 'application/json',
  };

  try {
    const res = await axios.post('/login', formData, {
      headers: headers,
    });
    console.log(res);
    if(res.data["message"]==="successful") {
      const endData = {
        ...formData,
        items: res.data['items'],
        message: res.data['message']
      }
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: endData,
      });
    }
    else {
    dispatch({
      type: 'LOGIN_ERROR',
      payload: res.data["message"],
    });
    }
  } catch (err) {
    
  }
};

export const clearMsg = () => async (dispatch) => {
  dispatch({
    type: 'CLEAR_MSG',
  });
};

export const clearError = () => async (dispatch) => {
  dispatch({
    type: 'CLEAR_ERROR',
  });
};

export const logout = () => async (dispatch) => {
  dispatch({
    type: 'LOGOUT'
  });
}