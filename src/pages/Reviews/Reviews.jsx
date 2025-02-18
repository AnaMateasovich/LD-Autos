import React from "react";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import Rating from "@mui/material/Rating";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>
      <div>
      <Slider {...settings}>
        <div>
          <h3>Slide 1</h3>
        </div>
        <div>
          <h3>Slide 2</h3>
        </div>
        <div>
          <h3>Slide 3</h3>
        </div>
      </Slider>
        <img src="/src/assets/welcome.jpg" alt="Antes y despues de Pepito" />
        <div>
        <h5>Pepito</h5>
          <p>5,0</p>
          <Rating
            name="read-only"
            value={5}
            readOnly
            size="large"
            precision={0.5}
            emptyIcon={
              <StarRateRoundedIcon
                style={{ opacity: 0.55 }}
                fontSize="inherit"
              />
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
