import http from "./axiosConfig";

const login = (data) => {
  return http.post("/public/login", data);
};

const logout = () => {
  return http.get("/public/logoutsuccess");
};

const signup = (data) => {
  return http.post("/public/registeruser", data);
};

const CustomerService = {
  login,
  logout,
  signup,
};

export default CustomerService;
