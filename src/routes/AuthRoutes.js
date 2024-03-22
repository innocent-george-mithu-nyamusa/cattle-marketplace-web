export default AuthRoutes = [
  {
    name: "landing pages",
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
      {
        name: "author",
        route: "/pages/landing-pages/author",
        component: <Author />,
      },
    ],
  },
];
