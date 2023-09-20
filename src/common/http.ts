import axios from "axios";

const axiosClient = axios.create({
	baseURL: "https://strapi-production-4fb6.up.railway.app/api",
});

export default axiosClient;
