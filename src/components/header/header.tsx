import { 
    HeaderContainer, 
    LogoNameContainer, 
    LogoImg,
    SearchContainer,
    RegisterLoginContainer,
    ButtonsContainer,
    Button
} from "./headerStyles";

import { Link } from 'react-router-dom';

import logoImage from '../../assets/images/usesouzalogo.jpg'
import SearchInput from "../searchInput/searchInput";
import ShoppingCart from "../shoppingCart/shoppingCart";
import { useEffect, useRef, useState } from "react";

function Header() {

    const [isActive, setIsActive] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
        setIsActive(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return(
        <HeaderContainer>

            <LogoNameContainer>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <LogoImg src={logoImage}/>
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
                <SearchInput/>
            </SearchContainer>

            <RegisterLoginContainer>
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="32"
                        height="32"
                        fill="currentColor"
                    >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm0 15c-2.33 0-4.43-.95-5.96-2.48.16-2.02 4-3.12 5.96-3.12 1.95 0 5.8 1.1 5.96 3.12A8.45 8.45 0 0112 20z"/>
                </svg>

                <ButtonsContainer>
                    <Link to="/register" style={{ textDecoration: 'none' }}>
                        <Button>Cadastre-se</Button>
                    </Link>
                    |
                    <Link to="/login" style={{ textDecoration: 'none', marginLeft: '10px' }}>
                        <Button>Login</Button>
                    </Link>
                </ButtonsContainer>

                <Link to="/cart" style={{ textDecoration: 'none' }}>
                    <ShoppingCart quantity={3} />
                </Link>
            </RegisterLoginContainer>
        </HeaderContainer>
    )
}

export default Header;