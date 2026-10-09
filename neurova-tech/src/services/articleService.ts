import api from "../api/articleApi";

export const getArticles = async () => {
  const response = await api.get("/articles");
  return response.data;
};

export const getArticleById = async (id: string) => {
  const response = await api.get(`/articles/${id}`);
  return response.data;
};