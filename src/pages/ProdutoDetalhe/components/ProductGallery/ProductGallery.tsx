import {
  Container,
  Thumbnails,
  MainImage,
  Thumbnail,
  ThumbnailColumn,
  ScrollButton
} from "./ProductGalleryStyles";

import {
  useEffect,
  useRef,
  useState
} from "react";

interface ProductGalleryProps {
  imagens: string[];
  imagemAtiva?: string | undefined;
}

export default function ProductGallery({
  imagens,
  imagemAtiva
}: ProductGalleryProps) {
  const [
    imagemSelecionada,
    setImagemSelecionada
  ] = useState(0);

  const thumbnailsRef =
    useRef<HTMLDivElement>(
      null
    );

  useEffect(() => {
    if (!imagemAtiva) {
      return;
    }

    const index =
      imagens.indexOf(
        imagemAtiva
      );

    if (index >= 0) {
      setImagemSelecionada(
        index
      );
    }
  }, [
    imagemAtiva,
    imagens
  ]);

  function scrollParaBaixo() {
    thumbnailsRef.current
      ?.scrollBy({
        top: 148,
        behavior: "smooth"
      });
  }

  function scrollParaCima() {
    thumbnailsRef.current
      ?.scrollBy({
        top: -148,
        behavior: "smooth"
      });
  }

  const imagemPrincipal =
    imagens[
      imagemSelecionada
    ];

  return (
    <Container>
      <ThumbnailColumn>
        <ScrollButton
          type="button"
          onClick={
            scrollParaCima
          }
        >
          ▲
        </ScrollButton>

        <Thumbnails
          ref={
            thumbnailsRef
          }
        >
          {imagens.map(
            (imagem, index) => (
              <Thumbnail
                key={
                  `${imagem}-${index}`
                }

                $selected={
                  imagemSelecionada ===
                  index
                }

                onClick={() =>
                  setImagemSelecionada(
                    index
                  )
                }
              >
                <img
                  src={imagem}
                  alt={
                    `Miniatura ${
                      index + 1
                    }`
                  }
                />
              </Thumbnail>
            )
          )}
        </Thumbnails>

        <ScrollButton
          type="button"
          onClick={
            scrollParaBaixo
          }
        >
          ▼
        </ScrollButton>
      </ThumbnailColumn>

      <MainImage>
        {imagemPrincipal ? (
          <img
            src={
              imagemPrincipal
            }
            alt="Imagem do produto"
          />
        ) : (
          <span>
            Imagem indisponível
          </span>
        )}
      </MainImage>
    </Container>
  );
}