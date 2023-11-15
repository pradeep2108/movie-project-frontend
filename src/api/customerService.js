import http from "./axiosConfig";

const login = (data) => {
  return http.post("/public/login", data);
};

const CustomerService = {
  login,
};

export default CustomerService;
