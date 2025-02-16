const initialState = {
    status: 0,
    loading: false,
    message: "",
    data: [{
        service_code: "",
        service_name: "",
        service_icon: "",
        service_tariff: 0
      }]
  };
  
  const serviceReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_SERVICE_PENDING":
        return { ...state, loading: true };

      case "GET_SERVICE_SUCCESS":
        return { ...state, 
            status: action.payload.status,
            loading: false,
            message: action.payload.message,
            data: action.payload.data,
        };
  
      case "GET_SERVICE_FAILURE":
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
  
  export default serviceReducer;
  