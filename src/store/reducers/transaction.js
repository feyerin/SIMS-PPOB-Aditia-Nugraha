const initialState = {
    status: null,
    loading: false,
    message: null,
    data: { 
      limit: 5,
      offset: 0,
      records: []
    }
  };
  
  const TransactionReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_TRANSACTION_PENDING":
        return { 
          ...state, 
          status: null,
          loading: true,
          message: "",
          data: {
            limit: 5,
            offset: 0,
            records: [],
          }
        };

      case "GET_TRANSACTION_SUCCESS":
        return { ...state, 
            status: action.payload.status,
            loading: false,
            message: action.payload.message,
            data: action.payload.data,
        };
  
      case "GET_TRANSACTION_FAILURE":
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
  
  export default TransactionReducer;
  