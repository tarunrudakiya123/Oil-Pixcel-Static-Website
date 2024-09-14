import axios from "axios";

class ApiHelper {
  constructor() {
    this.baseURL = process.env.REACT_APP_BACKEND_URL;
  }

  ProductDetails() {
    return axios.get(`${this.baseURL}/admin/getproduct`);
  }
}

const apiHelper = new ApiHelper();
export default apiHelper;
