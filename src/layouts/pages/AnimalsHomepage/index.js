import AnimalsHomepage from "pages/LandingPages/Homepage";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Autocomplete,
  Button,
  Card,
  CardHeader,
  CardMedia,
  CardActions,
  CardContent,
  IconButton,
  Chip,
  Divider,
  List,
  TextField,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import { ExpandMoreSharp, Male, Female, MoreVert } from "@mui/icons-material";
import MKTypography from "components/MKTypography";
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
// import { customAnimalData } from "utils/functions";
import logoCT from "assets/images/logo.png";
// TODO:: DELETE THIS LATER
import cow from "assets/images/animals/cattle/angus/arbedeen-angus-male.jpg";

function AnimalsHomepage({ animalType, animalBreed, animalName }) {
  const [filters, setFilters] = useState({
    age: animalType,
    gender: "",
    breed: animalBreed,
    name: animalName,
  });

  const [animalData, setAnimalData] = useState([]);

  console.log(animalData);

  useEffect(() => {
    async function fetchData() {
      const data = [];
      setAnimalData(data);
    }

    fetchData();
  }, [filters.name]);

  const addFilters = (filter) => {
    setFilters((state) => [...state, filter]);
  };

  const addAgeFilter = (e) => {
    e.preventDefault();
    addFilters({ age: e.target.value });
  };

  const addMaleGenderFilter = (e) => {
    e.preventDefault();
    addFilters({ gender: "male" });
  };
  const addFemaleGenderFilter = (e) => {
    e.preventDefault();
    addFilters({ gender: "female" });
  };

  const addBreedFilter = (e) => {
    e.preventDefault();
    addFilters({ breed: e.target.value });
  };

  const addAnimalNameFilter = (e) => {
    e.preventDefault();
    addFilters({ name: e.target.value });
  };

  return (
    <>
      <MKBox px={1} width="100%" minHeight="100vh" mx="auto" position="relative" zIndex={2}>
        <Grid container spacing={2}>
          <Grid container item xs={12} md={12} lg={12}>
            <MKBox
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              width="100%"
              p={2}
            >
              <Link to="/">
                <MKBox
                  component="img"
                  src={logoCT}
                  alt="Livestock Marketplace"
                  maxWidth="175px"
                  m={1}
                />
              </Link>
              <MKBox justifyContent="flex-end">
                <MKInput
                  type="text"
                  name="search"
                  placeholder="search here"
                  sx={{
                    borderRadius: "50%",
                  }}
                />
              </MKBox>
            </MKBox>
          </Grid>
          <Grid container item xs={12} md={3} lg={3}>
            <MKBox
              display="flex"
              flexDirection="column"
              alignItems="start"
              justifyContent="start"
              width="100%"
              height="fit-content"
              sx={{ boxShadow: 1, borderRadius: 1 }}
              px={3}
              py={2}
            >
              <MKTypography variant="h6" py={1}>
                Animal Filters
              </MKTypography>
              <MKTypography variant="body2" my={1}>
                Age Phases
              </MKTypography>
              <Accordion
                sx={{
                  width: "100%",
                }}
              >
                <AccordionSummary expandIcon={<ExpandMoreSharp />} aria-controls="panel1a-content">
                  <MKTypography variant="body2">All available age phases</MKTypography>
                </AccordionSummary>
                <AccordionDetails py={1}>
                  <Autocomplete
                    options={["heifer", "young"]}
                    renderInput={(params) => <TextField {...params} label="Filter by age" />}
                  />
                  <Button variant="text" onClick={addAgeFilter}>
                    Add
                  </Button>
                </AccordionDetails>
              </Accordion>
              <Divider variant="middle" sx={{ width: "100%" }} />
              <MKTypography variant="body2" my={1}>
                Gender
              </MKTypography>
              <List
                sx={{
                  width: "100%",
                }}
              >
                <ListItemButton onClick={addMaleGenderFilter}>
                  <ListItemIcon>
                    <Male />
                  </ListItemIcon>
                  <ListItemText secondary="male" />
                </ListItemButton>
                <ListItemButton onClick={addFemaleGenderFilter}>
                  <ListItemIcon>
                    <Female />
                  </ListItemIcon>
                  <ListItemText secondary="female" />
                </ListItemButton>
              </List>

              <Divider variant="middle" sx={{ width: "100%" }} />
              <MKTypography variant="body2" my={1}>
                Breed
              </MKTypography>
              <Accordion
                sx={{
                  width: "100%",
                }}
              >
                <AccordionSummary expandIcon={<ExpandMoreSharp />} aria-controls="panel1a-content">
                  <MKTypography variant="body2">select breed</MKTypography>
                </AccordionSummary>
                <AccordionDetails>
                  <Autocomplete
                    options={["breed1", "breed2"]}
                    renderInput={(params) => <TextField {...params} label="filter by breed" />}
                  />
                  <Button variant="text" onClick={addBreedFilter}>
                    Add
                  </Button>
                </AccordionDetails>
              </Accordion>
              <Divider variant="middle" sx={{ width: "100%" }} />
              <MKTypography variant="body2" my={1}>
                Name
              </MKTypography>
              <Accordion
                sx={{
                  width: "100%",
                }}
              >
                <AccordionSummary expandIcon={<ExpandMoreSharp />} aria-controls="panel1a-content">
                  <MKTypography variant="body2">select animal</MKTypography>
                </AccordionSummary>
                <AccordionDetails>
                  <Autocomplete
                    options={["cattle", "sheep", "goats", "chickens", "pigs"]}
                    renderInput={(params) => <TextField {...params} label="filter by animal" />}
                  />
                  <Button variant="text" onClick={addAnimalNameFilter}>
                    Add
                  </Button>
                </AccordionDetails>
              </Accordion>
            </MKBox>
          </Grid>
          <Grid container item xs={12} md={9} lg={9}>
            <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap">
              <Card sx={{ maxWidth: "31%", borderRadius: "10px", height: "fit-content" }}>
                <CardHeader
                  avatar={
                    <Stack direction="row" spacing={2}>
                      <Chip variant="outlined" label="auction" />
                      <Chip variant="outlined" label="available" />
                    </Stack>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVert />
                    </IconButton>
                  }
                />
                <CardMedia component="img" width="100" image={cow} alt="Cow" />
                <CardContent>
                  <Stack direction="row" spacing={4}>
                    <MKTypography variant="body2" sx={{ fontWeight: 600 }}>
                      Breed:
                    </MKTypography>
                    <MKTypography variant="body2">Mashona</MKTypography>
                  </Stack>
                  <Stack direction="row" spacing={4}>
                    <MKTypography variant="body2" sx={{ fontWeight: 600 }}>
                      Age:
                    </MKTypography>
                    <MKTypography variant="body2">1 year 2 months</MKTypography>
                  </Stack>
                  <Stack direction="column" spacing={1}>
                    <MKTypography variant="body2" sx={{ fontWeight: 600 }}>
                      Physical Description:
                    </MKTypography>
                    <MKTypography variant="body2">
                      Provide a description of the cow&apos;s physical appearance, including its
                      color, size, weight, and any notable markings or features. This helps
                      potential buyers visualize the animal.
                    </MKTypography>
                  </Stack>
                </CardContent>
                <CardActions>
                  <Button>View Details</Button>
                  <Button>Book inspection</Button>
                  <Button>Add to cart </Button>
                </CardActions>
              </Card>
              <Card
                sx={{
                  maxWidth: "31%",
                  borderRadius: "10px",
                  height: "fit-content",
                }}
              >
                <CardHeader
                  avatar={
                    <Stack direction="row" spacing={2}>
                      <Chip variant="outlined" label="auction" />
                      <Chip variant="outlined" label="available" />
                    </Stack>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVert />
                    </IconButton>
                  }
                />
                <CardMedia component="img" width="100" image={cow} alt="Cow" />
                <CardContent>
                  <Stack direction="row" spacing={4}>
                    <MKTypography variant="body2" sx={{ fontWeight: 600 }}>
                      Breed:
                    </MKTypography>
                    <MKTypography variant="body2">Mashona</MKTypography>
                  </Stack>
                  <Stack direction="row" spacing={4}>
                    <MKTypography variant="body2" sx={{ fontWeight: 600 }}>
                      Age:
                    </MKTypography>
                    <MKTypography variant="body2">1 year 2 months</MKTypography>
                  </Stack>
                  <Stack direction="column" spacing={1}>
                    <MKTypography variant="body2" sx={{ fontWeight: 600 }}>
                      Physical Description:
                    </MKTypography>
                    <MKTypography variant="body2">
                      Provide a description of the cow&apos s physical appearance, including its
                      color, size, weight, and any notable markings or features. This helps
                      potential buyers visualize the animal.
                    </MKTypography>
                  </Stack>
                </CardContent>
                <CardActions>
                  <Button> View Details </Button>
                  <Button> Book inspection </Button>
                  <Button> Add to cart </Button>
                </CardActions>
              </Card>
            </Stack>
          </Grid>
        </Grid>
      </MKBox>
    </>
  );
}

AnimalsHomepage.propTypes = {
  props: PropTypes.oneOfType([PropTypes.string], PropTypes.string),
  animalName: PropTypes.string,
  animalType: PropTypes.string,
  animalBreed: PropTypes.string,
};
export default AnimalsHomepage;
