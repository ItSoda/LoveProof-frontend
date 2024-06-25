import axios from "axios";
import { jwtDecode } from "jwt-decode";


const apiEndpoint = "/api/auth";

export async function login(email: string, password: string) {
  const { data: jwt } = await axios.post(`${apiEndpoint}/login`, { email, password });
  localStorage.setItem("token", jwt);
}

export async function register(username: string, email: string, gender: string, password: string) {
  await axios.post(`${apiEndpoint}/register`, { username, email, gender, password });
}

export function logout() {
  localStorage.removeItem("token");
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem("token") || "";
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export function getJwt() {
  return localStorage.getItem("token");
}

axios.defaults.headers.common["x-auth-token"] = getJwt();