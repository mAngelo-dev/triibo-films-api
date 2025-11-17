import axios from "axios";

const axiosClient = axios.create({
  baseURL: `http://www.omdbapi.com/`
})

export default axiosClient;