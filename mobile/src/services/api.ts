import axios from "axios";

export const api = axios.create({
  baseURL: "http://192.168.15.185:3333", // Sistema android requer IP no ambiente de desenvolvimento
});
