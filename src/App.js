import React, { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import AnimalProvider from "_helper/animal/AnimalProvider";
import UserProvider from "_helper/Users/UserProvider";

export default function App() {
  return (
    <Fragment>
      <UserProvider>
        <AnimalProvider>
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
        </AnimalProvider>
      </UserProvider>
    </Fragment>
  );
}
