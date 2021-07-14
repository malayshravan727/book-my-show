import React from "react";
import HeroSlider from "react-slick";

// Compoenent
import { NextArrow, PrevArrow } from "./Arrows.component";

const HeroCarousal = () => {
  const settingsLG = {
    arrows: true,
    autoplay: true,
    centerMode: true,
    centerPadding: "300px",
    slidesToShow: 1,
    infinite: true,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const images = [
    "https://images.unsplash.com/photo-1626160200858-0579929f1d6d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    "https://images.unsplash.com/photo-1626130521380-bb97c6695c66?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80",
    "https://images.unsplash.com/photo-1626108728634-1e3a423a3541?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    "https://images.unsplash.com/photo-1626106063727-5369334359f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    "https://images.unsplash.com/photo-1621052093608-a12172fcb80f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1625923782980-19cf8e864704?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=358&q=80",
    "https://images.unsplash.com/photo-1626159727343-f8f700b7715b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
];

return (
  <>
    <div className="lg:hidden">
      <HeroSlider {...settings}>
        {images.map((image) => (
          <div className="w-full h-56 md:h-80 py-3 ">
            <img src={image} alt="testing" className="w-full h-full" />
          </div>
        ))}
      </HeroSlider>
    </div>

    <div className="hidden lg:block">
      <HeroSlider {...settingsLG}>
        {images.map((image) => (
          <div className="w-full h-96 px-2 py-3">
            <img
              src={image}
              alt="testing"
              className="w-full h-full rounded-md"
            />
          </div>
        ))}
      </HeroSlider>
    </div>
  </>
);
};

export default HeroCarousal;