import api from "../config/axiosConfig";

const loginApi = {
//   loginVendor: async (phone, password) => {
//     try {
//       const response = await api.post("/vendors/login", { phone, password });
//       console.log(response);
//       return response.data;
//     } catch (error) {
//       console.error("Login error:", error);
//       throw new Error(error.response?.data?.message || "Login failed. Please try again.");
//     }
//   },

  loginAdmin: async (phone, password) => {
    try {
      const response = await api.post("/admin/login", { phone, password });
      console.log(response);
      return response.data;
    } catch (error) {
      console.error("Admin login error:", error);
      throw new Error(error.response?.data?.message || "Login failed. Please try again.");
    }
  },
};

export default loginApi;
