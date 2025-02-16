const initialState = {
    status: 0,
    loading: false,
    message: "",
    data: {
        balance: 0
    }
  };
  
  const balanceReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_BALANCE_PENDING":
        return { ...state, loading: true };

      case "GET_BALANCE_SUCCESS":
        return { ...state, 
            status: action.payload.status,
            loading: false,
            message: action.payload.message,
            data: action.payload.data,
        };
  
      case "GET_BALANCE_FAILURE":
        return { ...state, 
            status: action.payload,
            loading: false,
            message: action.payload,
            data: action.payload,
        };

      default:
        return state;
    }
  };
  
  export default balanceReducer;
  