const initialState = {
    status: null,
    message: null,
    data: {},
    loading: false,
    error: false
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case "LOGIN_REQUEST":
        return { ...state, 
          loading: true,
          error: false,
        };
        
      case "LOGIN_SUCCESS":
        return {
          ...state,
          loading: false,
          status: action.payload.status,
          message: action.payload.message,
          data: action.payload.data,
          error: false,
        };
  
      case "LOGIN_FAILURE":
        return { 
            ...state,
            loading: false,
            status: action.payload.status,
            message: action.payload.message,
            data: action.payload.data,
            error: true,
        };
  
      case "LOGOUT":
        return { 
            ...state, 
            status: null,
            message: null,
            data: {}, 
        };
  
      default:
        return state;
    }
  };
  
  export default authReducer;
  