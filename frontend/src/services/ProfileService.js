import axios from "axios";

const PROFILE_API_BASE_URL = "http.//localhost:8080/api/v1/profiles";

class ProfileService{

    getProfiles() {
        return axios.get(PROFILE_API_BASE_URL);
    }

    createProfile(profile) {
        return axios.post(PROFILE_API_BASE_URL,profile);
    }

}
export default new ProfileService();
