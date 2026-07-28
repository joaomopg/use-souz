import {
    HeaderContainer,
    LogoNameContainer,
    LogoImg,
    SearchContainer,
    RegisterLoginContainer,
    ButtonsContainer,
    Button,
    UserMenuContainer,
    UserGreeting,
    UserDropdown,
    DropdownItem
} from "./headerStyles";

import { Link, useNavigate } from 'react-router-dom';

import logoImage from '../../assets/images/usesouzalogo.jpg'
import SearchInput from "../searchInput/searchInput";
import ShoppingCart from "../shoppingCart/shoppingCart";
import { useEffect, useRef, useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function Header() {

    const [isActive, setIsActive] = useState(false);
    // Controla se o menu suspenso do usuário logado está aberto
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const cardRef = useRef(null);
    // Referência ao container do menu do usuário, usada para detectar cliques fora dele
    const menuRef = useRef<HTMLDivElement>(null);

    const { user, isLoading, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsActive(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    // Fecha o menu suspenso quando o usuário clica em qualquer lugar fora dele
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Desloga o usuário, fecha o menu e o redireciona para a página inicial
    const handleLogout = () => {
        logout();
        setIsMenuOpen(false);
        navigate('/');
    };

    return (
        <HeaderContainer>

            <LogoNameContainer>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <LogoImg src={logoImage} />
                </Link>
                <div ref={cardRef} className={`card ${isActive ? 'active' : ''}`}>
                    <div className="content">
                        <div className="logo">
                            <div className="logo1">
                                USE
                                <span className="underline" />
                            </div>
                            <div className="logo2">SOUZ</div>
                            <span className="trail" />
                        </div>
                    </div>
                </div>
            </LogoNameContainer>

            <SearchContainer>
                <SearchInput />
            </SearchContainer>

            <RegisterLoginContainer>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="32"
                    height="32"
                    fill="currentColor"
                >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm0 15c-2.33 0-4.43-.95-5.96-2.48.16-2.02 4-3.12 5.96-3.12 1.95 0 5.8 1.1 5.96 3.12A8.45 8.45 0 0112 20z" />
                </svg>

                <ButtonsContainer>
                    {/* Enquanto o AuthContext verifica o localStorage, não renderiza nada, evitando um flash de conteúdo */}
                    {isLoading ? null : user ? (
                        // Usuário autenticado: nome + menu suspenso com opção de sair
                        <UserMenuContainer ref={menuRef}>
                            <UserGreeting onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                Olá, {user.name.split(' ')[0]}
                            </UserGreeting>
                            {isMenuOpen && (
                                <UserDropdown>
                                    <DropdownItem onClick={handleLogout}>
                                        Sair
                                    </DropdownItem>
                                </UserDropdown>
                            )}
                        </UserMenuContainer>
                    ) : (
                        // Usuário não autenticado: botões originais de cadastro / login
                        <>
                            <Link to="/register" style={{ textDecoration: 'none' }}>
                                <Button>Cadastre-se</Button>
                            </Link>
                            |
                            <Link to="/login" style={{ textDecoration: 'none', marginLeft: '10px' }}>
                                <Button>Login</Button>
                            </Link>
                        </>
                    )}
                </ButtonsContainer>

                <Link to="/cart" style={{ textDecoration: 'none' }}>
                    <ShoppingCart quantity={3} />
                </Link>
            </RegisterLoginContainer>
        </HeaderContainer>
    )
}

export default Header;