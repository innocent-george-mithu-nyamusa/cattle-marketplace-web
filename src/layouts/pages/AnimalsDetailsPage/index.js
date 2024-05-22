import React, { useEffect, useRef, useState, useContext } from "react";

import MKBox from "components/MKBox";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import AnimalContext from "_helper/animal";
import routes from "routes.prod";

function AnimalDetailsPage() {
  const { selectedAnimal, isVertical } = useContext(AnimalContext);
  const [state, setState] = useState({ nav1: null, nav2: null });
  const slider1 = useRef();
  const slider2 = useRef();
  useEffect(() => {
    setState({
      nav1: slider1.current,
      nav2: slider2.current,
    });
  }, []);
  const { nav1, nav2 } = state;

  return (
    <>
      <MKBox position="fixed" top="0.5rem" width="100%">
        <DefaultNavbar
          routes={routes}
          action={{
            type: "external",
            route: "https://www.creative-tim.com/product/material-kit-react",
            label: "free download",
            color: "info",
          }}
        />
      </MKBox>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} lg={6}>
          <MKBox sx={{ width: "100%" }}>
            <Grid container xs={12} lg={12}>
              <Grid item xs={12} lg={9}>
                <Slider asNavFor={nav2} arrows={false} ref={(slider) => (slider1.current = slider)}>
                  {selectedAnimal ? (
                    selectedAnimal.variants.map((imageAddress, imageAddresIndex) => (
                      <Image
                        attrImage={{
                          src: imageAddress,
                          alt: "",
                          className: "img-fluid",
                        }}
                        key={imageAddresIndex}
                      />
                    ))
                  ) : (
                    <Media src={selectedAnimal.img} alt="" className="img-fluid" />
                  )}
                </Slider>
              </Grid>
              <Grid item xs={12} lg={3}>
                <Slider
                  asNavFor={nav1}
                  ref={(slider) => (slider2.current = slider)}
                  slidesToShow={3}
                  speed={500}
                  swipeToSlide={true}
                  focusOnSelect={true}
                  vertical={isVertical ? false : true}
                >
                  {selectedAnimal &&
                    selectedAnimal.variants.map((imageAddress, imageAddresIndex) => (
                      <Image
                        attrImage={{
                          src: imageAddress,
                          alt: "",
                          className: "img-fluid",
                        }}
                        key={imageAddresIndex}
                      />
                    ))}
                </Slider>
              </Grid>
            </Grid>
          </MKBox>
        </Grid>
        <Grid
          item
          xs={12}
          sm={10}
          md={7}
          lg={6}
          xl={4}
          ml={{ xs: "auto", lg: 6 }}
          mr={{ xs: "auto", lg: 6 }}
        ></Grid>
      </Grid>
    </>
  );
}

export default AnimalDetailsPage;
