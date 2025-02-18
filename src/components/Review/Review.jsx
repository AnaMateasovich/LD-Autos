import React from "react";
import styles from "./Review.module.css";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import Rating from "@mui/material/Rating";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const Review = ({name, before, after, review}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    scroll
  };
  return (
    <div className={styles.container}>
      <div>
        <Slider {...settings}>
          <div>
            <img src={before} alt="Antes" />
            <p>Antes</p>
          </div>
          <div>
            <img src={after} alt="Después" />
            <p>Después</p>
          </div>
        </Slider>
        <div className={styles.txt}>
          <h5>{name}</h5>
          <p className={styles.reviewText}>{review}</p>
          <div className={styles.rating}>
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
    </div>
  );
};
