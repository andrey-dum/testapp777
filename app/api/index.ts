import axiosInstance from "@/config/axios";
import { Post } from "@/types";

export const postsApi = {
  async getPosts() {
    const res = await axiosInstance.get<Post[]>("/posts");
    return res.data;
  },
  async getPost(id: string) {
    const res = await axiosInstance.get<Post>(`/posts/${id}`);
    return res.data;
  },
};
