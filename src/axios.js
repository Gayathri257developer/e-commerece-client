import axios from "axios";

const instance = axios.create({
    baseURL: "https://e-commerece-project.onrender.com/"
})

export default instance;