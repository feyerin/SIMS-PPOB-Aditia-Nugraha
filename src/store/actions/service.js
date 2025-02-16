import axios from "../../utils/axios";

export const getService = () => async (dispatch) => {
    try {
        const response = await axios.get("/services");
        dispatch({ type: "GET_SERVICE_SUCCESS", payload: response.data });
    } catch (error) {
        dispatch({
            type: "GET_SERVICE_FAILURE",
            payload: error.response.data,
        });
    }
};
