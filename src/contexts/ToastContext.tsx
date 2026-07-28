import {
    createContext,
    useContext,
    useState,
    type ReactNode,
} from "react";

type ToastType = "success" | "error" | "warning";

interface ToastData {
    message: string;
    type: ToastType;
}

interface ToastContextType {
    toast: ToastData | null;
    showToast: (
        message: string,
        type?: ToastType
    ) => void;
}

const ToastContext = createContext({} as ToastContextType);

export function ToastProvider({
    children,
}: {
    children: ReactNode;
}) {

    const [toast, setToast] =
        useState<ToastData | null>(null);

    function showToast(
        message: string,
        type: ToastType = "success"
    ) {

        setToast({

            message,

            type,

        });

        setTimeout(() => {

            setToast(null);

        }, 3000);

    }

    return (

        <ToastContext.Provider
            value={{

                toast,

                showToast,

            }}
        >

            {children}

        </ToastContext.Provider>

    );

}

export function useToast() {

    return useContext(ToastContext);

}