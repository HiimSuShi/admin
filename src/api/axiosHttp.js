import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        "Content-type": "application/json"
    }
});
export const api = axios.create({
    baseURL: "https://enaoteam.herokuapp.com/",
    headers: {
        "Content-type": "application/json"
    }
});