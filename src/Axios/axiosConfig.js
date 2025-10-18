import axios from "axios";
const axiosinstance = axios.create({
  // baseURL: "http://localhost:5000/api",
  baseURL: "https://icu-forum.onrender.com/api",
});
export default axiosinstance;
