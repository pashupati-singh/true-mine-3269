import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowRightIcon, ArrowLeftIcon } from "@chakra-ui/icons";

import { Box, Image } from "@chakra-ui/react";

const Carouselimage = [
  {
    image:
      "https://gardenguru.in/cdn/shop/files/DIY-Hydroponics-Kit-Sale-online_1cf29a72-5ff9-450f-a39b-6ac63e19e1ef.png?v=1671866277",
    id: 1,
  },
  {
    image:
      "https://gardenguru.in/cdn/shop/files/best-hydroponic-nutrients-online-india_de7d1ccc-8ad2-4a60-aacd-3f051e92e2ee.jpg?v=1650813476",
    id: 2,
  },
  {
    image:
      "https://gardenguru.in/cdn/shop/files/best-in-class-hydroponics-nutrients-in-india.png?v=1647252142",
    id: 3,
  },
  {
    image:
      "https://gardenguru.in/cdn/shop/files/ShopifyCarouselFrontPage-940x303-lg.png?v=1647250959",
    id: 4,
  },
  {
    image:
      "https://gardenguru.in/cdn/shop/files/commercial_hydroponics_india.png?v=1647251753",
    id: 5,
  },
];

export const Carousel = () => {
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    swipeToSlide: true,
    cssEase: "linear",
    // nextArrow: <ArrowRightIcon />,
    // prevArrow: <ArrowLeftIcon />,
    // // centerMode: true,
    // centerPadding: "60px",
  };
  return (
    <Box>
      <Slider {...settings}>
        {Carouselimage.map((item) => (
          <Box key={item.id}>
            <Image src={item.image} alt={item.id} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};
