import axios from "../../utils/axios";

export const getProfile = () => async (dispatch) => {
    try {
        const response = await axios.get("/profile");
        dispatch({ type: "GET_PROFILE_SUCCESS", payload: response.data });
    } catch (error) {
        dispatch({
            type: "GET_PROFILE_FAILURE",
            payload: error.response.data,
        });
    }
};

export const updateProfile = (data) => async (dispatch) => {
    try {
        const response = await axios.put("/profile/update", data);
        dispatch({ type: "PUT_PROFILE_SUCCESS", payload: response.data });
    } catch (error) {
        dispatch({
            type: "PUT_PROFILE_FAILURE",
            payload: error.response.data,
        });
    }
};

export const updateImageProfile = (data) => async (dispatch) => {
    try {
        const response = await axios.put("/profile/image", data);
        dispatch({ type: "PUT_UPDATE_PROFILE_SUCCESS", payload: response.data });
    } catch (error) {
        dispatch({
            type: "PUT_UPDATE_PROFILE_FAILURE",
            payload: error.response.data,
        });
    }
};