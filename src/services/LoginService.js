import axios from "axios";
class LoginService {
  loginUser(emp) {
    console.log(emp);
    return axios.post("http://localhost:9000/api/" + "login", emp);
  }
  logoutUser() {
    return axios.get("http://localhost:9000/api/" + "logout");
  }
}
export default new LoginService();
