import axios from "axios";

export const axiosInstance= axios.create({
    baseURL : "https://blog-backend-xtw8.onrender.com/api/"
});