import React, { useContext, useState } from "react";
import { Grid, Rating } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
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
      <MKBox position="fixed" top="0.5rem" width="100%" zIndex={2}>
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
      <MKBox width="100%" mt="8rem" position="relative">
        <Grid container alignItems="center">
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6} p={{ xs: 1, lg: 2, xl: 2 }}>
            <ImageSliderComponent baseUrl="https://firebasestorage.googleapis.com/v0/b/livestock-marketplace.appspot.com/o/animals%2Fpigs_whatsapp%20image%202023-11-15%20at%2010.47.14%20am.jpeg?alt=media&token=9a9ed5ed-611c-42f4-8a2d-5111a630cdd5" />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            ml={{ xs: "auto" }}
            mr={{ xs: "auto" }}
            sx={{ display: "flex", flexDirection: "column", justifyContent: "flex-start" }}
            p={{ xs: 1, lg: 2, xl: 2 }}
          >
            <MKTypography variant="h1" my={{ xs: 1, sm: 1.5, md: 1, lg: 1.5 }}>
              Animal Name
            </MKTypography>
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
                sx={{ marginRight: "calc(100%/20)" }}
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
                alignItems: "center",
              }}
            >
              <MKButton
                type="submit"
                variant="gradient"
                color="warning"
                sx={{ marginRight: 2 }}
                flex={{ xs: 1 }}
              >
                Add to Your Cart&nbsp; <AddShoppingCartIcon />
              </MKButton>
              <MKButton variant="gradient" width={{ xs: 100 }}>
                add to wishlist
              </MKButton>
            </MKBox>
          </Grid>
        </Grid>
      </MKBox>
    </>
  );
}

export default AnimalDetailsPage;
