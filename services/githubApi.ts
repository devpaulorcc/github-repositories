import axios from "axios";

const gitHubApi = axios.create({
    baseURL: 'https://api.github.com/users/'
})

export default gitHubApi;