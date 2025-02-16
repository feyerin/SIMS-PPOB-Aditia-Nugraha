import axios from "../../utils/axios";

export const registerUser = (data) => async (dispatch) => {
  try {
    const response = await axios.post("/registration", data);
    dispatch({ type: "REGISTER_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "REGISTER_FAILURE", payload: error.response.data });
  }
};