import axios from "axios";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/auth`,
  withCredentials: true
});

class AuthService {
  
  errorHandler = async (e) => {
   console.error("AUTH API ERROR");
   console.error(e);
   throw e;
 }

  login = async user => {
   return await instance.post("/login", user).then(response => response.data)
   .catch(AuthService.errorHandler)
 };

  logout = async () => {
   return await instance.get("/logout")
   .then(response => response.data)
   .catch(AuthService.errorHandler)
 };
}

export default AuthService;