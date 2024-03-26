import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import CustomLayout from "layouts/sections/components/CustomLayout";

import routes from "routes/Routes";

const LayoutRoutes = () => {
  console.log("we are hitting these routes");
  return (
    <Fragment>
      <Routes>
        {routes.map(({ route, component }, i) => (
          <Route element={<CustomLayout />} key={i}>
            <Route path={route} element={component} />
          </Route>
        ))}
      </Routes>
    </Fragment>
  );
};

export default LayoutRoutes;
