import { IFormLink } from "../types/links";
import { instance } from "./index";

export const LinksApi = {

  async getAllLinks() {
    const { data } = await instance.get('/links');
    return data;
  },

  async addLink(dto: IFormLink) {
    const { data } = await instance.post(`/links`, dto);
    return data;
  },

  async getOneLink(id: string) {
    const { data } = await instance.get(`/links/${id}`);
    return data;
  },

  async updateLink(dto: IFormLink, id: number) {
    const { data } = await instance.put(`/links/${id}`, dto);
    return data;
  },

  async removeLink(id: number) {
    const { data } = await instance.delete(`/links/${id}`);
    return data;
  }
};