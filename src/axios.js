import axios from "axios";

const instance = axios.create({
  baseUrl: "http://localhost:5001/clone-c905e/us-central1/api",
});

export default instance;
