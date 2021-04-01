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
  
    query: (resource, params) => {
      return axios.get(resource, params)
        .catch(error => {
            throw new Error(`The following error occurred while fetching: ${error}`);
        });
    },
  
    get: (resource, slug = "") => {
      return axios.get(`${resource}/${slug}`)
        .catch(error => {
            throw new Error(`The following error occurred while fetching: ${error}`);
        });
    },
  
    post: (resource, payload) => {
      return axios.post(`${resource}`, payload);
    },
  
    update: (resource, slug, payload) => {
      return axios.put(`${resource}/${slug}`, payload);
    },
  
    put: (resource, payload) => {
      return axios.put(`${resource}`, payload);
    },
  
    delete: (resource) => {
      return axios.delete(resource)
        .catch(error => {
            throw new Error(`The following error occurred while deleting: ${error}`);
        });
    }
};
  
export default ApiService;

export const AuthenticationService = {
    login: (credentials) => {
        return ApiService.post('login', credentials)
            .then(response => {
                if ("valid" in response && response.valid && "token" in response) {
                    JwtService.saveToken(response.token);
                }
            })
            .catch(error => {
                throw new Error(`The following error occurred while logging in: ${error}`)
            });
    },
    register: (credentials) => {
        return ApiService.post('register', credentials)
            .then(response => {
                if ("token" in response) {
                    JwtService.saveToken(response.token);
                }
            })
            .catch(error => {
                throw new Error(`The following error occurred while registering: ${error}`)
            })
    }
}