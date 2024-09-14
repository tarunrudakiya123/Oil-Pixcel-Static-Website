import axios from "axios";

class ApiHelper {
  constructor() {
    this.baseURL = process.env.VITE_BACKEND_PATH;
  }

  ProductDetails() {
    return axios.get(`${this.baseURL}/admin/getproduct`);
  }
}

const apiHelper = new ApiHelper();
export default apiHelper;
