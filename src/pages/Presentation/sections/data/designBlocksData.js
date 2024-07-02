const imagesPrefix =
  "https://raw.githubusercontent.com/innocent-george-mithu-nyamusa/cattle-marketplace-web/main/src/assets/images/animals";

// Cattle
const calf = `${imagesPrefix}/cattle/angus/aberdeen-angus-calf.jpg`;
const angusMale = `${imagesPrefix}/cattle/angus/arbedeen-angus-male.jpg`;
const angusFemale = `${imagesPrefix}/cattle/angus/aberdeen-angus-female.jpg`;

const brahmanCalf = `${imagesPrefix}/cattle/brahman/brahman-calf.jpg`;
const brahmanMale = `${imagesPrefix}/cattle/brahman/brahman-male.jpg`;
const brahmanFemale = `${imagesPrefix}/cattle/brahman/brahman-female.jpg`;

const chrolaisCalf = `${imagesPrefix}/cattle/chrolais/chrolais-calf.jpg`;
const chrolaisMale = `${imagesPrefix}/cattle/chrolais/chrolais-male.jpg`;
const chrolaisFemale = `${imagesPrefix}/cattle/chrolais/chrolais-female.jpg`;

const herefordCalf = `${imagesPrefix}/cattle/hereford/hereford-calf.jpg`;
const herefordMale = `${imagesPrefix}/cattle/hereford/hereford-male.jpg`;
const herefordFemale = `${imagesPrefix}/cattle/hereford/hereford-female.jpg`;

const mashonaCalf = `${imagesPrefix}/cattle/mashona/mashona-calf.jpg`;
const mashonaMale = `${imagesPrefix}/cattle/mashona/mashona-male.jpg`;
const mashonaFemale = `${imagesPrefix}/cattle/mashona/mashona-female.jpg`;

// Goats
const boerKid = `${imagesPrefix}/goats/boer/boer-kid.jpg`;
const boerMale = `${imagesPrefix}/goats/boer/boer-male.jpg`;
const boerFemale = `${imagesPrefix}/goats/boer/boer-female.jpg`;

const kalahariRedFemale = `${imagesPrefix}/goats/kalahari-red/kalahari-red-female.jpg`;
const kalahariRedMale = `${imagesPrefix}/goats/kalahari-red/kalahari-red-male.jpg`;
const kalahariRedKid = `${imagesPrefix}/goats/kalahari-red/kalahari-red-kid.jpg`;

const mashonaGoatFemale = `${imagesPrefix}/goats/mashona/mashona-goat.jpg`;

const saanenFemale = `${imagesPrefix}/goats/saanen/saanen-female.jpg`;
const saanenMale = `${imagesPrefix}/goats/saanen/saanen-male.jpg`;
const saanenKid = `${imagesPrefix}/goats/saanen/saanen-kid.jpg`;

const toggenburgKid = `${imagesPrefix}/goats/toggenburg/toggenburg-kid.jpg`;
const toggenburgMale = `${imagesPrefix}/goats/toggenburg/toggenburg-male.jpg`;
const toggenburgFemale = `${imagesPrefix}/goats/toggenburg/toggenburg-female.jpg`;

// Pigs
const durocPiglet = `${imagesPrefix}/pigs/duroc/duroc-piglet.jpg`;
const durocFemale = `${imagesPrefix}/pigs/duroc/duroc-female.jpg`;

const hampshirePiglet = `${imagesPrefix}/pigs/hampshire/hampshire-piglet.jpg`;
const hampshireFemale = `${imagesPrefix}/pigs/hampshire/hampshire-female.jpg`;
const hampshireMale = `${imagesPrefix}/pigs/hampshire/hampshire-male.jpg`;

const landracePiglet = `${imagesPrefix}/pigs/landrace/landrace-piglet.jpg`;
const landraceMale = `${imagesPrefix}/pigs/landrace/landrace-male.jpg`;
const landraceFemale = `${imagesPrefix}/pigs/landrace/landrace-female.jpg`;

const largeWhiteFemale = `${imagesPrefix}/pigs/large-white/large-white-female.jpg`;
const largeWhitePiglet = `${imagesPrefix}/pigs/large-white/large-white-piglet.jpg`;
const largeWhiteMale = `${imagesPrefix}/pigs/large-white/large-white-male.jpg`;

const pietrainFemale = `${imagesPrefix}/pigs/pietrain/pietrain-female.jpg`;
const pietrainMale = `${imagesPrefix}/pigs/pietrain/pietrain-male.jpg`;
const pietrainPiglet = `${imagesPrefix}/pigs/pietrain/pietrain-piglet.jpg`;

export default [
  {
    title: "Cattle Breeds",
    description: "A careful selection of cattle breeds found in Zimbabwe.",
    items: [
      {
        image: `${calf}`,
        name: "Aberdeen Angus Calf",
        count: 10,
        route: "/sections/page-sections/page-headers",
        mobile_small: "block",
        mobile_large: "block",
        tablet: "block",
        small_laptop: "block",
        lg_laptop: "block",
        xl_desktop: "block",
      },
      {
        image: `${angusMale}`,
        name: "Aberdeen Angus Male",
        count: 14,
        route: "/sections/page-sections/features",
        mobile_small: "block",
        mobile_large: "block",
        tablet: "block",
        small_laptop: "block",
        lg_laptop: "block",
        xl_desktop: "block",
      },
      {
        image: `${angusFemale}`,
        name: "Aberdeen Angus Female",
        count: 8,
        mobile_small: "block",
        mobile_large: "block",
        tablet: "block",
        small_laptop: "block",
        lg_laptop: "block",
        xl_desktop: "block",
      },
      {
        image: `${brahmanCalf}`,
        name: "Brahman Calf",
        count: 1,
        mobile_small: "none",
        mobile_large: "none",
        tablet: "block",
        small_laptop: "block",
        lg_laptop: "block",
        xl_desktop: "block",
      },
      {
        image: `${brahmanMale}`,
        name: "Brahman Male",
        count: 11,
        mobile_small: "none",
        mobile_large: "none",
        tablet: "block",
        small_laptop: "block",
        lg_laptop: "block",
        xl_desktop: "block",
      },
      {
        image: `${brahmanFemale}`,
        name: "Brahman Female",
        count: 11,
        mobile_small: "none",
        mobile_large: "none",
        tablet: "block",
        small_laptop: "block",
        lg_laptop: "block",
        xl_desktop: "block",
      },
      {
        image: `${chrolaisCalf}`,
        name: "Chrolais Calf",
        count: 6,
        mobile_small: "none",
        mobile_large: "none",
        tablet: "block",
        small_laptop: "block",
        lg_laptop: "block",
        xl_desktop: "block",
      },
      {
        image: `${chrolaisMale}`,
        name: "Chrolais Male",
        count: 3,
        mobile_small: "none",
        mobile_large: "none",
        tablet: "block",
        small_laptop: "block",
        lg_laptop: "block",
        xl_desktop: "block",
      },
      {
        image: `${chrolaisFemale}`,
        name: "Chrolais Female",
        count: 8,
        mobile_small: "none",
        mobile_large: "none",
        tablet: "block",
        small_laptop: "block",
        lg_laptop: "block",
        xl_desktop: "block",
      },
      {
        image: `${herefordCalf}`,
        name: "Hereford Calf",
        count: 6,
        mobile_small: "none",
        mobile_large: "none",
        tablet: "block",
        small_laptop: "block",
        lg_laptop: "block",
        xl_desktop: "block",
      },
      {
        image: `${herefordMale}`,
        name: "Hereford Male",
        count: 4,
        mobile_small: "none",
        mobile_large: "none",
        tablet: "block",
        small_laptop: "block",
        lg_laptop: "block",
        xl_desktop: "block",
      },
      {
        image: `${herefordFemale}`,
        name: "Hereford Female",
        count: 10,
        mobile_small: "none",
        mobile_large: "none",
        tablet: "block",
        small_laptop: "block",
        lg_laptop: "block",
        xl_desktop: "block",
      },
      {
        image: `${mashonaCalf}`,
        name: "Mashona Calf",
        count: 10,
        mobile_small: "none",
        mobile_large: "none",
        tablet: "block",
        small_laptop: "block",
        lg_laptop: "block",
        xl_desktop: "block",
      },
      {
        image: `${mashonaMale}`,
        name: "Mashona Male",
        count: 9,
        mobile_small: "none",
        mobile_large: "none",
        tablet: "block",
        small_laptop: "block",
        lg_laptop: "block",
        xl_desktop: "block",
      },
      {
        image: `${mashonaFemale}`,
        name: "Mashona Female",
        count: 8,
        mobile_small: "none",
        mobile_large: "none",
        tablet: "block",
        small_laptop: "block",
        lg_laptop: "block",
        xl_desktop: "block",
      },
    ],
  },
  {
    title: "Pig Breeds",
    description: "10+ breeds ",
    items: [
      {
        image: `${durocPiglet}`,
        name: "Duroc Piglet",
        count: 4,
        route: "/sections/navigation/navbars",
        mobile_small: "block",
        mobile_large: "block",
        tablet: "block",
        small_laptop: "block",
        lg_laptop: "block",
        xl_desktop: "block",
      },
      {
        image: `${durocFemale}`,
        name: "Duroc Female",
        count: 4,
        route: "/sections/navigation/navbars",
        mobile_small: "block",
        mobile_large: "block",
        tablet: "block",
        small_laptop: "block",
        lg_laptop: "block",
        xl_desktop: "block",
      },
      {
        image: `${durocFemale}`,
        name: "Duroc Male",
        count: 4,
        route: "/sections/navigation/navbars",
        mobile_small: "block",
        mobile_large: "block",
        tablet: "block",
        small_laptop: "block",
        lg_laptop: "block",
        xl_desktop: "block",
      },
      {
        image: `${hampshirePiglet}`,
        name: "Hampshire Piglet",
        count: 4,
        route: "/sections/navigation/navbars",
        mobile_small: "none",
        mobile_large: "none",
        tablet: "block",
        small_laptop: "block",
        lg_laptop: "block",
        xl_desktop: "block",
      },
      {
        image: `${hampshireMale}`,
        name: "Hampshire Male",
        count: 4,
        route: "/sections/navigation/navbars",
        mobile_small: "none",
        mobile_large: "none",
        tablet: "block",
        small_laptop: "block",
        lg_laptop: "block",
        xl_desktop: "block",
      },
      {
        image: `${hampshireFemale}`,
        name: "Hampshire Female",
        count: 4,
        route: "/sections/navigation/navbars",
        mobile_small: "none",
        mobile_large: "none",
        tablet: "block",
        small_laptop: "block",
        lg_laptop: "block",
        xl_desktop: "block",
      },
      {
        image: `${landracePiglet}`,
        name: "Landrace Piglet",
        count: 4,
        route: "/sections/navigation/navbars",
        mobile_small: "none",
        mobile_large: "none",
        tablet: "block",
        small_laptop: "block",
        lg_laptop: "block",
        xl_desktop: "block",
      },
      {
        image: `${landraceMale}`,
        name: "Landrace Male",
        count: 4,
        route: "/sections/navigation/navbars",
        mobile_small: "none",
        mobile_large: "none",
        tablet: "block",
        small_laptop: "block",
        lg_laptop: "block",
        xl_desktop: "block",
      },
      {
        image: `${landraceFemale}`,
        name: "Landrace Female",
        count: 4,
        route: "/sections/navigation/navbars",
        mobile_small: "none",
        mobile_large: "none",
        tablet: "block",
        small_laptop: "block",
        lg_laptop: "block",
        xl_desktop: "block",
      },
      {
        image: `${largeWhitePiglet}`,
        name: "Large White Piglet",
        count: 4,
        route: "/sections/navigation/navbars",
        mobile_small: "none",
        mobile_large: "none",
        tablet: "block",
        small_laptop: "block",
        lg_laptop: "block",
        xl_desktop: "block",
      },
      {
        image: `${largeWhiteMale}`,
        name: "Large White Male",
        count: 4,
        route: "/sections/navigation/navbars",
        mobile_small: "none",
        mobile_large: "none",
        tablet: "block",
        small_laptop: "block",
        lg_laptop: "block",
        xl_desktop: "block",
      },
      {
        image: `${largeWhiteFemale}`,
        name: "Large White Female",
        count: 4,
        route: "/sections/navigation/navbars",
        mobile_small: "none",
        mobile_large: "none",
        tablet: "block",
        small_laptop: "block",
        lg_laptop: "block",
        xl_desktop: "block",
      },
      {
        image: `${pietrainPiglet}`,
        name: "Pietrain Piglet",
        count: 4,
        route: "/sections/navigation/navbars",
        mobile_small: "none",
        mobile_large: "none",
        tablet: "block",
        small_laptop: "block",
        lg_laptop: "block",
        xl_desktop: "block",
      },
      {
        image: `${pietrainMale}`,
        name: "Pietrain Male",
        count: 4,
        route: "/sections/navigation/navbars",
        mobile_small: "none",
        mobile_large: "none",
        tablet: "block",
        small_laptop: "block",
        lg_laptop: "block",
        xl_desktop: "block",
      },
      {
        image: `${pietrainFemale}`,
        name: "Pietrain Female",
        count: 4,
        route: "/sections/navigation/navbars",
        mobile_small: "none",
        mobile_large: "none",
        tablet: "block",
        small_laptop: "block",
        lg_laptop: "block",
        xl_desktop: "block",
      },
    ],
  },
  {
    title: "Goat Breeds",
    description: "50+ goat breeds to chose in any ratio of choice = kids to adult goats.",
    items: [
      {
        image: `${boerKid}`,
        name: "Boer kid",
        count: 6,
        mobile_small: "block",
        mobile_large: "block",
        tablet: "block",
        small_laptop: "block",
        lg_laptop: "block",
        xl_desktop: "block",
      },
      {
        image: `${boerMale}`,
        name: "Boer Male",
        count: 8,
        mobile_small: "block",
        mobile_large: "block",
        tablet: "block",
        small_laptop: "block",
        lg_laptop: "block",
        xl_desktop: "block",
      },
      {
        image: `${boerFemale}`,
        name: "boer Female",
        count: 3,
        mobile_small: "block",
        mobile_large: "block",
        tablet: "block",
        small_laptop: "block",
        lg_laptop: "block",
        xl_desktop: "block",
      },
      {
        image: `${kalahariRedKid}`,
        name: "Kalahari Red Kid",
        count: 6,
        mobile_small: "none",
        mobile_large: "none",
        tablet: "block",
        small_laptop: "block",
        lg_laptop: "block",
        xl_desktop: "block",
      },
      {
        image: `${kalahariRedMale}`,
        name: "Kalahari Red Male",
        count: 6,
        mobile_small: "none",
        mobile_large: "none",
        tablet: "block",
        small_laptop: "block",
        lg_laptop: "block",
        xl_desktop: "block",
      },
      {
        image: `${kalahariRedFemale}`,
        name: "Kalahari Red Female",
        count: 6,
        mobile_small: "none",
        mobile_large: "none",
        tablet: "block",
        small_laptop: "block",
        lg_laptop: "block",
        xl_desktop: "block",
      },
      {
        image: `${saanenKid}`,
        name: "Saanen Kid",
        count: 6,
        mobile_small: "none",
        mobile_large: "none",
        tablet: "block",
        small_laptop: "block",
        lg_laptop: "block",
        xl_desktop: "block",
      },
      {
        image: `${saanenMale}`,
        name: "Saanen Male",
        count: 6,
        mobile_small: "none",
        mobile_large: "none",
        tablet: "block",
        small_laptop: "block",
        lg_laptop: "block",
        xl_desktop: "block",
      },
      {
        image: `${saanenFemale}`,
        name: "Saanen Female",
        count: 6,
        mobile_small: "none",
        mobile_large: "none",
        tablet: "block",
        small_laptop: "block",
        lg_laptop: "block",
        xl_desktop: "block",
      },
      {
        image: `${toggenburgKid}`,
        name: "Toggenburg Kid",
        count: 6,
        mobile_small: "none",
        mobile_large: "none",
        tablet: "block",
        small_laptop: "block",
        lg_laptop: "block",
        xl_desktop: "block",
      },
      {
        image: `${toggenburgMale}`,
        name: "Toggenburg Male",
        count: 6,
        mobile_small: "none",
        mobile_large: "none",
        tablet: "block",
        small_laptop: "block",
        lg_laptop: "block",
        xl_desktop: "block",
      },
      {
        image: `${toggenburgFemale}`,
        name: "Toggenburg Female",
        count: 6,
        mobile_small: "none",
        mobile_large: "none",
        tablet: "block",
        small_laptop: "block",
        lg_laptop: "block",
        xl_desktop: "block",
      },
      {
        image: `${mashonaGoatFemale}`,
        name: "Mashona Goat Female",
        count: 6,
        mobile_small: "none",
        mobile_large: "none",
        tablet: "block",
        small_laptop: "block",
        lg_laptop: "block",
        xl_desktop: "block",
      },
    ],
  },
];
