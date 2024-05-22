import { Avatar, IconButton, Divider, Paper, InputBase } from "@mui/material";
import { ArrowDropDown, Search, NotificationsNone } from "@mui/icons-material";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { stringAvatar } from "../../utils/functions";

function MainTopNavigation() {
  return (
    <MKBox
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      maxHeight="4rem"
      bgColor="white"
      py={2}
      px={0}
    >
      <MKBox justifyContent="flex-end" width="fit-content">
        <MKTypography
          variant="title"
          color="dark"
          sx={{
            marginLeft: "1rem",
          }}
        >
          products
        </MKTypography>
      </MKBox>
      <MKBox display="flex" justifyContent="flex-start" width="fit-content">
        <Paper
          component="form"
          sx={{
            p: "4px",
            display: "inline-block",
            alignItems: "center",
            borderRadius: "1rem",
            backgroundColor: "#f0f2f5",
            opacity: "0.6",
            marginLeft: "1rem",
            marginRight: "0.5rem",
          }}
          elevation={0}
        >
          <IconButton
            sx={{ p: "1px", fontSize: "1.5rem", opacity: "0.9", marginBottom: "-0.1rem" }}
            aria-label="menu"
          >
            <Search />
          </IconButton>
          <InputBase
            sx={{ ml: 1, width: "20rem", height: "1.75rem", fontSize: "0.9rem" }}
            placeholder="Search"
            inputProps={{ "aria-label": "Search" }}
          />
        </Paper>
        <IconButton sx={{ p: "1px", fontSize: "1.5rem", opacity: "0.9" }} aria-label="menu">
          <NotificationsNone />
        </IconButton>
        <Divider orientation="vertical" sx={{ width: "0.1rem", height: "3rem" }} variant="middle" />
        <Paper
          component="form"
          sx={{
            p: "4px",
            display: "flex",
            alignItems: "center",
            borderRadius: "1rem",
            opacity: "0.6",
            marginRight: "1rem",
          }}
          elevation={0}
        >
          <Avatar
            {...stringAvatar("Innocent Nyamusa")}
            sx={{
              width: 40,
              height: 40,
              marginLeft: "0.5rem",
              marginRight: "0.3rem",
              padding: "0.2rem",
            }}
          />
          <IconButton
            sx={{ p: "1px", fontSize: "1.5rem", opacity: "0.9", marginRight: "1rem" }}
            aria-label="menu"
          >
            <MKTypography
              variant="subtitle"
              color="dark"
              sx={{ marginLeft: "0.1rem", fontSize: "0.9rem" }}
            >
              Innocent Nyamusa
            </MKTypography>
            <ArrowDropDown />
          </IconButton>
        </Paper>
      </MKBox>
    </MKBox>
  );
}

export default MainTopNavigation;
