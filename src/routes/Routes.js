import Homepage from "pages/Homepage";
import AnimalDetailPage from "pages/AnimalDetailsPage";

const Routes = [
  {
    name: "mashona",
    route: "/livestock/cattle/mashona",
    component: <Homepage />,
    properties: { animalType: "cattle", animalBreed: "mashona", animalName: "cattle" },
  },
  {
    name: "details",
    route: "/details",
    component: <AnimalDetailPage />,
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
    route: "/:livestock/:cattle/",
    component: <AnimalDetailPage />,
  },
];

export default Routes;
