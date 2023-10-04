import { styled } from "styled-components";

export const ImageCarouselStyled = styled.div`

    .arrow{
        cursor:pointer;
    }
  
  /* style for prev/next button */
  .carousel-slider .arrow-left {
    position: absolute;
    top: 50%;
    color: #fff;
    padding: 0;
    left: 10px !important;
    background: #c7c7c8;
    transform: translateY(-50%);
    height: 50px;
    width: 50px;
    border-radius: 50%;
    -webkit-transition: .3s all ease-in-out;
    -o-transition: .3s all ease-in-out;
    transition: .3s all ease-in-out;
    line-height: 0;
    text-align: center;
    font-size: 25px;
    z-index: 99;
  }
  
  .carousel-slider .arrow-left > span {
    line-height: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  
  .carousel-slider .arrow-right {
    position: absolute;
    top: 50%;
    color: #fff;
    padding: 0;
    right: 10px !important;
    background: #c7c7c8;
    transform: translateY(-50%);
    height: 50px;
    width: 50px;
    border-radius: 50%;
    -webkit-transition: .3s all ease-in-out;
    -o-transition: .3s all ease-in-out;
    transition: .3s all ease-in-out;
    line-height: 0;
    text-align: center;
    font-size: 25px;
  }
  
  .carousel-slider .arrow-right > span {
    line-height: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  

  }
`;
