import axios, { AxiosInstance } from "axios";

export class Data {
  private axios: AxiosInstance;

  constructor() {
    this.axios = axios.create({
      baseURL: "http://localhost:3003",
    });
  }

  async getNotes() {
    const response = await this.axios.get("/notes");
    return response.data;
  }

  async createNote(note: string) {
    const response = await this.axios.post("/notes", { note });
    return response.data;
  }

  async deleteNote(id: string) {
    const response = await this.axios.delete(`/notes/${id}`);
    return response.data;
  }
}

const apiData = new Data();
export default apiData;
