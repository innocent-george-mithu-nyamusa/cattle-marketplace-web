import { useContext, useState } from "react";

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";
import CircularProgress from "@mui/material/CircularProgress";

// @mui icons
import GoogleIcon from "@mui/icons-material/Google";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

// components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKAlert from "components/MKAlert";

//context import
import UserContext from "_helper/Users";

// example components
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import SimpleFooter from "examples/Footers/SimpleFooter";

// page layout routes
import routes from "routes.prod";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";

function SignUpBasic() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { signUpUser } = useContext(UserContext);

  const [rememberMe, setRememberMe] = useState(false);
  const [farmer, setFarmer] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showAlert, setAlert] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  const handleSetFarmer = () => setFarmer(!farmer);

  const handleFormSubmission = async (signUpFormData) => {
    setLoading(true);
    const result = await signUpUser(signUpFormData);

    console.log(result);
    reset();

    if (result.success === true) {
      navigate("/");
    } else {
      setMessage(result.error);
      setAlert(true);
    }
    setLoading(false);
  };

  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: `${process.env.PUBLIC_URL}/login`,
          label: "Sign In",
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
                <Grid
                  container
                  spacing={3}
                  display={{ xs: "none", sm: "flex", md: "flex", lg: "flex", xl: "flex" }}
                  justifyContent="center"
                  sx={{ mt: 1, mb: 2 }}
                >
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
              <MKBox
                pt={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 4 }}
                pb={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 4 }}
                px={{ xs: 1, sm: 1, md: 3, lg: 3, xl: 3 }}
              >
                <MKBox component="form" onSubmit={handleSubmit(handleFormSubmission)} role="form">
                  <MKBox mb={1}>
                    <MKInput
                      type="text"
                      label="Firstname"
                      id="firstname"
                      fullWidth
                      error={errors.firstname && true}
                      {...register("firstname", { required: true })}
                    />
                  </MKBox>
                  <MKBox mb={1}>
                    <MKInput
                      type="text"
                      label="Lastname"
                      id="lastnameInput"
                      fullWidth
                      {...register("lastname", { required: true })}
                    />
                  </MKBox>
                  <MKBox mb={1}>
                    <MKInput
                      type="phone"
                      label="Phone"
                      id="phoneInput"
                      fullWidth
                      error={errors.phone && true}
                      {...register("phone", { required: true })}
                    />
                  </MKBox>
                  <MKBox mb={1}>
                    <MKInput
                      type="email"
                      label="Email"
                      id="emailInput"
                      fullWidth
                      error={errors.email && true}
                      {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })}
                    />
                  </MKBox>
                  <MKBox mb={1}>
                    <MKInput
                      type="password"
                      label="Password"
                      id="passwordInput"
                      error={errors.password && true}
                      {...register("password", {
                        required: true,
                        pattern:
                          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/,
                      })}
                      fullWidth
                    />
                  </MKBox>
                  <MKBox display="flex" alignItems="center" ml={-1}>
                    <MKBox inherit>
                      <Switch checked={rememberMe} onChange={handleSetRememberMe} />
                      <MKTypography
                        variant="button"
                        fontWeight="regular"
                        color="text"
                        onClick={handleSetRememberMe}
                        sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                      >
                        &nbsp;Remember me
                      </MKTypography>
                    </MKBox>
                    <MKBox inherit>
                      <Switch checked={farmer} onChange={handleSetFarmer} />
                      <MKTypography
                        variant="button"
                        fontWeight="regular"
                        color="text"
                        onClick={handleSetFarmer}
                        sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                      >
                        &nbsp;A farmer?
                      </MKTypography>
                    </MKBox>
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
