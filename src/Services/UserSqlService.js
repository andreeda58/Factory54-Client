import http from "./httpService";
import environment from "../environments/environment";
const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    'Content-Type': 'application/json',
  }
};
const UserSqlService = {

  async addUser(newUser) {
    return await http.post(environment.apiSqlUser + "addUser", newUser);
  },

  async getAllUsers() {
      return await http.get(environment.apiSqlUser  + "getAllUsers",config);
  },

}

export default UserSqlService;