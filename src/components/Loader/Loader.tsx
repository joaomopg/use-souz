import { Container, StyledWrapper } from "./LoaderStyles";

const Loader = () => {
  return (
    <Container>
        <StyledWrapper>
        <div className="cart-loader">
            <div className="items-container">
            <div id="item-mobile" className="item" />
            <div id="item-laptop" className="item" />
            <div id="item-tab" className="item" />
            <div id="item-headphone" className="item" />
            <div id="item-mixer" className="item" />
            </div>
            <div id="cart-icon" />
            <div className="loading-text">
            Carregando protudos<span className="dot">.</span><span className="dot">.</span><span className="dot">.</span>
            </div>
        </div>
        </StyledWrapper>
    </Container>
  );
}

export default Loader;