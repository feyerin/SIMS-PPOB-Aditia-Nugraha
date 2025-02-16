import axios from "../../utils/axios";

export const authLogin = (data) => async (dispatch) => {
  dispatch({ type: "LOGIN_REQUEST" });
  try {
    const response = await axios.post("/login", data);
    dispatch({ 
      type: "LOGIN_SUCCESS", 
      payload: response.data
    });
    localStorage.setItem("token", response.data.data.token);
  } catch (error) {
    dispatch({
      type: "LOGIN_FAILURE",
      payload: error.response.data
    });
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: "LOGOUT" });
};
