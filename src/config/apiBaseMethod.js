import axios from "axios";

let apiHandle = axios.create({
  baseURL: "",
});

let Get = (endPoint) => {
  return apiHandle.get(endPoint);
};
export default Get;