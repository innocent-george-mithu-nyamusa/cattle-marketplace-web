import {
  Button,
  Card,
  CardHeader,
  CardMedia,
  CardActions,
  CardContent,
  IconButton,
  Chip,
  Stack,
} from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import MKTypography from "components/MKTypography";
import { truncateString } from "utils/functions";
import cow from "assets/images/animals/cattle/angus/arbedeen-angus-male.jpg";

function AnimalCard() {
  return (
    <Card
      sx={{
        maxWidth: "20%",
        borderRadius: "10px",
        height: "fit-content",
        backgroundColor: "#f0f2f5",
      }}
    >
      <CardHeader
        avatar={
          <Stack direction="row" spacing={2}>
            <Chip variant="primary" label="auction" />
            <Chip variant="success" color="primary" label="available" />
          </Stack>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
      />
      <CardMedia component="img" width="100" image={cow} alt="Cow" />
      <CardContent>
        <Stack direction="row" spacing={4} justifyContent="space-between">
          <MKTypography variant="body2" sx={{ fontWeight: 400 }}>
            Breed:
          </MKTypography>
          <MKTypography variant="body2" sx={{ fontWeight: 200 }}>
            Mashona
          </MKTypography>
        </Stack>
        <Stack direction="row" spacing={4} justifyContent="space-between">
          <MKTypography variant="body2" sx={{ fontWeight: 400 }}>
            Age:
          </MKTypography>
          <MKTypography variant="body2" sx={{ fontWeight: 200 }}>
            1 year 2 months
          </MKTypography>
        </Stack>
        <Stack direction="column" spacing={1}>
          <MKTypography variant="body2" sx={{ fontWeight: 400 }}>
            Description:
          </MKTypography>
          <MKTypography variant="body2" sx={{ fontWeight: 200 }}>
            {truncateString(
              `Provide a description of the cow's physical appearance, including its color, size, weight, and any notable markings or features. This
              helps potential buyers visualize the animal`,
              70,
              true
            )}
          </MKTypography>
        </Stack>
      </CardContent>
      <CardActions>
        <Button>View Details</Button>
        <Button>Book inspection</Button>
        <Button>Add to cart </Button>
      </CardActions>
    </Card>
  );
}

export default AnimalCard;
