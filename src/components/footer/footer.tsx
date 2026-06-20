import {
  Container,
  TopSection,
  LogoContainer,
  ContactContainer,
  ContactTitle,
  ContactText,
  BottomSection,
  InfoGroup,
  GroupTitle,
  IconsContainer,
  FooterCopyright,
} from "./footerStyles";

import visa from '../../assets/images/visa.png'
import mastercard from '../../assets/images/mastercard.png'
import pix from '../../assets/images/pix.png'
import elo from '../../assets/images/elo.png'
import transporte1 from '../../assets/images/transporte1.png'
import transporte2 from '../../assets/images/transporte2.png'
import seguranca from '../../assets/images/seguranca1.png'
import logo from '../../assets/images/usesouzlogotransparent.png'

export default function Footer() {

  const paymentMethods = [
    visa,
    mastercard,
    pix,
    elo,
  ];

  const transportMethods = [
    transporte1,
    transporte2,
  ];

  const securityMethods = [
    seguranca
  ];

  return (
    <Container>
      <TopSection>
        <LogoContainer>
          <img src={logo} style={{width: "100px", height: "auto"}}/>
        </LogoContainer>

        <ContactContainer>
          <div>
            <ContactTitle>Telefone</ContactTitle>

            <ContactText>
              (61) 98321-7489
            </ContactText>

            <ContactText>
              (61) 99102-0021
            </ContactText>
          </div>

          <div>
            <ContactTitle>Instagram</ContactTitle>

            <ContactText>
              @usesouz.joias
            </ContactText>
          </div>
        </ContactContainer>
      </TopSection>

      <BottomSection>
        <InfoGroup>
          <GroupTitle>
            Formas de pagamento
          </GroupTitle>

          <IconsContainer>
            {paymentMethods.map((image) => (
              <img src={image} style={{width: "50px", height: "auto", borderRadius: "2px", backgroundColor: "white"}}/>
            ))}
          </IconsContainer>
        </InfoGroup>

        <InfoGroup>
          <GroupTitle>
            Meios de envio
          </GroupTitle>

          <IconsContainer>
            {transportMethods.map((image) => (
              <img src={image} style={{width: "65px", height: "auto", borderRadius: "2px", backgroundColor: "white"}}/>
            ))}
          </IconsContainer>
        </InfoGroup>

        <InfoGroup>
          <GroupTitle>
            Segurança
          </GroupTitle>

          <IconsContainer>
            {securityMethods.map((image) => (
              <img src={image} style={{width: "150px", height: "auto", borderRadius: "2px"}}/>
            ))}
          </IconsContainer>
        </InfoGroup>
      </BottomSection>

      <FooterCopyright>
        © 2025 Use Souz Joias. Todos os direitos reservados.
      </FooterCopyright>
    </Container>
  );
}