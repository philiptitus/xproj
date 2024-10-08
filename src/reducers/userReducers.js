// reducers/authReducers.js
import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
  } from '../constants/userConstants';
import { ACCOUNT_DELETE_FAIL, ACCOUNT_DELETE_REQUEST, ACCOUNT_DELETE_RESET, ACCOUNT_DELETE_SUCCESS, USER_DETAILS_FAIL, USER_DETAILS_REQUEST, USER_DETAILS_RESET, USER_DETAILS_SUCCESS } from '../constants/userConstants';
  
  export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_LOGIN_REQUEST:
        return { loading: true };
      case USER_LOGIN_SUCCESS:
        return { loading: false, userInfo: action.payload };
      case USER_LOGIN_FAIL:
        return { loading: false, error: action.payload };
      case USER_LOGOUT:
        return {};
      default:
        return state;
    }
  };
  
  export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_REGISTER_REQUEST:
        return { loading: true };
      case USER_REGISTER_SUCCESS:
        return { loading: false, signupInfo: action.payload };
      case USER_REGISTER_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  

  export const userDetailsReducer = (state = {user: {followers: [], following: []}}, action) =>{
    switch (action.type) {
        case USER_DETAILS_REQUEST:
            return { ...state, loading: true } 
        case USER_DETAILS_SUCCESS:
            return { loading: false, user: action.payload }     
        case USER_DETAILS_FAIL:
            return { loading: false, error:action.payload }
        case USER_DETAILS_RESET:
            return { user:  {} }
            
        default:
            return state
    
        
    }
} 


export const accountDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case ACCOUNT_DELETE_REQUEST:
      return { loading: true };
    case ACCOUNT_DELETE_SUCCESS:
      return { loading: false, success: true };
    case ACCOUNT_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case ACCOUNT_DELETE_RESET:
      return {};
    default:
      return state;
  }
};
