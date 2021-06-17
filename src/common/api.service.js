import axios from "axios";
import JwtService from "@/common/jwt.service";
import { API_URL } from "@/common/config";

const ApiService = {
    init: () => {
        axios.defaults.baseURL = API_URL;
    }, 

    setHeader: () => {
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
  
    get: async (resource, slug = '') => {
      try {
        return await axios.get(`${resource}${slug === '' ? '' : '/'}${slug}`);
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
        return data;
      } catch (error) {
        throw new Error(`The following error occurred while registering: ${error}`);
      }
    },
    logout: () => {
      JwtService.destroyToken();
    },
    isAuthenticated: () => JwtService.getToken() !== null && JwtService.getToken() !== undefined
}

export const ScorecardService = {
  getAll: async () => {
    try {
      const { data } = await ApiService.get('score_cards');
      return data;
    } catch (error) {
      throw new Error(`The following error occurred while getting all score cards: ${error}`);
    }
  },
  createScorecard: async (payload) => {
    try {
      const { data } = await ApiService.post('score_cards', payload);
      return data;
    } catch (error) {
      throw new Error(`The following error occurred while creating a score card`);
    }
  }
}

export const CourseService = {
  getAll: async () => {
    try {
      const { data } = await ApiService.get('courses');
      return data;
    } catch(error) {
      throw new Error(`The following error occurred while getting all courses: ${error}`);
    }
  }
}

export const PlayerService = {
  getAll: async () => {
    try {
      const { data } = await ApiService.get('players');
      return data;
    } catch (error) {
      throw new Error(`The following error occurred while getting all score cards: ${error}`);
    }
  }
}

export const HoleService = {
  getAll: async () => {
    try {
      const { data } = await ApiService.get('holes');
      return data;
    } catch (error) {
      throw new Error(`The following error occurred while getting all holes: ${error}`);
    }
  },
  getHolesByCourseId: async (params) => {
    try {
      const { data } = await ApiService.query('holes', { params: params });
      return data;
    } catch(error) {
      throw new Error(`The following error occurred while getting holes by course_id: ${error}`);
    }
  }
}

export const RoundService = {
  createRound: async (payload) => {
    try {
      const { data } = await ApiService.post('rounds', payload);
      return data;
    } catch(error) {
      throw new Error(`The following error occurred while creating a round: ${error}`);
    }
  }
}