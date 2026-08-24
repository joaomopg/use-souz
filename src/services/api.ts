import axios from "axios";

export const API_URL = "http://localhost:4000";

export const api = axios.create({
  baseURL: API_URL
});

export function montarUrlImagem(
  caminho: string | null | undefined
): string {
  if (!caminho) {
    return "";
  }

  if (
    caminho.startsWith("http://") ||
    caminho.startsWith("https://")
  ) {
    return caminho;
  }

  return `${API_URL}${caminho}`;
}