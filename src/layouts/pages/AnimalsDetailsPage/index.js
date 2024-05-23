import Grid from "@mui/material/Grid";
import React, { useContext } from "react";
import ImageSliderComponent from "components/ImageSliderComponent";
import MKBox from "components/MKBox";
// import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import AnimalContext from "_helper/animal";
// import routes from "routes.prod";

function AnimalDetailsPage() {
  const { selectedAnimal } = useContext(AnimalContext);
  console.log(selectedAnimal);

  return (
    <>
      <MKBox width="100%" mx="auto" position="relative" zIndex={2}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={6}>
            <ImageSliderComponent baseUrl="https://" />
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
          >
            other side{" "}
          </Grid>
        </Grid>
      </MKBox>
    </>
  );
}

export default AnimalDetailsPage;
