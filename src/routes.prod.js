/**
=========================================================
* - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Navbar.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `name` key is used for the name of the route on the Navbar.
  2. The `icon` key is used for the icon of the route on the Navbar.
  3. The `collapse` key is used for making a collapsible item on the Navbar that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  4. The `route` key is used to store the route location which is used for the react router.
  5. The `href` key is used to store the external links location.
  6. The `component` key is used to store the component of its route.
  7. The `dropdown` key is used to define that the item should open a dropdown for its collapse items .
  8. The `description` key is used to define the description of
          a route under its name.
  9. The `columns` key is used to define that how the content should look inside the dropdown menu as columns,
          you can set the columns amount based on this key.
  10. The `rowsPerColumn` key is used to define that how many rows should be in a column.
*/

// @mui material components
import Icon from "@mui/material/Icon";

// Pages
import AboutUs from "layouts/pages/landing-pages/about-us";
import ContactUs from "layouts/pages/landing-pages/contact-us";

import Homepage from "pages/Homepage";
import AnimalDetailPage from "pages/AnimalDetailsPage";

const routes = [
  {
    name: "Livestock",
    icon: <Icon>dashboard</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "Cattle",
        collapse: [
          {
            name: "mashona",
            route: "/livestock/cattle/mashona",
            component: <Homepage />,
            properties: { animalType: "cattle", animalBreed: "mashona", animalName: "cattle" },
          },
          {
            name: "details",
            route: "/detail",
            component: <AnimalDetailPage />,
            properties: { animalType: "cattle", animalBreed: "hereford", animalName: "cattle" },
          },
          {
            name: "simmental",
            route: "/livestock/cattle/simmental",
            component: <Homepage />,
            properties: { animalType: "cattle", animalBreed: "simmental", animalName: "cattle" },
          },
          {
            name: "aberdeen-angus",
            route: "/livestock/cattle/arbedeen-angus",
            component: <Homepage />,
            properties: { animalType: "cattle", animalBreed: "arbedeen", animalName: "cattle" },
          },
          {
            name: "charolais",
            route: "/livestock/cattle/charolais",
            component: <Homepage />,
            properties: { animalType: "cattle", animalBreed: "charolais", animalName: "cattle" },
          },
        ],
      },
      {
        name: "others",
        collapse: [
          {
            name: "sheep",
            route: "/livestock/cattle/sheep",
            component: <Homepage />,
            properties: { animalType: "sheep", animalBreed: "sheep", animalName: "sheep" },
          },
          {
            name: "goats",
            route: "/livestock/cattle/goats",
            component: <Homepage />,
            properties: { animalType: "goats", animalBreed: "goats", animalName: "goats" },
          },
          {
            name: "pigs",
            route: "/livestock/cattle/pigs",
            component: <Homepage />,
            properties: { animalType: "pigs", animalBreed: "pigs", animalName: "pigs" },
          },
        ],
      },
    ],
  },
  {
    name: "what you need to know",
    icon: <Icon>article</Icon>,
    collapse: [
      {
        name: "getting started",
        description: "See how you can get your livestock with ease.",
        href: "https://www.creative-tim.com/learning-lab/react/quick-start/material-kit/",
      },
      {
        name: "overview",
        description: "Your role in getting the livestock you purchased, see the process",
        href: "https://www.creative-tim.com/learning-lab/react/colors/material-kit/",
      },
      {
        name: "innovation",
        description: "Explore our innovative strategy on how you can make a purchase from anywhere",
        href: "https://www.creative-tim.com/learning-lab/react/alerts/material-kit/",
      },
      {
        name: "requirements",
        description:
          "Check on information we need from you to transfer to you ,  your purchased stock.",
        href: "https://www.creative-tim.com/learning-lab/react/datepicker/material-kit/",
      },
    ],
  },
  {
    name: "information",
    icon: <Icon>info</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "info",
        collapse: [
          {
            name: "about us",
            route: "/pages/landing-pages/about-us",
            component: <AboutUs />,
          },
          {
            name: "contact us",
            route: "/pages/landing-pages/contact-us",
            component: <ContactUs />,
          },
        ],
      },
    ],
  },
];

export default routes;
