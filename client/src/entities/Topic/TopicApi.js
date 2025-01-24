import { axiosInstance } from "../../shared/lib/axiosInstance";

export default class TopicApi {
  static async getAllTopic() {
    try {
      const { data } = await axiosInstance.get("/topics");
console.log(1111111, data);

      return data

    } catch (error) {
      return error.response.data;
    }
  }
}
