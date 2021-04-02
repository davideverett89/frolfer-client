import axios from "axios";
import JwtService from "@/common/jwt.service";
import { API_URL } from "@/common/config";

const ApiService = {
    init: () => {
        axios.defaults.baseURL = API_URL;
    }, 

    setHeaders: () => {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Token ${JwtService.getToken()}`;
    },
  
    query: async (resource, params) => {
      try {
        return await axios.get(resource, params);
      } catch (error) {
        throw new Error(`The following error occurred while fetching: ${error}`);
      }
    },
  
    get: async (resource, slug = "") => {
      try {
        return await axios.get(`${resource}${slug === "" ? '' : '/'}${slug}`);
      } catch (error) {
        throw new Error(`The following error occurred while fetching: ${error}`);
      }
    },
  
    post: async (resource, payload) => {
      try {
        return await axios.post(`${resource}`, payload);
      } catch (error) {
        throw new Error(`The following error occurred while posting: ${error}`)
      }
    },
  
    update: async (resource, slug, payload) => {
      try {
        return await axios.put(`${resource}/${slug}`, payload);
      } catch (error) {
        throw new Error(`The following error occurred while updating: ${error}`)
      }
    },
  
    put: async (resource, payload) => {
      try {
        return await axios.put(`${resource}`, payload);
      } catch (error) {
        throw new Error(`The following error occurred while putting: ${error}`)
      }
    },
  
    delete: async (resource) => {
      try {
        return await axios.delete(resource);
      } catch (error) {
        throw new Error(`The following error occurred while deleting: ${error}`);
      }
    }
};
  
export default ApiService;

export const AuthenticationService = {
    login: async (credentials) => {
      try {
      const { data } = await ApiService.post('login', credentials);
      if ("valid" in data && data.valid && "token" in data) {
        JwtService.saveToken(data.token);
      }
      return data;
    } catch (error) {
      throw new Error(`The following error occurred while logging in: ${error}`);
    }
    },
    register: async (credentials) => {
      try {
        const { data } = await ApiService.post('register', credentials);
        if ("token" in data) {
          JwtService.saveToken(data.token);
        }
      } catch (error) {
        throw new Error(`The following error occurred while registering: ${error}`);
      }
    },
    logout: () => {
      JwtService.destroyToken();
    },
    isAuthenticated: () => JwtService.getToken() !== null
}

export const ScoreCardService = {
  getAll: async () => {
    try {
      const { data } = await ApiService.get('home');
      console.log(data);
      return data;
    } catch (error) {
      throw new Error(`The following error occurred while getting all score cards: ${error}`)
    }
  }
}