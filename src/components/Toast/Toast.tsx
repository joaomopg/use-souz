import {
    Container,
    Icon,
    Message,
} from "./ToastStyles";

import { FaCheckCircle } from "react-icons/fa";

import { useToast } from "../../contexts/ToastContext";

export default function Toast() {

    const { toast } = useToast();

    if (!toast) return null;

    return (

        <Container>

            <Icon>

                <FaCheckCircle />

            </Icon>

            <Message>

                {toast.message}

            </Message>

        </Container>

    );

}