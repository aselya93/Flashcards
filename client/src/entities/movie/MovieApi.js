import { axiosInstance } from "../../shared/lib/axiosInstance";

export default class MovieApi {
  static async getMovies() {
    try {
      const { data } = await axiosInstance.get("/movies");
      return data;
    } catch (error) {
      return error.response.data;
    }
  }

  static async getMovieById(id) {
    try {
      const { data } = await axiosInstance.get(`/movies/${id}`);
      return data;
    } catch (error) {
      return error.response.data;
    }
  }

  static async createMovie(newMovie) {
    try {
      const { data } = await axiosInstance.post("/movies", newMovie);
      return data;
    } catch (error) {
      return error.response.data;
    }
  }

  static async deleteMovie(id) {
    try {
      const { data } = await axiosInstance.delete(`/movies/${id}`);
      return data;
    } catch (error) {
      return error.response.data;
    }
  }

  static async updateMovie(id, updateMovie) {
    try {
      const { data } = await axiosInstance.put(`/movies/${id}`, updateMovie);
      return data;
    } catch (error) {
      return error.response.data;
    }
  }
}
