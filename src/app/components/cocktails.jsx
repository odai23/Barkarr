// src/components/CocktailSlider.jsx

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style/cocktails.css";

const CocktailSlider = () => {
  const cocktails = [
    {
      image: "1.jpg",
      title: "Classic Martini",
      description:
        "The Classic Martini is a timeless cocktail made with gin and vermouth, garnished with an olive or a twist of lemon.",
    },
    {
      image: "2.jpg",
      title: "Margarita",
      description:
        "Margarita, a refreshing tequila-based cocktail, combines the flavors of tequila, triple sec, and lime juice.",
    },
    {
      image: "3.jpg",
      title: "Old Fashioned",
      description:
        "The Old Fashioned is a whiskey cocktail made by muddling sugar with bitters, adding alcohol, and a twist of citrus rind.",
    },
    {
      image: "4.jpg",
      title: "Old Fashioned",
      description:
        "The Old Fashioned is a whiskey cocktail made by muddling sugar with bitters, adding alcohol, and a twist of citrus rind.",
    },
    {
      image: "5.jpg",
      title: "Old Fashioned",
      description:
        "The Old Fashioned is a whiskey cocktail made by muddling sugar with bitters, adding alcohol, and a twist of citrus rind.",
    },
    {
      image: "6.jpg",
      title: "Old Fashioned",
      description:
        "The Old Fashioned is a whiskey cocktail made by muddling sugar with bitters, adding alcohol, and a twist of citrus rind.",
    },
    {
      image: "7.jpg",
      title: "Old Fashioned",
      description:
        "The Old Fashioned is a whiskey cocktail made by muddling sugar with bitters, adding alcohol, and a twist of citrus rind.",
    },
    {
      image: "8.jpg",
      title: "Old Fashioned",
      description:
        "The Old Fashioned is a whiskey cocktail made by muddling sugar with bitters, adding alcohol, and a twist of citrus rind.",
    },
    {
      image: "9.jpg",
      title: "Old Fashioned",
      description:
        "The Old Fashioned is a whiskey cocktail made by muddling sugar with bitters, adding alcohol, and a twist of citrus rind.",
    },
    {
      image: "10.jpg",
      title: "Old Fashioned",
      description:
        "The Old Fashioned is a whiskey cocktail made by muddling sugar with bitters, adding alcohol, and a twist of citrus rind.",
    },
    {
      image: "11.jpg",
      title: "Old Fashioned",
      description:
        "The Old Fashioned is a whiskey cocktail made by muddling sugar with bitters, adding alcohol, and a twist of citrus rind.",
    },
    {
      image: "12.jpg",
      title: "Old Fashioned",
      description:
        "The Old Fashioned is a whiskey cocktail made by muddling sugar with bitters, adding alcohol, and a twist of citrus rind.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {cocktails.map((cocktail, index) => (
        <div key={index} id="cocktails" className="cocktail-slide">
          <div className="cocktail-image">
            <img src={`/images/${cocktail.image}`} alt={cocktail.title} />
          </div>
          <div className="cocktail-description">
            <h2>{cocktail.title}</h2>
            <p>{cocktail.description}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default CocktailSlider;
