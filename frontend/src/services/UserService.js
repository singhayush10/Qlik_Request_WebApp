import axios from "axios";

const USER_API_BASE_URL = "http.//localhost:8080/api/v1/users";

class UserService{

    getUsers() {
        return axios.get(USER_API_BASE_URL);
    }

    addUsers(user) {
        return axios.post(USER_API_BASE_URL,user);
    }

    getUserById(staffNo) {
        return axios.get(USER_API_BASE_URL + '/' + staffNo);
    }

    updateUser(staffNo, user) {
        return axios.put(USER_API_BASE_URL + "/" + staffNo,user);
    }

}
export default new UserService();
