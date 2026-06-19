import { Container } from "./infiniteSliderStyles";
import image1 from '../../assets/corrente2.jpg'

const cards = [
  {
    title: "HELLO THERE",
    subtitle: "Am Ashwin.A",
    image: image1
  },
  {
    title: "Do follow on Insta",
    subtitle: "ashwin_ambar_",
    image: image1
  },
  {
    title: "Replace cards with images",
    subtitle: "for a image slider",
    image: image1
  },
  {
    title: "Html css only",
    subtitle: "Hover to stop the slides",
    image: image1
  },
  {
    title: "Card 5",
    subtitle: "Content for card 5",
    image: image1
  },
  {
    title: "Card 6",
    subtitle: "Content for card 6",
    image: image1
  },
  {
    title: "Card 7",
    subtitle: "Modify it and use",
    image: image1
  },
  {
    title: "Card 8",
    subtitle: "Content for card 8",
    image: image1
  },
  {
    title: "Card 9",
    subtitle: "Content for card 9",
    image: image1
  },
];

export default function InfiniteCards() {
  return (
    <Container>
      <div className="slider">
        <div className="track">
          {[...cards, ...cards].map((card, index) => (
            <div key={index} className="card">
              <div className="cardContent">
                <div className="card-image-container">
                  <img className="card-image" src={card.image}/>
                </div>
                <h3>{card.title}</h3>
                <p>{card.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}