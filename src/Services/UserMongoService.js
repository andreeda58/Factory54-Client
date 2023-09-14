import http from "./httpService";
import environment from "../environments/environment";

const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    'Content-Type': 'application/json',
  }
};

const UserOracleService = {

    async addUser(newUser) {

      console.log(newUser);
      debugger
      return await http.post(environment.apiMongoDb + "addUser", newUser);
    },

    async getAllUsers() {
        return await http.get(environment.apiMongoDb  + "getAllUsers",config);
      },
  }
  
  export default UserOracleService;