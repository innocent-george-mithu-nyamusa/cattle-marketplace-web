import { useEffect } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// themes
import theme from "assets/theme";
import Presentation from "layouts/pages/presentation";
import Homepage from "layouts/pages/homepage";
import SignIn from "pages/SignIn";
import SignUp from "pages/SignUp";
import routes from "routes.prod";

export default function AppRouter() {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        const item = (
          <Route
            exact
            path={route.route}
            element={<route.component {...route.properties} />}
            key={route.key}
          />
        );
        return item;
      }

      return null;
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Routes>
        {getRoutes(routes)}

        <Route
          path="/livestock/cattle/brahman"
          element={<Homepage animalType="cattle" animalBreed="mashona" animalName="cattle" />}
        />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/" element={<Presentation />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </ThemeProvider>
  );
}
