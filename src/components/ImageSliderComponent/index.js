import Slider from "react-slick";
import PropTypes from "prop-types";
import { Media } from "reactstrap";
import MKBox from "components/MKBox";

function ImageSliderComponent({ baseUrl }) {
  const paging = (i) => {
    console.log(i);
    return (
      <>
        <Media src={`${baseUrl}`} />
      </>
    );
  };

  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <MKBox className="slider-container">
      <Slider customPaging={paging} {...settings}>
        <MKBox>
          <Media src={baseUrl} />
        </MKBox>
        <MKBox>
          <Media src={baseUrl} />
        </MKBox>
        <MKBox>
          <Media src={baseUrl} />
        </MKBox>
        <MKBox>
          <Media src={baseUrl} />
        </MKBox>
      </Slider>
    </MKBox>
  );
}

ImageSliderComponent.propTypes = {
  baseUrl: PropTypes.any,
};

export default ImageSliderComponent;
