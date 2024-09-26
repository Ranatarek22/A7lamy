import axios from "axios";

export const BASE_URL = "https://7b84-156-181-98-161.ngrok-free.app";
export const API_URL = BASE_URL.concat("/tafseer");

export const user_data =
  JSON.parse(localStorage.getItem("first_trail")) || null;

const apiInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
 
  },
});


export { apiInstance };
