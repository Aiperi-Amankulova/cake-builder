import axios from "axios";

const instance = axios.create({
  baseURL: "https://cake-builder-4eb9c.firebaseio.com",
});

export default instance;
