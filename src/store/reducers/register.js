const initialState = {
  data: null,
  message: "",
  status: 0,
  loading: false
};
  
const registerReducer = (state = initialState, action) => {
    switch (action.type) {
      case "REGISTER_PENDING":
        return { ...state, loading: true };
      case "REGISTER_SUCCESS":
        return { ...state, 
          loading: false, 
          data: action.payload.data,
          message: action.payload.message,
          status: action.payload.status
        };
      case "REGISTER_FAILURE":
        return { ...state, 
          loading: false, 
          data: action.payload.data,
          message: action.payload.message,
          status: action.payload.status
        };
      default:
        return state;
    }
};
  
export default registerReducer;
  