import { axiosInstance } from "../../shared/lib/axiosInstance";

export default class TopicApi {
  static async getAllTopic() {
    try {
      const { data } = await axiosInstance.get("/topics");

      return data

    } catch (error) {
      return error.response.data;
    }
  }
}
