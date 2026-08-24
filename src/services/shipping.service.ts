import {
    api
} from "./api";

export interface ShippingQuoteItem {
    productVariationId: number;
    quantity: number;
}

export interface ShippingOption {
    id: string;

    provider: string;

    service: string;

    name: string;

    price: number;

    deliveryTimeDays: number;
}

interface ShippingQuoteResponse {
    destinationZipCode: string;

    options: ShippingOption[];
}

export async function quoteShipping(
    destinationZipCode: string,
    items: ShippingQuoteItem[]
): Promise<ShippingQuoteResponse> {

    const response =
        await api.post<ShippingQuoteResponse>(
            "/shipping/quote",
            {
                destinationZipCode,
                items
            }
        );

    return response.data;
}