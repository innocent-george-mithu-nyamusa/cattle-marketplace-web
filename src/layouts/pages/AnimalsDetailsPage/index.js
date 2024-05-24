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
            <ImageSliderComponent baseUrl="https://firebasestorage.googleapis.com/v0/b/livestock-marketplace.appspot.com/o/animals%2Fpigs_whatsapp%20image%202023-11-15%20at%2010.47.14%20am.jpeg?alt=media&token=9a9ed5ed-611c-42f4-8a2d-5111a630cdd5" />
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
