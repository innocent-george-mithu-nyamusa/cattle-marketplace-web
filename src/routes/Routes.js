import Homepage from "pages/Homepage";
const Routes = [
  {
    name: "mashona",
    route: "/livestock/cattle/mashona",
    component: <Homepage />,
    properties: { animalType: "cattle", animalBreed: "mashona", animalName: "cattle" },
  },
  {
    name: "brahman",
    route: "/livestock/cattle/brahman",
    component: <Homepage />,
    properties: { animalType: "cattle", animalBreed: "brahman", animalName: "cattle" },
  },
  {
    name: "hereford",
    route: "/livestock/cattle/hereford",
    component: <Homepage />,
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
];

export default Routes;
