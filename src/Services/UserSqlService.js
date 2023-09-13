import http from "./httpService";
import environment from "../environments/environment";



const UserSqlService = {

    async addUser(newUser) {
      return await http.post(environment.apiSqlUser + "addUser", newUser);
    },

    async getAllUsers() {
        return await http.get(environment.apiSqlUser  + "getAllUsers");
      },
  
    async UpdateUser(newUser) {
      return await http.put(environment.apiSqlUser  + "updateUser", newUser);
    },
  
  }
  
  export default UserSqlService;