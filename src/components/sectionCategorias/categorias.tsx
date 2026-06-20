import { 
    CardImage, 
    CardImageContainer, 
    CategoriasCard, 
    CategoriasCardsContainer, 
    CategoriasContainer 
} from "./categoriasStyles";
import image1 from '../../assets/images/pulseiras.jpg'
import image2 from '../../assets/images/pingentes.jpg'
import image3 from '../../assets/images/pingentes2.jpg'
import image4 from '../../assets/images/corrente2.jpg'
import { TextContainer } from "../../pages/Home/HomeStyles";

function Categorias () {
    return (
        <CategoriasContainer>
            <TextContainer>
                CATEGORIAS
            </TextContainer>

            <CategoriasCardsContainer>

                <CategoriasCard>
                    <CardImageContainer>
                        <CardImage src={image4}/>
                    </CardImageContainer>
                    Correntes
                </CategoriasCard>

                <CategoriasCard>
                    <CardImageContainer>
                        <CardImage src={image1}/>
                    </CardImageContainer>
                    Pulseiras
                </CategoriasCard>

                <CategoriasCard>
                    <CardImageContainer>
                        <CardImage src={image2}/>
                    </CardImageContainer>
                    Pingentes
                </CategoriasCard>

                <CategoriasCard>
                    <CardImageContainer>
                        <CardImage src={image3}/>
                    </CardImageContainer>
                    Mais vendidos
                </CategoriasCard>
            </CategoriasCardsContainer>

        </CategoriasContainer>
    )
}

export default Categorias;