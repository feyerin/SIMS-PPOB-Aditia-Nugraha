import axios from "../../utils/axios";

export const getBalance = () => async (dispatch) => {
    try {
        const response = await axios.get("/balance");
        dispatch({ type: "GET_BALANCE_SUCCESS", payload: response.data });
    } catch (error) {
        dispatch({
            type: "GET_BALANCE_FAILURE",
            payload: error.response.data,
        });
    }
};
