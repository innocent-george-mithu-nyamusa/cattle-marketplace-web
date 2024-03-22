import React, { Fragment } from "react";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import AppRouter from "./routes/AppRouter";
import AnimalProvider from "_helper/animal/AnimalProvider";
import UserProvider from "_helper/Users/UserProvider";
import theme from "assets/theme";

export default function App() {
  return (
    <Fragment>
      <UserProvider>
        <AnimalProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppRouter />
          </ThemeProvider>
        </AnimalProvider>
      </UserProvider>
    </Fragment>
  );
}
