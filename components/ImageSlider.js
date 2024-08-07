import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderWrapper = styled.div`
  .slick-slide img {
    max-height: 500px;
    border-radius: 8px;
  }
`;

const images = [
  'https://via.placeholder.com/800x400?text=Travel+Image+1',
  'https://via.placeholder.com/800x400?text=Travel+Image+2',
  'https://via.placeholder.com/800x400?text=Travel+Image+3'
];

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <SliderWrapper>
      <Slider {...settings}>
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <img src={img} alt={`Travel ${idx + 1}`} />
          </motion.div>
        ))}
      </Slider>
    </SliderWrapper>
  );
};

export default ImageSlider;
