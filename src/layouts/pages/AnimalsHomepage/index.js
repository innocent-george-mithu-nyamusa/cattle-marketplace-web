import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import {
  Avatar,
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
import {
  ExpandMoreSharp,
  Male,
  Female,
  ArrowDropDown,
  Search,
  NotificationsNone,
  Tune,
} from "@mui/icons-material";
import MKTypography from "components/MKTypography";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import AnimalCard from "components/AnimalCard";
import EmptyListItem from "components/EmptyListItem";
import { stringAvatar } from "utils/functions";
import logoCT from "assets/images/logo.png";

import AnimalContext from "_helper/animal";

// TODO:: DELETE THIS LATER

function AnimalsHomepage({ animalType, animalBreed, animalName }) {
  const [filters, setFilters] = useState({
    age: animalType,
    gender: "",
    breed: animalBreed,
    name: animalName,
  });

  const [animalData, setAnimalData] = useState([]);
  const { allAnimals } = useContext(AnimalContext);

  console.log(animalData);
  console.log("all Animals \n" + allAnimals);

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
      <MKBox width="100%" mx="auto" position="relative" zIndex={2}>
        <Grid container>
          {/* Sidebar Containing Grid */}
          <Grid container item xs={12} md={2} lg={2}>
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
              <Link to="/">
                <MKBox
                  component="img"
                  src={logoCT}
                  alt="Livestock Marketplace"
                  maxWidth="175px"
                  m={1}
                />
              </Link>
              <Divider variant="middle" sx={{ width: "100%" }} />
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
          <Grid container item xs={12} md={10} lg={10}>
            {/* Top Navigation */}
            <MKBox
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              width="100%"
              maxHeight="4rem"
              bgColor="white"
              py={2}
              px={0}
            >
              <MKBox justifyContent="flex-end" width="fit-content">
                <MKTypography
                  variant="title"
                  color="dark"
                  sx={{
                    marginLeft: "1rem",
                  }}
                ></MKTypography>
              </MKBox>
              <MKBox display="flex" justifyContent="flex-start" width="fit-content">
                <Paper
                  component="form"
                  sx={{
                    p: "4px",
                    display: "inline-block",
                    alignItems: "center",
                    borderRadius: "1rem",
                    backgroundColor: "#f0f2f5",
                    opacity: "0.6",
                    marginLeft: "1rem",
                    marginRight: "0.5rem",
                  }}
                  elevation={0}
                >
                  <IconButton
                    sx={{ p: "1px", fontSize: "1.5rem", opacity: "0.9", marginBottom: "-0.1rem" }}
                    aria-label="menu"
                  >
                    <Search />
                  </IconButton>
                  <InputBase
                    sx={{ ml: 1, width: "20rem", height: "1.75rem", fontSize: "0.9rem" }}
                    placeholder="Search"
                    inputProps={{ "aria-label": "Search" }}
                  />
                </Paper>
                <IconButton sx={{ p: "1px", fontSize: "1.5rem", opacity: "0.9" }} aria-label="menu">
                  <NotificationsNone />
                </IconButton>
                <Divider
                  orientation="vertical"
                  sx={{ width: "0.1rem", height: "3rem" }}
                  variant="middle"
                />
                <Paper
                  component="form"
                  sx={{
                    p: "4px",
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "1rem",
                    opacity: "0.6",
                    marginRight: "1rem",
                  }}
                  elevation={0}
                >
                  <Avatar
                    {...stringAvatar("Innocent Nyamusa")}
                    sx={{
                      width: 40,
                      height: 40,
                      marginLeft: "0.5rem",
                      marginRight: "0.3rem",
                      padding: "0.2rem",
                    }}
                  />
                  <IconButton
                    sx={{ p: "1px", fontSize: "1.5rem", opacity: "0.9", marginRight: "1rem" }}
                    aria-label="menu"
                  >
                    <MKTypography
                      variant="subtitle"
                      color="dark"
                      sx={{ marginLeft: "0.1rem", fontSize: "0.9rem" }}
                    >
                      Innocent Nyamusa
                    </MKTypography>
                    <ArrowDropDown />
                  </IconButton>
                </Paper>
              </MKBox>
            </MKBox>
            {/* Changing Area  */}
            <MKBox
              sx={{
                padding: "2rem 2rem",
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
                  sx={{
                    width: "15%",
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
                  <Chip variant="primary" label="256" sx={{ marginTop: "-4px" }} />
                </MKBox>

                <MKBox
                  sx={{
                    width: "100%",
                    marginTop: "3rem",
                    position: "absolute",
                    backgroundColor: "#FFFFFF",
                    borderBottomLeftRadius: "27px",
                    borderBottomRightRadius: "27px",
                    borderTopRightRadius: "27px",
                    padding: "2rem",
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
                    {allAnimals.length != 0 && allAnimals != null ? (
                      allAnimals.map((animal, index) => <AnimalCard key={index} />)
                    ) : (
                      <EmptyListItem />
                    )}
                  </Stack>
                </MKBox>
              </MKBox>
            </MKBox>
          </Grid>
        </Grid>
      </MKBox>
    </>
  );
}

AnimalsHomepage.propTypes = {
  props: PropTypes.oneOfType([PropTypes.any], PropTypes.any),
  animalName: PropTypes.string,
  animalType: PropTypes.string,
  animalBreed: PropTypes.string,
};

export default AnimalsHomepage;
