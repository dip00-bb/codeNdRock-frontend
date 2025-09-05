import axios from "axios";

const axiosPublic = axios.create({
  baseURL: 'https://code-nd-rock-backend.vercel.app',
});

export default axiosPublic;