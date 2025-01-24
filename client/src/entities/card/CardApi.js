import { axiosInstance } from "../../shared/lib/axiosInstance";

export default class CardApi {
  static async getCardsByIdTopic(topicId) {
    try {
        const response = await axiosInstance.get(`/cards?topicId=${topicId}`);
        return response
    } catch (error) {
        return error.response.data;
    }
  }
}
