import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Autocomplete,
  Button,
  IconButton,
  Chip,
  Divider,
  List,
  TextField,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Paper,
  InputBase,
} from "@mui/material";
import { ExpandMoreSharp, Male, Female, ArrowDropDown, Search, Tune } from "@mui/icons-material";
import MKTypography from "components/MKTypography";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import AnimalCard from "components/AnimalCard";
import MainTopNavigation from "components/MainTopNavigation";
import EmptyListItem from "components/EmptyListItem";
import logoCT from "assets/images/logo.png";

import AnimalContext from "_helper/animal";

// TODO:: DELETE THIS LATER

function AnimalsHomepage({ animalType, animalBreed, animalName }) {
  const { allAnimals, handleFetchData } = useContext(AnimalContext);
  const [filters, setFilters] = useState({
    age: animalType,
    gender: "",
    breed: animalBreed,
    name: animalName,
  });

  const [animalData, setAnimalData] = useState([]);

  console.log(animalData, filters);

  useEffect(() => {
    async function fetchData() {
      const data = await handleFetchData();
      setAnimalData(data);
    }

    fetchData();
  }, []);

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
    <Grid container>
      {/* Sidebar Containing Grid */}
      <Grid item container xs={0} sm={3} md={3} lg={2} sx={{ justifyContent: "center" }}>
        <Link
          to="/"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            width: "fill-available",
          }}
        >
          <MKBox
            component="img"
            width="fill-available"
            src={logoCT}
            alt="Livestock Marketplace"
            maxWidth="175px"
            m={1}
          />
        </Link>
        <MKBox
          display={{ xs: "none", sm: "flex" }}
          flexDirection="column"
          alignItems="start"
          justifyContent="start"
          width="100%"
          height="fit-content"
          sx={{ boxShadow: 1, borderRadius: 1 }}
          px={1}
          py={0.1}
        >
          <MKTypography variant="h4" py={1} mt={4}>
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
      <Grid item container xs={12} sm={9} md={9} lg={10}>
        {/* Top Navigation */}
        <MainTopNavigation />
        {/* Changing Area  */}
        <MKBox
          padding={{ xs: "1rem 0", sm: "1rem 1rem", md: "rem 1.5rem", lg: "2rem 2rem" }}
          sx={{
            width: "100vw",
            height: "fill-available",
            minHeight: "75vh",
          }}
        >
          <MKBox
            sx={{
              position: "relative",
            }}
          >
            <MKBox
              display={{ xs: "none", sm: "none", md: "block" }}
              width={{ xs: 0, sm: 0, md: "40%", lg: "15%" }}
              sx={{
                height: "3rem",
                float: "left",
                borderBottom: "3rem solid white",
                borderRight: "3rem solid transparent",
                borderTopLeftRadius: "27px",
                textAlign: "center",
              }}
            >
              <MKBox sx={{ display: "inline-block", paddingTop: "8px", marginRight: "0.3rem" }}>
                All
              </MKBox>
              <Chip variant="primary" label={allAnimals.length ?? 0} sx={{ marginTop: "-4px" }} />
            </MKBox>
            <MKBox
              borderTopLeftRadius={{ xs: "27px", sm: "27px", md: "27px" }}
              marginTop={{ xs: "0px", sm: "0.5rem", md: "3rem" }}
              borderRadius={{ xs: "27px", sm: "27px", md: "0 27px 27px 27px" }}
              padding={{ xs: "0.5rem", sm: "1rem", md: "1.5" }}
              sx={{
                width: "100%",
                position: "absolute",
                backgroundColor: "#FFFFFF",
              }}
            >
              <MKBox
                sx={{
                  display: "flex",
                  marginBottom: "1rem",
                }}
              >
                <Paper
                  component="form"
                  sx={{
                    p: "4px",
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "1rem",
                    backgroundColor: "white",
                    opacity: "0.6",
                    width: "fill-available",
                    marginRight: "2rem",
                    border: "0.1rem solid #344767",
                  }}
                  elevation={0}
                >
                  <IconButton
                    sx={{
                      p: "1px",
                      fontSize: "1.5rem",
                      opacity: "0.9",
                    }}
                    aria-label="menu"
                  >
                    <Search />
                  </IconButton>
                  <InputBase
                    sx={{ ml: 1, width: "92%", height: "1.75rem", fontSize: "0.9rem" }}
                    placeholder="Search"
                    inputProps={{ "aria-label": "Search" }}
                  />
                  <IconButton
                    sx={{
                      p: "1px",
                      fontSize: "1.5rem",
                      opacity: "0.9",
                      marginLeft: "2rem",
                      marginRight: "0.5rem",
                    }}
                    aria-label="menu"
                  >
                    <Tune />
                  </IconButton>
                </Paper>
                <MKButton
                  variant="outlined"
                  color="light"
                  circular={true}
                  endIcon={<ArrowDropDown />}
                  fontSize={{ sx: "small" }}
                  sx={{
                    borderColor: "#344767",
                    color: "#344767 !important",
                  }}
                >
                  Actions
                </MKButton>
              </MKBox>
              {/* All Animals List Area  */}
              <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap" height="100%">
                {allAnimals != null ? (
                  allAnimals.map((animal, index) => <AnimalCard key={index} {...animal} />)
                ) : (
                  <EmptyListItem />
                )}
              </Stack>
            </MKBox>
          </MKBox>
        </MKBox>
      </Grid>
    </Grid>
  );
}

AnimalsHomepage.propTypes = {
  props: PropTypes.oneOfType([PropTypes.any], PropTypes.any),
  animalName: PropTypes.string,
  animalType: PropTypes.string,
  animalBreed: PropTypes.string,
};

export default AnimalsHomepage;
