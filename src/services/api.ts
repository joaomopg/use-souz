import axios from "axios";

export const API_URL =
    "http://localhost:4000";

export const api =
    axios.create({
        baseURL:
            API_URL,

        timeout:
            10000
    });

api.interceptors.request.use(
    (config) => {

        const token =
            localStorage.getItem(
                "@use-souz:token"
            );

        if (token) {

            config.headers.Authorization =
                `Bearer ${token}`;

        }

        return config;

    }
);

export function montarUrlImagem(
    caminho:
        string |
        null |
        undefined
): string {

    if (!caminho) {
        return "";
    }

    if (
        caminho.startsWith(
            "http://"
        ) ||
        caminho.startsWith(
            "https://"
        )
    ) {
        return caminho;
    }

    return `${API_URL}${caminho}`;
}