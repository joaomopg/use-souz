import { api } from "./api";


export async function getCategorias() {
    const response = await api.get(
        '/produtos/categorias'
    );
    
    return response.data;
}