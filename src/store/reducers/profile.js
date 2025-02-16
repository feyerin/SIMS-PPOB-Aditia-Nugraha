const initialState = {
    status: 0,
    loading: false,
    message: "",
    data: {}
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_PROFILE_PENDING":
        return { ...state, loading: true };

      case "GET_PROFILE_SUCCESS":
        return { ...state, 
            status: action.payload.status,
            loading: false,
            message: action.payload.message,
            data: action.payload.data,
        };
  
      case "GET_PROFILE_FAILURE":
        return { ...state, 
            status: action.payload,
            loading: false,
            message: action.payload,
            data: action.payload,
        };
  
      case "PUT_PROFILE_PENDING":
        return { ...state, 
            status: null,
            loading: true,
            message: "",
            data: {},
         };

      case "PUT_PROFILE_SUCCESS":
        return { ...state, 
            status: action.payload.status,
            loading: false,
            message: action.payload.message,
            data: action.payload.data,
        };
  
      case "PUT_PROFILE_FAILURE":
        return { ...state, 
            status: action.payload,
            loading: false,
            message: action.payload,
            data: action.payload,
        };
  
      case "PUT_UPDATE_PROFILE_PENDING":
        return { ...state, 
            status: null,
            loading: true,
            message: "",
            data: {},
         };

      case "PUT_UPDATE_PROFILE_SUCCESS":
        return { ...state, 
            status: action.payload.status,
            loading: false,
            message: action.payload.message,
            data: action.payload.data,
        };
  
      case "PUT_UPDATE_PROFILE_FAILURE":
        return { ...state,
          status: action.payload.status,
          loading: false,
          message: action.payload.message,
        }
      default:
        return state;
    }
  };
  
  export default authReducer;
  