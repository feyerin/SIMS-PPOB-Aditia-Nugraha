const initialState = {
    data: null,
    message: "",
    status: 0,
    loading: false
  };
    
  const topupReducer = (state = initialState, action) => {
      switch (action.type) {
        case "TOPUP_PENDING":
          return { ...state, loading: true };
        case "TOPUP_SUCCESS":
          return { ...state, 
            loading: false, 
            data: action.payload.data,
            message: action.payload.message,
            status: action.payload.status
          };
        case "TOPUP_FAILURE":
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
    
  export default topupReducer;
    