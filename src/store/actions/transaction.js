import axios from "../../utils/axios";

export const getTransaction = (offset, limit) => async (dispatch) => {
    try {
        const response = await axios.get(`/transaction/history?offset=${offset}&limit=${limit}`);
        dispatch({ type: "GET_TRANSACTION_SUCCESS", payload: response.data });
        return response;
    } catch (error) {
        dispatch({
            type: "GET_TRANSACTION_FAILURE",
            payload: error.response.data,
        });
    }
};
