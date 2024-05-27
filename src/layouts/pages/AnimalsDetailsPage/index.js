import { Grid, Rating } from "@mui/material";
import React, { useContext, useState } from "react";
import ImageSliderComponent from "components/ImageSliderComponent";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import AnimalContext from "_helper/animal";
import routes from "routes.prod";

function AnimalDetailsPage() {
  const { selectedAnimal } = useContext(AnimalContext);
  const [value, setValue] = useState(0);
  console.log(selectedAnimal);

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
      <MKBox width="100%" mt="8rem" position="relative" zIndex={2}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} sm={12} md={5} lg={6} xl={6} p={{ lg: "20px", xl: "20px" }}>
            <ImageSliderComponent baseUrl="https://firebasestorage.googleapis.com/v0/b/livestock-marketplace.appspot.com/o/animals%2Fpigs_whatsapp%20image%202023-11-15%20at%2010.47.14%20am.jpeg?alt=media&token=9a9ed5ed-611c-42f4-8a2d-5111a630cdd5" />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={7}
            lg={6}
            xl={6}
            ml={{ xs: "auto" }}
            mr={{ xs: "auto" }}
            sx={{ display: "flex", flexDirection: "column", justifyContent: "flex-start" }}
          >
            <MKTypography variant="h1">Animal Name</MKTypography>
            <MKTypography variant="subtitle" mt={1}>
              Slight description on the animal
            </MKTypography>
            <MKBox
              my={2}
              sx={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                size="large"
                mr={2}
                p={1}
              />
              <MKTypography variant="subtitle">75 Reviews</MKTypography>
            </MKBox>
            <MKTypography variant="h1" py={1} mt={2}>
              $145
            </MKTypography>
            <MKBox
              my={2}
              sx={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <MKButton type="submit" variant="gradient" color="info">
                Send Message
              </MKButton>
              <MKButton type="submit" variant="gradient" color="info">
                Send Message
              </MKButton>
            </MKBox>
          </Grid>
        </Grid>
      </MKBox>
    </>
  );
}

export default AnimalDetailsPage;
