import { ThemeProvider } from 'styled-components'
import { theme } from './theme'
import Header from './components/header/header'
import image1 from './assets/imagebanner1.webp'
import image2 from './assets/imagebanner2.webp'
import { Body, Section, TextContainer } from './App'
import Infos from './components/sectionInfos/sectionInfos'
import BannersCarousel from './components/bannersCarousel/bannersCarousel'
import Categorias from './components/sectionCategorias/categorias'
import FadeSection from './components/ScrollRevealSections/ScrollRevealSections'
import UseSouzCard from './components/useSouzCard/useSouz'
import Carousel from './components/carousel/carousel'
import reviewImage from './assets/pingentes.jpg'
import ReviewCard from './components/ReviewCard/ReviewCard'
import correnteImage from './assets/corrente2.jpg'
import pulseiraImage from './assets/pulseiras.jpg'
import ProductCard from './components/productCard/productCard'
import atendimentoWhatsApp from './assets/banner3.png'
import Footer from './components/footer/footer'

function App() {

  const cards = [
    {   
        userName: "Wesley Silva",
        productName: "Corrente Cart 4mm (Fecho Gaveta) + Pingente Cruz Amarrada (M)",
        title: "Corrente pingente cruz amarrada",
        review: "Produto condizente com o anúncio, jóia bem bonita e de bom acabamento!",
        image: reviewImage,
        id: 1
    },
    {   
        userName: "Wesley Silva",
        productName: "Corrente Cart 4mm (Fecho Gaveta) + Pingente Cruz Amarrada (M)",
        title: "Corrente pingente cruz amarrada",
        review: "Produto condizente com o anúncio, jóia bem bonita e de bom acabamento!",
        image: reviewImage,
        id: 2
    },
    {   
        userName: "Wesley Silva",
        productName: "Corrente Cart 4mm (Fecho Gaveta) + Pingente Cruz Amarrada (M)",
        title: "Corrente pingente cruz amarrada",
        review: "Produto condizente com o anúncio, jóia bem bonita e de bom acabamento!",
        image: reviewImage,
        id: 3
    },
    {   
        userName: "Wesley Silva",
        productName: "Corrente Cart 4mm (Fecho Gaveta) + Pingente Cruz Amarrada (M)",
        title: "Corrente pingente cruz amarrada",
        review: "Produto condizente com o anúncio, jóia bem bonita e de bom acabamento!",
        image: reviewImage,
        id: 4
    },
    {   
        userName: "Wesley Silva",
        productName: "Corrente Cart 4mm (Fecho Gaveta) + Pingente Cruz Amarrada (M)",
        title: "Corrente pingente cruz amarrada",
        review: "Produto condizente com o anúncio, jóia bem bonita e de bom acabamento!",
        image: reviewImage,
        id: 5
    },
  
];

  const products = [
    {
      id: 1,
      image: correnteImage,
      name: "Kit Completo - Piastrine 1,5mm + Pingente Cruz",
      oldPrice: "R$300,00",
      currentPrice: "R$159,90",
      pixPrice: "R$151,91 com Pix",
      installments: "10x de R$15,99 sem juros",
      discount: "47% OFF",
      freeShipping: true,
      sizes: ["19cm", "20cm", "21cm", "+2"],
    },
    {
      id: 2,
      image: pulseiraImage,
      name: "Pulseira Grumet 5mm",
      oldPrice: "R$199,90",
      currentPrice: "R$99,90",
      pixPrice: "R$94,90 com Pix",
      installments: "10x de R$9,99 sem juros",
      discount: "50% OFF",
      freeShipping: true,
      sizes: ["18cm", "19cm", "20cm"],
    },
    {
      id: 3,
      image: correnteImage,
      name: "Kit Completo - Piastrine 1,5mm + Pingente Cruz",
      oldPrice: "R$300,00",
      currentPrice: "R$159,90",
      pixPrice: "R$151,91 com Pix",
      installments: "10x de R$15,99 sem juros",
      discount: "47% OFF",
      freeShipping: true,
      sizes: ["19cm", "20cm", "21cm", "+2"],
    },
    {
      id: 4,
      image: pulseiraImage,
      name: "Pulseira Grumet 5mm",
      oldPrice: "R$199,90",
      currentPrice: "R$99,90",
      pixPrice: "R$94,90 com Pix",
      installments: "10x de R$9,99 sem juros",
      discount: "50% OFF",
      freeShipping: true,
      sizes: ["18cm", "19cm", "20cm"],
    },
    {
      id: 5,
      image: correnteImage,
      name: "Kit Completo - Piastrine 1,5mm + Pingente Cruz",
      oldPrice: "R$300,00",
      currentPrice: "R$159,90",
      pixPrice: "R$151,91 com Pix",
      installments: "10x de R$15,99 sem juros",
      discount: "47% OFF",
      freeShipping: true,
      sizes: ["19cm", "20cm", "21cm", "+2"],
    },
    {
      id: 6,
      image: pulseiraImage,
      name: "Pulseira Grumet 5mm",
      oldPrice: "R$199,90",
      currentPrice: "R$99,90",
      pixPrice: "R$94,90 com Pix",
      installments: "10x de R$9,99 sem juros",
      discount: "50% OFF",
      freeShipping: true,
      sizes: ["18cm", "19cm", "20cm"],
    },
  ];
  
  return (
    <ThemeProvider theme={theme}>
      <div style={{display: "flex", flexDirection: "column", backgroundColor: "black"}}>

        <Header/>
        <Body>
          <BannersCarousel
          images={[
            image1,
            image2,
          ]}
          />
          <Infos/>
          <Categorias/>
          <Section>
            <div className="useSouzContainer">
              <UseSouzCard/>
            </div>
          </Section>
          
          <FadeSection background='black'>
              <div style={{display: "flex", flexDirection: "column"}}>
                <TextContainer>AVALIAÇÕES</TextContainer>
                <Carousel
                  cardsPerView={3}
                  gap={20}
                  >
                  {cards.map(card => (
                    <ReviewCard
                      key={card.id}
                      {...card}
                    />
                  ))}
                </Carousel>

              </div>
          </FadeSection>

          <Section>
            <div style={{display: "flex", flexDirection: "column"}}>
            <TextContainer>MAIS VENDIDOS</TextContainer>
            <Carousel
              cardsPerView={4}
              gap={20}
              >
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  image={product.image}
                  name={product.name}
                  oldPrice={product.oldPrice}
                  currentPrice={product.currentPrice}
                  pixPrice={product.pixPrice}
                  installments={product.installments}
                  discount={product.discount}
                  freeShipping={product.freeShipping}
                  sizes={product.sizes}
                />
              ))}
            </Carousel>
            </div>
          </Section>

          <FadeSection background='black'>
            <div
              style={{
                width: "100%",
                border: "1px solid #c49d54",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 0 20px rgba(196,157,84,0.25)",
              }}
            >
              <img
                src={atendimentoWhatsApp}
                alt="Atendimento WhatsApp"
                style={{
                  width: "100%",
                  display: "block",
                  objectFit: "contain",
                }}
              />
            </div>
          </FadeSection>

          <Section>
            <div style={{display: "flex", flexDirection: "column"}}>
            <TextContainer>LANÇAMENTOS</TextContainer>
            <Carousel
              cardsPerView={4}
              gap={20}
              >
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  image={product.image}
                  name={product.name}
                  oldPrice={product.oldPrice}
                  currentPrice={product.currentPrice}
                  pixPrice={product.pixPrice}
                  installments={product.installments}
                  discount={product.discount}
                  freeShipping={product.freeShipping}
                  sizes={product.sizes}
                />
              ))}
            </Carousel>
            </div>
          </Section>

          
        </Body>

        <Footer/>
      </div>
    </ThemeProvider>
  )
}

export default App
