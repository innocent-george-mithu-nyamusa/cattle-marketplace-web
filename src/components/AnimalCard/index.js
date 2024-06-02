import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardHeader,
  CardMedia,
  CardActions,
  CardContent,
  IconButton,
  Chip,
  Stack,
} from "@mui/material";
import { MoreVert } from "@mui/icons-material";

import PropTypes from "prop-types";

import MKTypography from "components/MKTypography";
import { truncateString } from "utils/functions";
import AnimalContext from "_helper/animal";
// import cow from "assets/images/animals/cattle/angus/arbedeen-angus-male.jpg";

function AnimalCard({ id, img, animalBreed, animalType, animalName, animalYearsAge, description }) {
  const { pickSelectedItem } = useContext(AnimalContext);
  const navigate = useNavigate();

  const handleNavigation = () => {
    pickSelectedItem(id);
    navigate(`${process.env.PUBLIC_URL}/${animalType}/${animalName}`);
  };
  //1.

  const handleBookingInspection = () => {
    console.log("Sucess book for inspection", id);
  };

  const handleAddToCart = () => {
    console.log("added to cart ", id);
  };

  return (
    <Card
      sx={{
        borderRadius: "10px",
        height: "fit-content",
        backgroundColor: "#f0f2f5",
      }}
      maxwidth={{
        xs: "100%",
        md: "calc(100%/4)",
        lg: "calc(100%/4)",
        xl: "calc(100%/4)",
      }}
    >
      <CardHeader
        avatar={
          <Stack direction="row" spacing={2}>
            <Chip variant="primary" label="auction" />
            <Chip variant="success" color="primary" label="available" />
          </Stack>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
      />
      <CardMedia component="img" width="100" image={img} alt={`image of ${animalBreed}`} />
      <CardContent>
        <Stack direction="row" spacing={4} justifyContent="space-between">
          <MKTypography variant="body2" sx={{ fontWeight: 400 }}>
            Breed:
          </MKTypography>
          <MKTypography variant="body2" sx={{ fontWeight: 200 }}>
            {animalBreed}
          </MKTypography>
        </Stack>
        <Stack direction="row" spacing={4} justifyContent="space-between">
          <MKTypography variant="body2" sx={{ fontWeight: 400 }}>
            Age:
          </MKTypography>
          <MKTypography variant="body2" sx={{ fontWeight: 200 }}>
            {animalYearsAge} Years
          </MKTypography>
        </Stack>
        <Stack direction="column" spacing={1}>
          <MKTypography variant="body2" sx={{ fontWeight: 400 }}>
            Description:
          </MKTypography>
          <MKTypography variant="body2" sx={{ fontWeight: 200 }}>
            {truncateString(description, 70, true)}
          </MKTypography>
        </Stack>
      </CardContent>
      <CardActions>
        <Button onClick={handleNavigation}>View Details</Button>
        <Button onClick={handleBookingInspection}>Book inspection</Button>
        <Button onClick={handleAddToCart}>Add cart </Button>
      </CardActions>
    </Card>
  );
}

AnimalCard.propTypes = {
  id: PropTypes.string,
  img: PropTypes.string,
  animalBreed: PropTypes.string,
  animalType: PropTypes.string,
  animalName: PropTypes.string,
  animalYearsAge: PropTypes.number,
  description: PropTypes.string,
};

export default AnimalCard;
