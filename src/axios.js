import axios from "axios";

export const BASE_URL = "https://7b84-156-181-98-161.ngrok-free.app";
export const API_URL = BASE_URL.concat("/tafseer");

export const user_data =
  JSON.parse(localStorage.getItem("first_trail")) || null;

const apiInstance = axios.create({
  baseURL: API_URL,
});

apiInstance.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
apiInstance.defaults.headers.post["Access-Control-Allow-Credentials"] = "true";
apiInstance.defaults.headers.post["Access-Control-Allow-Headers"] =
  "DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization";
apiInstance.defaults.headers.post["Access-Control-Allow-Methods"] =
  "GET,POST,PUT,PATCH,DELETE,OPTIONS";
apiInstance.defaults.headers.post["Content-Type"] = "application/json";

export { apiInstance };
