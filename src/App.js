import React, { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import AnimalProvider from "_helper/animal/AnimalProvider";

export default function App() {
  return (
    <Fragment>
      <AnimalProvider>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </AnimalProvider>
    </Fragment>
  );
}
