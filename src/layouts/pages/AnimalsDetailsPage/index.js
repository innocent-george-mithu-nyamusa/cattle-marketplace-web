import React, { useContext, useState } from "react";
import { Grid, Rating, Divider } from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";
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
            <MKTypography
              variant="button"
              mt={{ xs: 1, sm: 1.5, md: 1, lg: 1.5 }}
              textTransform="uppercase"
              color="text"
              itemAlign={{ xs: "center" }}
            >
              animal breed
            </MKTypography>
            <MKTypography
              variant="h1"
              mb={{ xs: 1, sm: 1.5, md: 1, lg: 1.5 }}
              textTransform="capitalize"
            >
              Animal name
            </MKTypography>
            <MKBox
              my={0.5}
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
                sx={{ marginRight: "calc(100%/20)", verticalAlign: "top" }}
                p={1}
              />
              <MKTypography variant="subtitle">75 Reviews</MKTypography>
            </MKBox>
            <MKTypography variant="subtitle" my={0.5} textTransform="capitalize">
              is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
              the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make a type specimen book. It has survived
              not only five centuries, but also the leap into electronic typesetting, remaining
              essentially unchanged. It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with desktop publishing
              software like Aldus PageMaker including versions of Lorem Ipsum.
            </MKTypography>

            <MKBox
              sx={{
                display: "flex",
                alignItems: "center",
                border: "none",
                // borderColor: "divider",
                borderRadius: 1,
                color: "text.secondary",
                width: "fit-content",
                "& svg": {
                  m: 1,
                },
                "& hr": {
                  mx: 0.5,
                },
              }}
              my={2}
              // p={1}
            >
              <MKBox flexDirection="column" mx={0.5}>
                <MKTypography variant="button" textTransform="upprecase">
                  Weight
                </MKTypography>
                <MKTypography fontWeight="bold">1200 kg</MKTypography>
              </MKBox>
              <Divider orientation="vertical" variant="middle" height="calc(100%/ 3)" />
              <MKBox flexDirection="column" mx={1}>
                <MKTypography variant="button" textTransform="upprecase">
                  Age
                </MKTypography>
                <MKTypography fontWeight="bold">2 years</MKTypography>
              </MKBox>
              <Divider orientation="vertical" variant="middle" height="calc(100%/ 3)" />
              <MKBox flexDirection="column" mx={1}>
                <MKTypography variant="button" textTransform="upprecase">
                  Color
                </MKTypography>
                <MKTypography fontWeight="bold">Brown And White</MKTypography>
              </MKBox>
            </MKBox>

            <MKTypography variant="h1" py={1} mt={1}>
              $145
            </MKTypography>
            <MKBox
              my={2}
              sx={{
                flexDirection: "row",
                alignItems: "center",
                display: "flex",
              }}
            >
              <MKButton
                type="submit"
                variant="gradient"
                color="warning"
                sx={{ flex: 1, margin: "0 1rem" }}
              >
                Add to Cart&nbsp; <AddShoppingCart />
              </MKButton>
              <MKButton variant="gradient" sx={{ flex: 1, margin: "0 1rem" }}>
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
