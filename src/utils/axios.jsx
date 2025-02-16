import axios from 'axios';

const axiosInterceptors = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
});

// Add a request interceptor
axiosInterceptors.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem("token");
		config.headers.Authorization = `Bearer ${token}`;
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);
axiosInterceptors.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		if (error.response.data.status === 108) {
			localStorage.clear();
			window.location.href = "/login";
			console.log("interceptors", )
		}
		return Promise.reject(error);
	}
);


export default axiosInterceptors;
