import axios from "axios";

const jwt = document.cookie.split(";").find((cookie) => cookie.includes("jwt"));

export const api = axios.create({
  baseURL: "http://localhost:3000/api/v1/",

  headers: {
    Authorization: "Bearer " + jwt?.split("=")[1],
  },
});
