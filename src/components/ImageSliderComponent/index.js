import Slider from "react-slick";
import PropTypes from "prop-types";
// import { Media } from "reactstrap";
import MKBox from "components/MKBox";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", textColor: "red", "&::Before": { color: "red" } }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", textColor: "green", "&::Before": { color: "red" } }}
      onClick={onClick}
    />
  );
}

function ImageSliderComponent({ baseUrl }) {
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img height="100%" width="100%" key={i} src={`${baseUrl}`} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <MKBox className="slider-container" p={{ lg: 4 }} borderRadius="2rem" bgColor="white" ml={2}>
      <Slider {...settings} height={{ lg: 10 }}>
        <div>
          <img height="100%" width="100%" src={baseUrl} />
        </div>
        <div>
          <img height="100%" width="100%" src={baseUrl} />
        </div>
        <div>
          <img height="100%" width="100%" src={baseUrl} />
        </div>
        <div>
          <img height="100%" width="100%" src={baseUrl} />
        </div>
      </Slider>
    </MKBox>
  );
}

ImageSliderComponent.propTypes = {
  baseUrl: PropTypes.any,
};

NextArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

PrevArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

export default ImageSliderComponent;
