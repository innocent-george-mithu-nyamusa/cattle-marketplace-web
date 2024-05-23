import Slider from "react-slick";
import PropTypes from "prop-types";
import { Media } from "reactstrap";
import MKBox from "components/MKBox";

function ImageSliderComponent({ baseUrl }) {
  const paging = (i) => {
    return (
      <>
        <Media src={`${baseUrl}/abstract0${i + 1}.jpg`} />
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
          <Media src={baseUrl + "/abstract01.jpg"} />
        </MKBox>
        <MKBox>
          <Media src={baseUrl + "/abstract02.jpg"} />
        </MKBox>
        <MKBox>
          <Media src={baseUrl + "/abstract03.jpg"} />
        </MKBox>
        <MKBox>
          <Media src={baseUrl + "/abstract04.jpg"} />
        </MKBox>
      </Slider>
    </MKBox>
  );
}

ImageSliderComponent.propTypes = {
  baseUrl: PropTypes.any,
};

export default ImageSliderComponent;
