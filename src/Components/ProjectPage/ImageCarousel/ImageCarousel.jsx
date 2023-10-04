import { ImageCarouselStyled } from "./ImageCarouselStyled.styled";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";



export const ImageCarousel = ({ image }) => {

    const renderImages = ()=>{
        if(!image) return null;
        return image.map((el,index)=>{
            
            return (
                <div key={index}>
                    <img src={el} />
                </div>
            )
        })
    }

    const carouselProp = {
        renderArrowPrev: (clickHandler, hasPrev, label) => {
          return (
            <span className="arrow-left arrow" onClick={clickHandler}>
              <span className="icon-keyboard_arrow_left">❮</span>
            </span>
          )
        },
        renderArrowNext: (clickHandler, hasNext, label) => {
          return (
            <span className="arrow-right arrow" onClick={clickHandler}>
              <span className="icon-keyboard_arrow_right">❯</span>
            </span>
          )
        },
      }


    return (
        <ImageCarouselStyled>

            <Carousel autoPlay interval="5000" infiniteLoop  showArrows={true}
                {...carouselProp}
            >

                {renderImages()}
                   
            </Carousel>
           

        </ImageCarouselStyled>
    );
};

