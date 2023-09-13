import http from "./httpService";
import environment from "../environments/environment";



const UserOracleService = {

    async addUser(newUser,dataBase) {
      return await http.post(environment.apiOracleUser + "addUser", {newUser,dataBase});
    },

    async getAllUsers() {
        return await http.get(environment.apiOracleUser  + "getAllUsers");
      },
  
    async UpdateUser(newUser) {
      return await http.put(environment.apiOracleUser  + "updateUser", newUser);
    },
  
  }
  
  export default UserOracleService;