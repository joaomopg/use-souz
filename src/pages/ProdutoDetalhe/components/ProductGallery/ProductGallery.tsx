import {
    Container,
    Thumbnails,
    MainImage,
    Thumbnail,
    ThumbnailColumn,
    ScrollButton
} from './ProductGalleryStyles';

import { useRef, useState } from 'react';

interface ProductGalleryProps {
    imagens: string[],
}

export default function ProductGallery({imagens}: ProductGalleryProps) {

    const [imagemSelecionada, setImagemSelecionada] = useState(0);
    const thumbnailsRef = useRef<HTMLDivElement>(null);

    function scrollParaBaixo() {
        if (!thumbnailsRef.current) return;

        thumbnailsRef.current.scrollTop += 120;
    }

    function scrollParaCima() {

        thumbnailsRef.current?.scrollBy({

            top: -148,

            behavior: 'smooth'

        });

    }

    return (
        <Container>

            <ThumbnailColumn>

                <ScrollButton onClick={scrollParaCima}>

                    ▲

                </ScrollButton>

                <Thumbnails ref={thumbnailsRef}>

                    {imagens.map((imagem, index) => (

                        <Thumbnail
                            key={index}
                            $selected={imagemSelecionada === index}
                            onClick={() => setImagemSelecionada(index)}
                        >
                            <img
                                src={imagem}
                                alt={`Miniatura ${index + 1}`}
                            />

                        </Thumbnail>

                    ))}

                </Thumbnails>

                <ScrollButton onClick={scrollParaBaixo}>

                    ▼

                </ScrollButton>

            </ThumbnailColumn>

            <MainImage>

                <img
                    src={imagens[imagemSelecionada]}
                    alt="Imagem do produto"
                />

            </MainImage>

        </Container>
    );
}