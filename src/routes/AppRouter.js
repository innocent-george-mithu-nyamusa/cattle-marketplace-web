import { useEffect, Suspense } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation, BrowserRouter } from "react-router-dom";

import Presentation from "layouts/pages/presentation";
import SignIn from "pages/SignIn";
import SignUp from "pages/SignUp";
import PrivateRoute from "routes/PrivateRoute";
import LayoutRoutes from "./LayoutRoutes";
import routes from "routes.prod";

export default function AppRouter() {
  const { pathname } = useLocation();
  const [currentUser, setCurrentUser] = useState(false);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    let abortController = new AbortController();
    app.auth().onAuthStateChanged(setCurrentUser);
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;

    return () => {
      abortController.abort();
    };
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        const item = <Route exact path={route.route} element={route.component} key={route.key} />;
        return item;
      }

      return null;
    });

  return (
    <BrowserRouter basename="/">
      <>
        <Suspense>
          <Routes>
            <Route path={"/"} element={<PrivateRoute />}>
              {currentUser !== null && currentUser !== false ? (
                <>
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}`}
                    element={<Navigate to={`${process.env.PUBLIC_URL}/`} />}
                  />
                  <Route
                    exact
                    path={`/`}
                    element={<Navigate to={`${process.env.PUBLIC_URL}/`} />}
                  />
                  <Route path={`/*`} element={<LayoutRoutes />} />
                </>
              ) : (
                <>
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}`}
                    element={<Navigate to={`${process.env.PUBLIC_URL}/login`} />}
                  />
                  <Route
                    exact
                    path={`/`}
                    element={<Navigate to={`${process.env.PUBLIC_URL}/login`} />}
                  />
                </>
              )}
            </Route>
            {getRoutes(routes)}
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/" element={<Presentation />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </>
    </BrowserRouter>
  );
}
