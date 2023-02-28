import Carousel from "react-material-ui-carousel";
import '../views/products.css'
import bg1 from "../p-images/iphone.png";
import bg2 from "../p-images/insta.png";
import bg3 from "../p-images/rog.png";

function CarouselComponent() {
  const bgImages = [bg1, bg2, bg3];
  return (
    <>
      <div >
        <Carousel
          autoPlay={true}
          indicators={true}
          className="carousel"
          navButtonsAlwaysVisible={true}
          navButtonsAlwaysInvisible={false}
        >
          {bgImages.map((item, i) => (
            <img
              key={i}
              src={item}
              alt={`Amazon Background ${i}`}
              className="c-image"
            />
          ))}
        </Carousel>
      </div>
    </>
  );
}
export default CarouselComponent;
