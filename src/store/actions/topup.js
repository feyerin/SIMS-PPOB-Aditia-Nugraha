import axios from "../../utils/axios";

export const postTopup = (data) => async (dispatch) => {
    try {
        const response = await axios.post("/topup", data);
        dispatch({ type: "TOPUP_SUCCESS", payload: response.data });
        return response;
    } catch (error) {
        dispatch({
            type: "TOPUP_FAILURE",
            payload: error.response.data,
        });
    }
};
