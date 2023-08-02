import { useState } from "react";

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

//database
import { auth } from "config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc } from "firebase/firestore";
import { setUserDoc } from "services/collectionService";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";
import CircularProgress from "@mui/material/CircularProgress";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKAlert from "components/MKAlert";

// Material Kit 2 React example components
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import SimpleFooter from "examples/Footers/SimpleFooter";

// Material Kit 2 React page layout routes
import routes from "routes.prod";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import validateEmail, { customErrorMessage } from "utils/functions";

function SignUpBasic() {
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showAlert, setAlert] = useState(false);
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const formHandler = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value });
  };

  const handleFormSubmission = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!validateEmail(form.email)) {
      setLoading(false);
      Object.assign(document.getElementById("emailInput"), {
        error: "error",
        helperText: "invalid password entered",
      });
    }

    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userData) => {
        // const user = userCred.user;
        console.log("this is auth user creds");
        console.log(userData);
      })
      .catch((error) => {
        setLoading(false);
        const errorMessage = customErrorMessage(error.code);
        setMessage(errorMessage);
        setAlert(true);
      });

    console.log("added user auth adata");

    setDoc(setUserDoc(form.email), {
      firstname: form.firstname,
      lastname: form.lastname,
      phone: form.phone,
      email: form.email,
    })
      .then((user) => {
        console.log(user);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);

        setMessage("Retry to register. An error occured during registration.");
        setAlert(true);
        setLoading(false);
      });

    navigate("/");
  };

  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://livestock-marketplace.co.zw/",
          label: "Download Apps",
          color: "info",
        }}
        transparent
        light
      />
      <MKBox
        position="absolute"
        top={0}
        left={0}
        zIndex={1}
        width="100%"
        minHeight="100vh"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <MKBox px={1} width="100%" height="100vh" mx="auto" position="relative" zIndex={2}>
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            <Card>
              <MKBox
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                mx={2}
                mt={-3}
                p={2}
                mb={1}
                textAlign="center"
              >
                <MKTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                  Create your account
                </MKTypography>
                <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
                  <Grid item xs={2}>
                    <MKTypography component={MuiLink} href="#" variant="body1" color="white">
                      <FacebookIcon color="inherit" />
                    </MKTypography>
                  </Grid>
                  <Grid item xs={2}>
                    <MKTypography component={MuiLink} href="#" variant="body1" color="white">
                      <LocalPhoneIcon color="inherit" />
                    </MKTypography>
                  </Grid>
                  <Grid item xs={2}>
                    <MKTypography component={MuiLink} href="#" variant="body1" color="white">
                      <GoogleIcon color="inherit" />
                    </MKTypography>
                  </Grid>
                </Grid>
              </MKBox>
              <MKBox pt={4} pb={3} px={3}>
                <MKBox component="form" onSubmit={handleFormSubmission} role="form">
                  <MKBox mb={1}>
                    <MKInput
                      type="text"
                      label="Firstname"
                      id="firstname"
                      onChange={(e) => formHandler("firstname", e)}
                      fullWidth
                    />
                  </MKBox>
                  <MKBox mb={1}>
                    <MKInput
                      type="text"
                      label="Lastname"
                      id="lastnameInput"
                      onChange={(e) => formHandler("lastname", e)}
                      fullWidth
                    />
                  </MKBox>
                  <MKBox mb={1}>
                    <MKInput
                      type="phone"
                      label="Phone"
                      id="phoneInput"
                      onChange={(e) => formHandler("phone", e)}
                      fullWidth
                    />
                  </MKBox>
                  <MKBox mb={1}>
                    <MKInput
                      type="email"
                      label="Email"
                      id="emailInput"
                      onChange={(e) => formHandler("email", e)}
                      fullWidth
                    />
                  </MKBox>
                  <MKBox mb={1}>
                    <MKInput
                      type="password"
                      label="Password"
                      id="passwordInput"
                      onChange={(e) => formHandler("password", e)}
                      fullWidth
                    />
                  </MKBox>
                  <MKBox display="flex" alignItems="center" ml={-1}>
                    <Switch checked={rememberMe} onChange={handleSetRememberMe} />
                    <MKTypography
                      variant="button"
                      fontWeight="regular"
                      color="text"
                      onClick={handleSetRememberMe}
                      sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                    >
                      &nbsp;&nbsp;Remember me
                    </MKTypography>
                  </MKBox>

                  {showAlert ? (
                    <MKAlert color="error" dismissible>
                      {message}
                    </MKAlert>
                  ) : (
                    <MKBox></MKBox>
                  )}

                  <MKBox mt={2} mb={1} display="flex" justifyContent="center" alignItems="center">
                    {loading ? (
                      <CircularProgress color="info" />
                    ) : (
                      <MKButton type="submit" variant="gradient" color="info" fullWidth>
                        sign up
                      </MKButton>
                    )}
                  </MKBox>
                  <MKBox mt={2} mb={1} textAlign="center">
                    <MKTypography variant="button" color="text">
                      Already have an account?{" "}
                      <MKTypography
                        component={Link}
                        to="/login"
                        variant="button"
                        color="info"
                        fontWeight="medium"
                        textGradient
                      >
                        Sign in
                      </MKTypography>
                    </MKTypography>
                  </MKBox>
                </MKBox>
              </MKBox>
            </Card>
          </Grid>
        </Grid>
      </MKBox>
      <MKBox width="100%" position="absolute" zIndex={2} bottom="1.625rem">
        <SimpleFooter light />
      </MKBox>
    </>
  );
}

export default SignUpBasic;
