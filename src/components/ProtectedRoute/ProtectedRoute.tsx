import type {
    ReactNode
} from "react";

import {
    Navigate
} from "react-router-dom";

import {
    useAuth
} from "../../contexts/AuthContext";


interface ProtectedRouteProps {
    children: ReactNode;
}


export default function ProtectedRoute({
    children
}: ProtectedRouteProps) {

    const {
        user,
        isLoading
    } = useAuth();


    if (isLoading) {

        return null;

    }


    if (!user) {

        return (
            <Navigate
                to="/login"
                replace
            />
        );

    }


    return children;
}