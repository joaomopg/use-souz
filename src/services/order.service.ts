import { api } from "./api";

import type {
    Order
} from "../types/Order";

export interface CreateOrderPayload {

    idempotencyKey: string;

    cliente: {
        nome: string;
        email: string;
        telefone: string;
        cpf: string;
    };

    entrega: {
        cep: string;
        rua: string;
        numero: string;
        complemento?: string;
        bairro: string;
        cidade: string;
        estado: string;
        observacoes?: string;
    };

    frete: {
        optionId: string;
    };
    
    pagamento: {
        metodo: "PIX" | "CARTAO";
    };

    itens: {
        produtoVariacaoId: number;
        quantidade: number;
    }[];
}

export async function createOrder(
    payload: CreateOrderPayload
): Promise<Order> {

    const response =
        await api.post<Order>(
            "/orders",
            payload
        );

    return response.data;
}