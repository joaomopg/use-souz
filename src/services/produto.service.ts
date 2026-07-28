import { api } from './api';

interface GetProdutosParams {
    categoria?: string;
    ordenacao?: string,
}

export async function getProdutos(params?: GetProdutosParams) {
    const response = await api.get('/produtos', {
        params,
    });

    return response.data;
}

export async function getProdutoPorId(id: string) {
    const response = await api.get(`/produtos/${id}`);

    return response.data;
}