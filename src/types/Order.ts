export interface OrderItem {
    id: number;
    produtoId: number;
    produtoVariacaoId: number;

    nomeProduto: string;
    sku: string;

    atributos: Record<string, string>;

    imagemUrl: string | null;

    quantidade: number;

    precoUnitario: number;
    precoTotal: number;
}

export interface Order {
    id: number;
    codigo: string;

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

    pagamento: {
        metodo: "PIX" | "CARTAO";
        status:
        | "PENDENTE"
        | "PAGO"
        | "FALHOU"
        | "CANCELADO"
        | "REEMBOLSADO";

        provider: string | null;
        externalId: string | null;
    };

    envio: {
        provider: string | null;

        service: string | null;

        optionId: string | null;

        deliveryTimeDays:
        number | null;
    };
    
    statusPedido:
    | "PENDENTE"
    | "PAGO"
    | "PROCESSANDO"
    | "ENVIADO"
    | "ENTREGUE"
    | "CANCELADO";

    subtotal: number;
    frete: number;
    total: number;

    itens: OrderItem[];
}