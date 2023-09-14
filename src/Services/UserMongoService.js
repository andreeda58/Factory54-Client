import http from "./httpService";
import environment from "../environments/environment";



const UserOracleService = {

    async addUser(newUser,dataBase) {
      return await http.post(environment.apiMongoDb + "addUser", {newUser,dataBase});
    },

    async getAllUsers() {
        return await http.get(environment.apiMongoDb  + "getAllUsers");
      },
  }
  
  export default UserOracleService;