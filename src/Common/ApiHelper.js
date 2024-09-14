import axios from "axios";

class ApiHelper {
  constructor() {
    this.baseURL = "https://localhost:5100";
  }

  ProductDetails() {
    return axios.get(`${this.baseURL}/admin/getproduct`);
  }
}

const apiHelper = new ApiHelper();
export default apiHelper;
