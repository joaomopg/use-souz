import { api } from "./api";

import type {
  Categoria
} from "../types/Categoria";

export async function getCategorias():
Promise<Categoria[]> {
  const response =
    await api.get<Categoria[]>(
      "/categories"
    );

  return response.data;
}